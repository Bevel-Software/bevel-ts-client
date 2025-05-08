import { AxiosInstance } from 'axios';
import { ChatMessageRequestDto, ChatCompletionChunk, LLMType } from '../types';

/**
 * API client for interacting with chat functionality
 */
export class ChatApi {
  constructor(private axios: AxiosInstance) {}

  /**
   * Process a chat message and get streaming responses as an AsyncGenerator
   * @param projectPath Path to the project
   * @param message The chat message request
   * @returns An AsyncGenerator that yields chat completion chunks
   */
  async *streamChatMessage(
    projectPath: string,
    message: ChatMessageRequestDto
  ): AsyncGenerator<ChatCompletionChunk> {
    const response = await this.axios.post(
      '/api/chat/message',
      message,
      {
        params: { projectPath },
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/x-ndjson'
        },
        responseType: 'stream'
      }
    );
    
    const stream = response.data;
    const decoder = new TextDecoder();
    let buffer = '';

    for await (const chunk of stream) {
      buffer += decoder.decode(chunk);
      const lines = buffer.split('\n');
      
      // Keep the last partial line in the buffer
      buffer = lines.pop() || '';

      // Process complete lines
      for (const line of lines) {
        if (!line.trim()) continue;
        try {
          const parsedChunk = JSON.parse(line) as ChatCompletionChunk;
          yield parsedChunk;
        } catch (e) {
          console.error('Error parsing chunk:', e);
          console.debug('Raw chunk data:', line);
        }
      }
    }

    // Process any remaining data in buffer
    if (buffer.trim()) {
      try {
        const parsedChunk = JSON.parse(buffer) as ChatCompletionChunk;
        yield parsedChunk;
      } catch (e) {
        console.error('Error parsing final chunk:', e);
        console.debug('Raw final chunk data:', buffer);
      }
    }
  }

  /**
   * Process a chat message and collect all streaming responses
   * @param projectPath Path to the project
   * @param message The chat message request
   * @returns A promise that resolves to an array of chat completion chunks
   */
  async processChatMessage(
    projectPath: string,
    message: ChatMessageRequestDto
  ): Promise<ChatCompletionChunk[]> {
    const chunks: ChatCompletionChunk[] = [];
    const stream = this.streamChatMessage(projectPath, message);
    
    for await (const chunk of stream) {
      chunks.push(chunk);
    }
    
    return chunks;
  }
}