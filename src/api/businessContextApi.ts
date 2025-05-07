import { AxiosInstance } from 'axios';
import { DescriptionDto, LLMType } from '../types';

/**
 * API client for working with business context in Bevel
 */
export class BusinessContextApi {
  constructor(private axios: AxiosInstance) {}

  /**
   * Get business context for a node
   * @param projectPath Path to the project
   * @param nodeName Name of the node
   * @param selectedLLM The LLM type to use
   */
  async getBusinessContext(
    projectPath: string,
    nodeName: string,
    selectedLLM: LLMType
  ): Promise<string> {
    const response = await this.axios.get<string>(
      '/api/business-context',
      {
        params: { projectPath, nodeName, selectedLLM }
      }
    );
    return response.data;
  }

  /**
   * Get business context for a node without using the graph
   * @param projectPath Path to the project
   * @param nodeName Name of the node
   * @param selectedLLM The LLM type to use
   */
  async getBusinessContextWithoutGraph(
    projectPath: string,
    nodeName: string,
    selectedLLM: LLMType
  ): Promise<string> {
    const response = await this.axios.get<string>(
      '/api/business-context/without-graph',
      {
        params: { projectPath, nodeName, selectedLLM }
      }
    );
    return response.data;
  }

  /**
   * Generate business context for all nodes
   * @param projectPath Path to the project
   * @param selectedLLM The LLM type to use
   */
  async generateAllBusinessContext(
    projectPath: string,
    selectedLLM: LLMType
  ): Promise<void> {
    await this.axios.get(
      '/api/business-context/generate-all',
      {
        params: { projectPath, selectedLLM }
      }
    );
  }

  /**
   * Save business context for a node
   * @param projectPath Path to the project
   * @param nodeName Name of the node
   * @param description The description to save
   */
  async saveBusinessContext(
    projectPath: string,
    nodeName: string,
    description: DescriptionDto
  ): Promise<void> {
    await this.axios.post(
      '/api/business-context/save',
      description,
      {
        params: { projectPath, nodeName }
      }
    );
  }
}
