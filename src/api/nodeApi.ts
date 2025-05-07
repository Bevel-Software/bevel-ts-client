import { AxiosInstance } from 'axios';
import { 
  Node, 
  BooleanResponse, 
  IntResponse, 
  NodeResponseDto,
  NodeDescriptionDto
} from '../types';

/**
 * API client for working with Nodes in the Bevel Graph
 */
export class NodeApi {
  constructor(private axios: AxiosInstance) {}

  /**
   * Save a node
   * @param projectPath Path to the project
   * @param node The node to save
   */
  async saveNode(projectPath: string, node: Node): Promise<void> {
    await this.axios.post('/api/graph/nodes/save', node, {
      params: { projectPath }
    });
  }

  /**
   * Save multiple nodes
   * @param projectPath Path to the project
   * @param nodes The nodes to save
   */
  async saveAllNodes(projectPath: string, nodes: Node[]): Promise<void> {
    await this.axios.post('/api/graph/nodes/save-all', nodes, {
      params: { projectPath }
    });
  }

  /**
   * Get all nodes in the project
   * @param projectPath Path to the project
   */
  async getNodes(projectPath: string): Promise<Node[]> {
    const response = await this.axios.get('/api/graph/nodes', {
      params: { projectPath }
    });
    return response.data;
  }

  /**
   * Get the number of nodes in the project
   * @param projectPath Path to the project
   */
  async getSize(projectPath: string): Promise<number> {
    const response = await this.axios.get<IntResponse>('/api/graph/nodes/size', {
      params: { projectPath }
    });
    return response.data.response;
  }

  /**
   * Check if the node repository is empty
   * @param projectPath Path to the project
   */
  async isEmpty(projectPath: string): Promise<boolean> {
    const response = await this.axios.get<BooleanResponse>('/api/graph/nodes/is-empty', {
      params: { projectPath }
    });
    return response.data.response;
  }

  /**
   * Get all node IDs
   * @param projectPath Path to the project
   */
  async getIds(projectPath: string): Promise<string[]> {
    const response = await this.axios.get<string[]>('/api/graph/nodes/ids', {
      params: { projectPath }
    });
    return response.data;
  }

  /**
   * Get a node by ID
   * @param projectPath Path to the project
   * @param nodeId ID of the node to get
   */
  async getNode(projectPath: string, nodeId: string): Promise<Node> {
    const response = await this.axios.get<Node>('/api/graph/nodes/get', {
      params: { projectPath, nodeId }
    });
    return response.data;
  }

  /**
   * Find a node by name
   * @param projectPath Path to the project
   * @param nodeName Name of the node to find
   * @param filePath File path where the node is defined
   * @param lineNumber Line number where the node is defined (optional)
   */
  async findNodeByName(
    projectPath: string, 
    nodeName: string, 
    filePath: string, 
    lineNumber?: number
  ): Promise<NodeResponseDto> {
    const response = await this.axios.get<NodeResponseDto>('/api/graph/nodes/find-by-name', {
      params: { projectPath, nodeName, filePath, lineNumber }
    });
    return response.data;
  }

  /**
   * Count functions in the project
   * @param projectPath Path to the project
   */
  async countFunctions(projectPath: string): Promise<number> {
    const response = await this.axios.get<IntResponse>('/api/graph/nodes/count-functions', {
      params: { projectPath }
    });
    return response.data.response;
  }

  /**
   * Check if a node exists
   * @param projectPath Path to the project
   * @param nodeId ID of the node to check
   */
  async contains(projectPath: string, nodeId: string): Promise<boolean> {
    const response = await this.axios.get<BooleanResponse>('/api/graph/nodes/contains', {
      params: { projectPath, nodeId }
    });
    return response.data.response;
  }

  /**
   * Get all nodes with business context
   * @param projectPath Path to the project
   */
  async getNodesWithBusinessContext(projectPath: string): Promise<NodeDescriptionDto[]> {
    const response = await this.axios.get<NodeDescriptionDto[]>('/api/graph/nodes/all-with-business-context', {
      params: { projectPath }
    });
    return response.data;
  }

  /**
   * Delete a node
   * @param projectPath Path to the project
   * @param name Name of the node to delete
   */
  async deleteNode(projectPath: string, name: string): Promise<void> {
    await this.axios.delete('/api/graph/nodes/delete', {
      params: { projectPath, name }
    });
  }

  /**
   * Delete multiple nodes
   * @param projectPath Path to the project
   * @param nodes The nodes to delete
   */
  async deleteAllNodes(projectPath: string, nodes: Node[]): Promise<void> {
    await this.axios.delete('/api/graph/nodes/delete-all', {
      params: { projectPath },
      data: nodes
    });
  }

  /**
   * Clear all nodes
   * @param projectPath Path to the project
   */
  async clearNodes(projectPath: string): Promise<void> {
    await this.axios.delete('/api/graph/nodes/clear', {
      params: { projectPath }
    });
  }
}
