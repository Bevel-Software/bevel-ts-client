"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeLensApi = void 0;
/**
 * API client for working with CodeLens features in Bevel
 */
class CodeLensApi {
    constructor(axios) {
        this.axios = axios;
    }
    /**
     * Get CodeLens information for a file
     * @param projectPath Path to the project
     * @param filePath Path to the file
     */
    async getCodeLensInfo(projectPath, filePath) {
        const response = await this.axios.get('/api/codelens', {
            params: { projectPath, filePath }
        });
        return response.data;
    }
}
exports.CodeLensApi = CodeLensApi;
//# sourceMappingURL=codeLensApi.js.map