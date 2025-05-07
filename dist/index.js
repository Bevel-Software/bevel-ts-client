"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerApi = exports.CodeLensApi = exports.GraphApi = exports.ProjectApi = exports.BusinessContextApi = exports.ChatApi = exports.DiagramApi = exports.ConnectionsApi = exports.NodeApi = exports.BevelClient = void 0;
// Export the main client class
var client_1 = require("./client");
Object.defineProperty(exports, "BevelClient", { enumerable: true, get: function () { return client_1.BevelClient; } });
// Export all API classes for direct usage if needed
var nodeApi_1 = require("./api/nodeApi");
Object.defineProperty(exports, "NodeApi", { enumerable: true, get: function () { return nodeApi_1.NodeApi; } });
var connectionsApi_1 = require("./api/connectionsApi");
Object.defineProperty(exports, "ConnectionsApi", { enumerable: true, get: function () { return connectionsApi_1.ConnectionsApi; } });
var diagramApi_1 = require("./api/diagramApi");
Object.defineProperty(exports, "DiagramApi", { enumerable: true, get: function () { return diagramApi_1.DiagramApi; } });
var chatApi_1 = require("./api/chatApi");
Object.defineProperty(exports, "ChatApi", { enumerable: true, get: function () { return chatApi_1.ChatApi; } });
var businessContextApi_1 = require("./api/businessContextApi");
Object.defineProperty(exports, "BusinessContextApi", { enumerable: true, get: function () { return businessContextApi_1.BusinessContextApi; } });
var projectApi_1 = require("./api/projectApi");
Object.defineProperty(exports, "ProjectApi", { enumerable: true, get: function () { return projectApi_1.ProjectApi; } });
var graphApi_1 = require("./api/graphApi");
Object.defineProperty(exports, "GraphApi", { enumerable: true, get: function () { return graphApi_1.GraphApi; } });
var codeLensApi_1 = require("./api/codeLensApi");
Object.defineProperty(exports, "CodeLensApi", { enumerable: true, get: function () { return codeLensApi_1.CodeLensApi; } });
var serverApi_1 = require("./api/serverApi");
Object.defineProperty(exports, "ServerApi", { enumerable: true, get: function () { return serverApi_1.ServerApi; } });
// Export all types
__exportStar(require("./types"), exports);
//# sourceMappingURL=index.js.map