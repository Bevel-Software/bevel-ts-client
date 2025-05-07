import { AxiosInstance } from 'axios';
import { Connection, ConnectionType } from '../types';
/**
 * API client for working with Connections in the Bevel Graph
 */
export declare class ConnectionsApi {
    private axios;
    constructor(axios: AxiosInstance);
    /**
     * Save connections
     * @param projectPath Path to the project
     * @param connections The connections to save
     */
    saveConnections(projectPath: string, connections: Connection[]): Promise<void>;
    /**
     * Get all connections in the project
     * @param projectPath Path to the project
     */
    getAllConnections(projectPath: string): Promise<Connection[]>;
    /**
     * Find connections to a node
     * @param projectPath Path to the project
     * @param nodeId ID of the target node
     */
    findConnectionsTo(projectPath: string, nodeId: string): Promise<Connection[]>;
    /**
     * Find connections from a node
     * @param projectPath Path to the project
     * @param nodeId ID of the source node
     */
    findConnectionsFrom(projectPath: string, nodeId: string): Promise<Connection[]>;
    /**
     * Get all connections of a specific type
     * @param projectPath Path to the project
     * @param connectionType Type of connections to get
     */
    getAllConnectionsOfType(projectPath: string, connectionType: ConnectionType): Promise<Connection[]>;
    /**
     * Find connections to a node of a specific type
     * @param projectPath Path to the project
     * @param nodeId ID of the target node
     * @param connectionType Type of connections to find
     */
    findConnectionsToOfType(projectPath: string, nodeId: string, connectionType: ConnectionType): Promise<Connection[]>;
    /**
     * Find connections from a node of a specific type
     * @param projectPath Path to the project
     * @param nodeId ID of the source node
     * @param connectionType Type of connections to find
     */
    findConnectionsFromOfType(projectPath: string, nodeId: string, connectionType: ConnectionType): Promise<Connection[]>;
    /**
     * Find connections between two nodes
     * @param projectPath Path to the project
     * @param sourceNodeName Name of the source node
     * @param targetNodeName Name of the target node
     */
    findConnections(projectPath: string, sourceNodeName: string, targetNodeName: string): Promise<Connection[]>;
    /**
     * Find connections between two nodes of a specific type
     * @param projectPath Path to the project
     * @param sourceNodeName Name of the source node
     * @param targetNodeName Name of the target node
     * @param connectionType Type of connections to find
     */
    findConnectionsWithType(projectPath: string, sourceNodeName: string, targetNodeName: string, connectionType: ConnectionType): Promise<Connection[]>;
    /**
     * Get all connections containing a node
     * @param projectPath Path to the project
     * @param nodeId ID of the node
     */
    getAllConnectionsContaining(projectPath: string, nodeId: string): Promise<Connection[]>;
    /**
     * Delete connections
     * @param projectPath Path to the project
     * @param connections The connections to delete
     */
    deleteConnections(projectPath: string, connections: Connection[]): Promise<void>;
    /**
     * Clear all connections
     * @param projectPath Path to the project
     */
    clearConnections(projectPath: string): Promise<void>;
}
