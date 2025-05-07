import { AxiosInstance } from 'axios';
import { Connection, ConnectionType } from '../types';

/**
 * API client for working with Connections in the Bevel Graph
 */
export class ConnectionsApi {
  constructor(private axios: AxiosInstance) {}

  /**
   * Save connections
   * @param projectPath Path to the project
   * @param connections The connections to save
   */
  async saveConnections(projectPath: string, connections: Connection[]): Promise<void> {
    await this.axios.post('/api/graph/connections/save', connections, {
      params: { projectPath }
    });
  }

  /**
   * Get all connections in the project
   * @param projectPath Path to the project
   */
  async getAllConnections(projectPath: string): Promise<Connection[]> {
    const response = await this.axios.get<Connection[]>('/api/graph/connections/all', {
      params: { projectPath }
    });
    return response.data;
  }

  /**
   * Find connections to a node
   * @param projectPath Path to the project
   * @param nodeId ID of the target node
   */
  async findConnectionsTo(projectPath: string, nodeId: string): Promise<Connection[]> {
    const response = await this.axios.get<Connection[]>('/api/graph/connections/to', {
      params: { projectPath, nodeId }
    });
    return response.data;
  }

  /**
   * Find connections from a node
   * @param projectPath Path to the project
   * @param nodeId ID of the source node
   */
  async findConnectionsFrom(projectPath: string, nodeId: string): Promise<Connection[]> {
    const response = await this.axios.get<Connection[]>('/api/graph/connections/from', {
      params: { projectPath, nodeId }
    });
    return response.data;
  }

  /**
   * Get all connections of a specific type
   * @param projectPath Path to the project
   * @param connectionType Type of connections to get
   */
  async getAllConnectionsOfType(projectPath: string, connectionType: ConnectionType): Promise<Connection[]> {
    const response = await this.axios.get<Connection[]>('/api/graph/connections/of-type', {
      params: { projectPath, connectionType }
    });
    return response.data;
  }

  /**
   * Find connections to a node of a specific type
   * @param projectPath Path to the project
   * @param nodeId ID of the target node
   * @param connectionType Type of connections to find
   */
  async findConnectionsToOfType(
    projectPath: string, 
    nodeId: string, 
    connectionType: ConnectionType
  ): Promise<Connection[]> {
    const response = await this.axios.get<Connection[]>('/api/graph/connections/of-type-to-node', {
      params: { projectPath, nodeId, connectionType }
    });
    return response.data;
  }

  /**
   * Find connections from a node of a specific type
   * @param projectPath Path to the project
   * @param nodeId ID of the source node
   * @param connectionType Type of connections to find
   */
  async findConnectionsFromOfType(
    projectPath: string, 
    nodeId: string, 
    connectionType: ConnectionType
  ): Promise<Connection[]> {
    const response = await this.axios.get<Connection[]>('/api/graph/connections/of-type-from-node', {
      params: { projectPath, nodeId, connectionType }
    });
    return response.data;
  }

  /**
   * Find connections between two nodes
   * @param projectPath Path to the project
   * @param sourceNodeName Name of the source node
   * @param targetNodeName Name of the target node
   */
  async findConnections(
    projectPath: string, 
    sourceNodeName: string, 
    targetNodeName: string
  ): Promise<Connection[]> {
    const response = await this.axios.get<Connection[]>('/api/graph/connections/find', {
      params: { projectPath, sourceNodeName, targetNodeName }
    });
    return response.data;
  }

  /**
   * Find connections between two nodes of a specific type
   * @param projectPath Path to the project
   * @param sourceNodeName Name of the source node
   * @param targetNodeName Name of the target node
   * @param connectionType Type of connections to find
   */
  async findConnectionsWithType(
    projectPath: string, 
    sourceNodeName: string, 
    targetNodeName: string, 
    connectionType: ConnectionType
  ): Promise<Connection[]> {
    const response = await this.axios.get<Connection[]>('/api/graph/connections/find-with-type', {
      params: { projectPath, sourceNodeName, targetNodeName, connectionType }
    });
    return response.data;
  }

  /**
   * Get all connections containing a node
   * @param projectPath Path to the project
   * @param nodeId ID of the node
   */
  async getAllConnectionsContaining(projectPath: string, nodeId: string): Promise<Connection[]> {
    const response = await this.axios.get<Connection[]>('/api/graph/connections/containing-node', {
      params: { projectPath, nodeId }
    });
    return response.data;
  }

  /**
   * Delete connections
   * @param projectPath Path to the project
   * @param connections The connections to delete
   */
  async deleteConnections(projectPath: string, connections: Connection[]): Promise<void> {
    await this.axios.delete('/api/graph/connections/delete', {
      params: { projectPath },
      data: connections
    });
  }

  /**
   * Clear all connections
   * @param projectPath Path to the project
   */
  async clearConnections(projectPath: string): Promise<void> {
    await this.axios.delete('/api/graph/connections/clear', {
      params: { projectPath }
    });
  }
}
