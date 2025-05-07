"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerApi = void 0;
/**
 * API client for checking server status in Bevel
 */
class ServerApi {
    constructor(axios) {
        this.axios = axios;
    }
    /**
     * Check if the Bevel server is alive
     */
    async isAlive() {
        const response = await this.axios.get('/api/is-alive');
        return response.data.response;
    }
}
exports.ServerApi = ServerApi;
//# sourceMappingURL=serverApi.js.map