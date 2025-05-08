import { AxiosInstance } from 'axios';
import { DescriptionDto } from '../types';
/**
 * API client for working with business context in Bevel
 */
export declare class BusinessContextApi {
    private axios;
    constructor(axios: AxiosInstance);
    /**
     * Get business context for a node
     * @param projectPath Path to the project
     * @param nodeName Name of the node
     */
    getBusinessContext(projectPath: string, nodeName: string): Promise<string>;
    /**
     * Get business context for a node without using the graph
     * @param projectPath Path to the project
     * @param nodeName Name of the node
     */
    getBusinessContextWithoutGraph(projectPath: string, nodeName: string): Promise<string>;
    /**
     * Generate business context for all nodes
     * @param projectPath Path to the project
     */
    generateAllBusinessContext(projectPath: string): Promise<void>;
    /**
     * Save business context for a node
     * @param projectPath Path to the project
     * @param nodeName Name of the node
     * @param description The description to save
     */
    saveBusinessContext(projectPath: string, nodeName: string, description: DescriptionDto): Promise<void>;
}
