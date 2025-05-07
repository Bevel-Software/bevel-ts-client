"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BevelClient = void 0;
const axios_1 = __importDefault(require("axios"));
const nodeApi_1 = require("./api/nodeApi");
const connectionsApi_1 = require("./api/connectionsApi");
const diagramApi_1 = require("./api/diagramApi");
const chatApi_1 = require("./api/chatApi");
const businessContextApi_1 = require("./api/businessContextApi");
const projectApi_1 = require("./api/projectApi");
const graphApi_1 = require("./api/graphApi");
const codeLensApi_1 = require("./api/codeLensApi");
const serverApi_1 = require("./api/serverApi");
/**
 * BevelClient is the main entry point for interacting with the Bevel Graph REST API
 */
class BevelClient {
    /**
     * Creates a new Bevel API client
     * @param baseURL The base URL of the Bevel API server (default: http://localhost:1645)
     * @param config Additional Axios configuration
     */
    constructor(baseURL = 'http://localhost:1645', config = {}) {
        this.axiosInstance = axios_1.default.create({
            baseURL,
            ...config
        });
        // Initialize API modules
        this.nodes = new nodeApi_1.NodeApi(this.axiosInstance);
        this.connections = new connectionsApi_1.ConnectionsApi(this.axiosInstance);
        this.diagrams = new diagramApi_1.DiagramApi(this.axiosInstance);
        this.chat = new chatApi_1.ChatApi(this.axiosInstance);
        this.businessContext = new businessContextApi_1.BusinessContextApi(this.axiosInstance);
        this.project = new projectApi_1.ProjectApi(this.axiosInstance);
        this.graph = new graphApi_1.GraphApi(this.axiosInstance);
        this.codeLens = new codeLensApi_1.CodeLensApi(this.axiosInstance);
        this.server = new serverApi_1.ServerApi(this.axiosInstance);
    }
    /**
     * Set authorization header with the given token
     * @param token The authorization token
     * @param tokenType The token type (default: 'Bearer')
     */
    setAuthToken(token, tokenType = 'Bearer') {
        this.axiosInstance.defaults.headers.common['Authorization'] = `${tokenType} ${token}`;
    }
    /**
     * Get the underlying axios instance for advanced usage
     */
    getAxiosInstance() {
        return this.axiosInstance;
    }
}
exports.BevelClient = BevelClient;
//# sourceMappingURL=client.js.map