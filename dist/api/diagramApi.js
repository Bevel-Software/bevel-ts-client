"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiagramApi = void 0;
/**
 * API client for working with diagrams in Bevel
 */
class DiagramApi {
    constructor(axios) {
        this.axios = axios;
    }
    /**
     * Generate a sequence diagram
     * @param projectPath Path to the project
     * @param startingNodeName Name of the starting node
     * @param manualConnections Optional manual connections to include
     */
    async generateSequenceDiagram(projectPath, startingNodeName, manualConnections = []) {
        const response = await this.axios.post('/api/diagram/sequence', manualConnections, {
            params: { projectPath, startingNodeName }
        });
        return response.data;
    }
}
exports.DiagramApi = DiagramApi;
//# sourceMappingURL=diagramApi.js.map