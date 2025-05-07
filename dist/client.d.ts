import { AxiosInstance, AxiosRequestConfig } from 'axios';
import { NodeApi } from './api/nodeApi';
import { ConnectionsApi } from './api/connectionsApi';
import { DiagramApi } from './api/diagramApi';
import { ChatApi } from './api/chatApi';
import { BusinessContextApi } from './api/businessContextApi';
import { ProjectApi } from './api/projectApi';
import { GraphApi } from './api/graphApi';
import { CodeLensApi } from './api/codeLensApi';
import { ServerApi } from './api/serverApi';
/**
 * BevelClient is the main entry point for interacting with the Bevel Graph REST API
 */
export declare class BevelClient {
    private axiosInstance;
    nodes: NodeApi;
    connections: ConnectionsApi;
    diagrams: DiagramApi;
    chat: ChatApi;
    businessContext: BusinessContextApi;
    project: ProjectApi;
    graph: GraphApi;
    codeLens: CodeLensApi;
    server: ServerApi;
    /**
     * Creates a new Bevel API client
     * @param baseURL The base URL of the Bevel API server (default: http://localhost:1645)
     * @param config Additional Axios configuration
     */
    constructor(baseURL?: string, config?: AxiosRequestConfig);
    /**
     * Set authorization header with the given token
     * @param token The authorization token
     * @param tokenType The token type (default: 'Bearer')
     */
    setAuthToken(token: string, tokenType?: string): void;
    /**
     * Get the underlying axios instance for advanced usage
     */
    getAxiosInstance(): AxiosInstance;
}
