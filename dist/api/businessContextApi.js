"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessContextApi = void 0;
/**
 * API client for working with business context in Bevel
 */
class BusinessContextApi {
    constructor(axios) {
        this.axios = axios;
    }
    /**
     * Get business context for a node
     * @param projectPath Path to the project
     * @param nodeName Name of the node
     * @param selectedLLM The LLM type to use
     */
    async getBusinessContext(projectPath, nodeName, selectedLLM) {
        const response = await this.axios.get('/api/business-context', {
            params: { projectPath, nodeName, selectedLLM }
        });
        return response.data;
    }
    /**
     * Get business context for a node without using the graph
     * @param projectPath Path to the project
     * @param nodeName Name of the node
     * @param selectedLLM The LLM type to use
     */
    async getBusinessContextWithoutGraph(projectPath, nodeName, selectedLLM) {
        const response = await this.axios.get('/api/business-context/without-graph', {
            params: { projectPath, nodeName, selectedLLM }
        });
        return response.data;
    }
    /**
     * Generate business context for all nodes
     * @param projectPath Path to the project
     * @param selectedLLM The LLM type to use
     */
    async generateAllBusinessContext(projectPath, selectedLLM) {
        await this.axios.get('/api/business-context/generate-all', {
            params: { projectPath, selectedLLM }
        });
    }
    /**
     * Save business context for a node
     * @param projectPath Path to the project
     * @param nodeName Name of the node
     * @param description The description to save
     */
    async saveBusinessContext(projectPath, nodeName, description) {
        await this.axios.post('/api/business-context/save', description, {
            params: { projectPath, nodeName }
        });
    }
}
exports.BusinessContextApi = BusinessContextApi;
//# sourceMappingURL=businessContextApi.js.map