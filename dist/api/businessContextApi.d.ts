import { AxiosInstance } from 'axios';
import { DescriptionDto, LLMType } from '../types';
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
     * @param selectedLLM The LLM type to use
     */
    getBusinessContext(projectPath: string, nodeName: string, selectedLLM: LLMType): Promise<string>;
    /**
     * Get business context for a node without using the graph
     * @param projectPath Path to the project
     * @param nodeName Name of the node
     * @param selectedLLM The LLM type to use
     */
    getBusinessContextWithoutGraph(projectPath: string, nodeName: string, selectedLLM: LLMType): Promise<string>;
    /**
     * Generate business context for all nodes
     * @param projectPath Path to the project
     * @param selectedLLM The LLM type to use
     */
    generateAllBusinessContext(projectPath: string, selectedLLM: LLMType): Promise<void>;
    /**
     * Save business context for a node
     * @param projectPath Path to the project
     * @param nodeName Name of the node
     * @param description The description to save
     */
    saveBusinessContext(projectPath: string, nodeName: string, description: DescriptionDto): Promise<void>;
}
