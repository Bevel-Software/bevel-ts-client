"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphApi = void 0;
/**
 * API client for working with the graph in Bevel
 */
class GraphApi {
    constructor(axios) {
        this.axios = axios;
    }
    /**
     * Get the complete graph for a project
     * @param projectPath Path to the project
     */
    async getGraph(projectPath) {
        const response = await this.axios.get('/api/graph', {
            params: { projectPath }
        });
        return response.data;
    }
    /**
     * Get the graph structure for a project
     * @param projectPath Path to the project
     */
    async getGraphStructure(projectPath) {
        const response = await this.axios.get('/api/graph/structure', {
            params: { projectPath }
        });
        return response.data;
    }
}
exports.GraphApi = GraphApi;
//# sourceMappingURL=graphApi.js.map