import { AxiosInstance } from 'axios';
import { ChatMessageRequestDto, ChatCompletionChunk, LLMType } from '../types';

/**
 * API client for interacting with chat functionality
 */
export class ChatApi {
  constructor(private axios: AxiosInstance) {}

  /**
   * Process a chat message and get streaming responses
   * @param projectPath Path to the project
   * @param message The chat message request
   * @returns A promise that resolves to an array of chat completion chunks
   */
  async processChatMessage(
    projectPath: string,
    message: ChatMessageRequestDto
  ): Promise<ChatCompletionChunk[]> {
    const response = await this.axios.post<ChatCompletionChunk[]>(
      '/api/chat/message',
      message,
      {
        params: { projectPath },
        headers: {
          'Accept': 'application/x-ndjson'
        },
        responseType: 'stream'
      }
    );
    
    return response.data;
  }
}
