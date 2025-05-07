import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
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
export class BevelClient {
  private axiosInstance: AxiosInstance;
  
  // API modules
  public nodes: NodeApi;
  public connections: ConnectionsApi;
  public diagrams: DiagramApi;
  public chat: ChatApi;
  public businessContext: BusinessContextApi;
  public project: ProjectApi;
  public graph: GraphApi;
  public codeLens: CodeLensApi;
  public server: ServerApi;

  /**
   * Creates a new Bevel API client
   * @param baseURL The base URL of the Bevel API server (default: http://localhost:1645)
   * @param config Additional Axios configuration
   */
  constructor(baseURL: string = 'http://localhost:1645', config: AxiosRequestConfig = {}) {
    this.axiosInstance = axios.create({
      baseURL,
      ...config
    });

    // Initialize API modules
    this.nodes = new NodeApi(this.axiosInstance);
    this.connections = new ConnectionsApi(this.axiosInstance);
    this.diagrams = new DiagramApi(this.axiosInstance);
    this.chat = new ChatApi(this.axiosInstance);
    this.businessContext = new BusinessContextApi(this.axiosInstance);
    this.project = new ProjectApi(this.axiosInstance);
    this.graph = new GraphApi(this.axiosInstance);
    this.codeLens = new CodeLensApi(this.axiosInstance);
    this.server = new ServerApi(this.axiosInstance);
  }

  /**
   * Set authorization header with the given token
   * @param token The authorization token
   * @param tokenType The token type (default: 'Bearer')
   */
  public setAuthToken(token: string, tokenType: string = 'Bearer'): void {
    this.axiosInstance.defaults.headers.common['Authorization'] = `${tokenType} ${token}`;
  }

  /**
   * Get the underlying axios instance for advanced usage
   */
  public getAxiosInstance(): AxiosInstance {
    return this.axiosInstance;
  }
}
