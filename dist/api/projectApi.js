"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectApi = void 0;
/**
 * API client for working with projects in Bevel
 */
class ProjectApi {
    constructor(axios) {
        this.axios = axios;
    }
    /**
     * Update Bevel data for a project
     * @param projectPath Path to the project
     */
    async updateBevelData(projectPath) {
        await this.axios.get('/api/project/update-bevel-data', {
            params: { projectPath }
        });
    }
    /**
     * Get codebase statistics for a project
     * @param projectPath Path to the project
     */
    async getCodebaseStats(projectPath) {
        const response = await this.axios.get('/api/project/stats', {
            params: { projectPath }
        });
        return response.data;
    }
    /**
     * Check if a project has been analyzed
     * @param projectPath Path to the project
     */
    async isProjectAnalyzed(projectPath) {
        const response = await this.axios.get('/api/project/is-analyzed', {
            params: { projectPath }
        });
        return response.data.response;
    }
    /**
     * Analyze a project
     * @param projectPath Path to the project
     * @param fileToAdd Optional file to add to the analysis
     * @param fileToDelete Optional file to delete from the analysis
     * @param fileToUpdate Optional file to update in the analysis
     */
    async analyzeProject(projectPath, fileToAdd, fileToDelete, fileToUpdate) {
        await this.axios.get('/api/project/analyze', {
            params: {
                projectPath,
                fileToAdd,
                fileToDelete,
                fileToUpdate
            }
        });
    }
    /**
     * Download a model for a project
     * @param projectPath Path to the project
     */
    async downloadModel(projectPath) {
        const response = await this.axios.get('/api/model/download', {
            params: { projectPath },
            responseType: 'stream',
            headers: {
                'Accept': 'text/event-stream'
            }
        });
        return response.data;
    }
}
exports.ProjectApi = ProjectApi;
//# sourceMappingURL=projectApi.js.map