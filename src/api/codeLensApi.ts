import { AxiosInstance } from 'axios';
import { CodeLensFileInfoDto } from '../types';

/**
 * API client for working with CodeLens features in Bevel
 */
export class CodeLensApi {
  constructor(private axios: AxiosInstance) {}

  /**
   * Get CodeLens information for a file
   * @param projectPath Path to the project
   * @param filePath Path to the file
   */
  async getCodeLensInfo(
    projectPath: string,
    filePath: string
  ): Promise<CodeLensFileInfoDto> {
    const response = await this.axios.get<CodeLensFileInfoDto>('/api/codelens', {
      params: { projectPath, filePath }
    });
    return response.data;
  }
}
