import { AxiosInstance } from 'axios';
import { ManualConnection, SequenceDiagramDto } from '../types';
/**
 * API client for working with diagrams in Bevel
 */
export declare class DiagramApi {
    private axios;
    constructor(axios: AxiosInstance);
    /**
     * Generate a sequence diagram
     * @param projectPath Path to the project
     * @param startingNodeName Name of the starting node
     * @param manualConnections Optional manual connections to include
     */
    generateSequenceDiagram(projectPath: string, startingNodeName: string, manualConnections?: ManualConnection[]): Promise<SequenceDiagramDto>;
}
