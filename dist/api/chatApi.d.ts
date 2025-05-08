import { AxiosInstance } from 'axios';
import { ChatMessageRequestDto, ChatCompletionChunk } from '../types';
/**
 * API client for interacting with chat functionality
 */
export declare class ChatApi {
    private axios;
    constructor(axios: AxiosInstance);
    /**
     * Process a chat message and get streaming responses
     * @param projectPath Path to the project
     * @param message The chat message request
     * @returns A promise that resolves to an array of chat completion chunks
     */
    processChatMessage(projectPath: string, message: ChatMessageRequestDto): Promise<ChatCompletionChunk[]>;
}
