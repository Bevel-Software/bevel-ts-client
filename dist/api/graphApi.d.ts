import { AxiosInstance } from 'axios';
import { GraphResponseDto, GraphStructureDto } from '../types';
/**
 * API client for working with the graph in Bevel
 */
export declare class GraphApi {
    private axios;
    constructor(axios: AxiosInstance);
    /**
     * Get the complete graph for a project
     * @param projectPath Path to the project
     */
    getGraph(projectPath: string): Promise<GraphResponseDto>;
    /**
     * Get the graph structure for a project
     * @param projectPath Path to the project
     */
    getGraphStructure(projectPath: string): Promise<GraphStructureDto>;
}
