import { AxiosInstance } from 'axios';
import { ManualConnection, SequenceDiagramDto } from '../types';

/**
 * API client for working with diagrams in Bevel
 */
export class DiagramApi {
  constructor(private axios: AxiosInstance) {}

  /**
   * Generate a sequence diagram
   * @param projectPath Path to the project
   * @param startingNodeName Name of the starting node
   * @param manualConnections Optional manual connections to include
   */
  async generateSequenceDiagram(
    projectPath: string,
    startingNodeName: string,
    manualConnections: ManualConnection[] = []
  ): Promise<SequenceDiagramDto> {
    const response = await this.axios.post<SequenceDiagramDto>(
      '/api/diagram/sequence',
      manualConnections,
      {
        params: { projectPath, startingNodeName }
      }
    );
    return response.data;
  }
}
