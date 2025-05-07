import { AxiosInstance } from 'axios';
import { BooleanResponse, CodebaseStats, LLMType } from '../types';

/**
 * API client for working with projects in Bevel
 */
export class ProjectApi {
  constructor(private axios: AxiosInstance) {}

  /**
   * Update Bevel data for a project
   * @param projectPath Path to the project
   */
  async updateBevelData(projectPath: string): Promise<void> {
    await this.axios.get('/api/project/update-bevel-data', {
      params: { projectPath }
    });
  }

  /**
   * Get codebase statistics for a project
   * @param projectPath Path to the project
   */
  async getCodebaseStats(projectPath: string): Promise<CodebaseStats> {
    const response = await this.axios.get<CodebaseStats>('/api/project/stats', {
      params: { projectPath }
    });
    return response.data;
  }

  /**
   * Check if a project has been analyzed
   * @param projectPath Path to the project
   */
  async isProjectAnalyzed(projectPath: string): Promise<boolean> {
    const response = await this.axios.get<BooleanResponse>('/api/project/is-analyzed', {
      params: { projectPath }
    });
    return response.data.response;
  }

  /**
   * Analyze a project
   * @param projectPath Path to the project
   * @param selectedLLM The LLM type to use
   * @param fileToAdd Optional file to add to the analysis
   * @param fileToDelete Optional file to delete from the analysis
   * @param fileToUpdate Optional file to update in the analysis
   */
  async analyzeProject(
    projectPath: string,
    selectedLLM: LLMType,
    fileToAdd?: string,
    fileToDelete?: string,
    fileToUpdate?: string
  ): Promise<void> {
    await this.axios.get('/api/project/analyze', {
      params: { 
        projectPath, 
        selectedLLM,
        fileToAdd,
        fileToDelete,
        fileToUpdate
      }
    });
  }

  /**
   * Download a model for a project
   * @param projectPath Path to the project
   * @param selectedLLM The LLM type to use
   */
  async downloadModel(
    projectPath: string,
    selectedLLM: LLMType
  ): Promise<any> {
    const response = await this.axios.get('/api/model/download', {
      params: { projectPath, selectedLLM },
      responseType: 'stream',
      headers: {
        'Accept': 'text/event-stream'
      }
    });
    return response.data;
  }
}
