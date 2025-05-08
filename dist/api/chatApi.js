"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatApi = void 0;
/**
 * API client for interacting with chat functionality
 */
class ChatApi {
    constructor(axios) {
        this.axios = axios;
    }
    /**
     * Process a chat message and get streaming responses
     * @param projectPath Path to the project
     * @param message The chat message request
     * @returns A promise that resolves to an array of chat completion chunks
     */
    async processChatMessage(projectPath, message) {
        const response = await this.axios.post('/api/chat/message', message, {
            params: { projectPath },
            headers: {
                'Accept': 'application/x-ndjson'
            },
            responseType: 'stream'
        });
        return response.data;
    }
}
exports.ChatApi = ChatApi;
//# sourceMappingURL=chatApi.js.map