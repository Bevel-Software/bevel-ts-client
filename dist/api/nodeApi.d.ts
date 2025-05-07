import { AxiosInstance } from 'axios';
import { Node, NodeResponseDto, NodeDescriptionDto } from '../types';
/**
 * API client for working with Nodes in the Bevel Graph
 */
export declare class NodeApi {
    private axios;
    constructor(axios: AxiosInstance);
    /**
     * Save a node
     * @param projectPath Path to the project
     * @param node The node to save
     */
    saveNode(projectPath: string, node: Node): Promise<void>;
    /**
     * Save multiple nodes
     * @param projectPath Path to the project
     * @param nodes The nodes to save
     */
    saveAllNodes(projectPath: string, nodes: Node[]): Promise<void>;
    /**
     * Get all nodes in the project
     * @param projectPath Path to the project
     */
    getNodes(projectPath: string): Promise<Node[]>;
    /**
     * Get the number of nodes in the project
     * @param projectPath Path to the project
     */
    getSize(projectPath: string): Promise<number>;
    /**
     * Check if the node repository is empty
     * @param projectPath Path to the project
     */
    isEmpty(projectPath: string): Promise<boolean>;
    /**
     * Get all node IDs
     * @param projectPath Path to the project
     */
    getIds(projectPath: string): Promise<string[]>;
    /**
     * Get a node by ID
     * @param projectPath Path to the project
     * @param nodeId ID of the node to get
     */
    getNode(projectPath: string, nodeId: string): Promise<Node>;
    /**
     * Find a node by name
     * @param projectPath Path to the project
     * @param nodeName Name of the node to find
     * @param filePath File path where the node is defined
     * @param lineNumber Line number where the node is defined (optional)
     */
    findNodeByName(projectPath: string, nodeName: string, filePath: string, lineNumber?: number): Promise<NodeResponseDto>;
    /**
     * Count functions in the project
     * @param projectPath Path to the project
     */
    countFunctions(projectPath: string): Promise<number>;
    /**
     * Check if a node exists
     * @param projectPath Path to the project
     * @param nodeId ID of the node to check
     */
    contains(projectPath: string, nodeId: string): Promise<boolean>;
    /**
     * Get all nodes with business context
     * @param projectPath Path to the project
     */
    getNodesWithBusinessContext(projectPath: string): Promise<NodeDescriptionDto[]>;
    /**
     * Delete a node
     * @param projectPath Path to the project
     * @param name Name of the node to delete
     */
    deleteNode(projectPath: string, name: string): Promise<void>;
    /**
     * Delete multiple nodes
     * @param projectPath Path to the project
     * @param nodes The nodes to delete
     */
    deleteAllNodes(projectPath: string, nodes: Node[]): Promise<void>;
    /**
     * Clear all nodes
     * @param projectPath Path to the project
     */
    clearNodes(projectPath: string): Promise<void>;
}
