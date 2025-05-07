import { AxiosInstance } from 'axios';
import { CodeLensFileInfoDto } from '../types';
/**
 * API client for working with CodeLens features in Bevel
 */
export declare class CodeLensApi {
    private axios;
    constructor(axios: AxiosInstance);
    /**
     * Get CodeLens information for a file
     * @param projectPath Path to the project
     * @param filePath Path to the file
     */
    getCodeLensInfo(projectPath: string, filePath: string): Promise<CodeLensFileInfoDto>;
}
