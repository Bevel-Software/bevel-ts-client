import { AxiosInstance } from 'axios';
import { CodebaseStats, LLMType } from '../types';
/**
 * API client for working with projects in Bevel
 */
export declare class ProjectApi {
    private axios;
    constructor(axios: AxiosInstance);
    /**
     * Update Bevel data for a project
     * @param projectPath Path to the project
     */
    updateBevelData(projectPath: string): Promise<void>;
    /**
     * Get codebase statistics for a project
     * @param projectPath Path to the project
     */
    getCodebaseStats(projectPath: string): Promise<CodebaseStats>;
    /**
     * Check if a project has been analyzed
     * @param projectPath Path to the project
     */
    isProjectAnalyzed(projectPath: string): Promise<boolean>;
    /**
     * Analyze a project
     * @param projectPath Path to the project
     * @param selectedLLM The LLM type to use
     * @param fileToAdd Optional file to add to the analysis
     * @param fileToDelete Optional file to delete from the analysis
     * @param fileToUpdate Optional file to update in the analysis
     */
    analyzeProject(projectPath: string, selectedLLM: LLMType, fileToAdd?: string, fileToDelete?: string, fileToUpdate?: string): Promise<void>;
    /**
     * Download a model for a project
     * @param projectPath Path to the project
     * @param selectedLLM The LLM type to use
     */
    downloadModel(projectPath: string, selectedLLM: LLMType): Promise<any>;
}
