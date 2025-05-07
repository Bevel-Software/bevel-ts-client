import { AxiosInstance } from 'axios';
import { GraphResponseDto, GraphStructureDto } from '../types';

/**
 * API client for working with the graph in Bevel
 */
export class GraphApi {
  constructor(private axios: AxiosInstance) {}

  /**
   * Get the complete graph for a project
   * @param projectPath Path to the project
   */
  async getGraph(projectPath: string): Promise<GraphResponseDto> {
    const response = await this.axios.get<GraphResponseDto>('/api/graph', {
      params: { projectPath }
    });
    return response.data;
  }

  /**
   * Get the graph structure for a project
   * @param projectPath Path to the project
   */
  async getGraphStructure(projectPath: string): Promise<GraphStructureDto> {
    const response = await this.axios.get<GraphStructureDto>('/api/graph/structure', {
      params: { projectPath }
    });
    return response.data;
  }
}
