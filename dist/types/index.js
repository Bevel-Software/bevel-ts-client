"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMType = exports.ConnectionType = exports.NodeType = void 0;
/**
 * Enum for node types in the graph
 */
var NodeType;
(function (NodeType) {
    NodeType["File"] = "File";
    NodeType["Module"] = "Module";
    NodeType["Namespace"] = "Namespace";
    NodeType["Package"] = "Package";
    NodeType["Class"] = "Class";
    NodeType["Method"] = "Method";
    NodeType["Property"] = "Property";
    NodeType["Field"] = "Field";
    NodeType["Constructor"] = "Constructor";
    NodeType["Enum"] = "Enum";
    NodeType["Interface"] = "Interface";
    NodeType["Function"] = "Function";
    NodeType["Variable"] = "Variable";
    NodeType["Constant"] = "Constant";
    NodeType["String"] = "String";
    NodeType["Number"] = "Number";
    NodeType["Boolean"] = "Boolean";
    NodeType["Array"] = "Array";
    NodeType["Object"] = "Object";
    NodeType["Key"] = "Key";
    NodeType["Null"] = "Null";
    NodeType["EnumMember"] = "EnumMember";
    NodeType["Struct"] = "Struct";
    NodeType["Event"] = "Event";
    NodeType["Operator"] = "Operator";
    NodeType["TypeParameter"] = "TypeParameter";
    NodeType["Alias"] = "Alias";
})(NodeType || (exports.NodeType = NodeType = {}));
/**
 * Enum for connection types between nodes
 */
var ConnectionType;
(function (ConnectionType) {
    ConnectionType["PARENT_OF"] = "PARENT_OF";
    ConnectionType["INHERITS_FROM"] = "INHERITS_FROM";
    ConnectionType["USES"] = "USES";
    ConnectionType["IS_OF_TYPE"] = "IS_OF_TYPE";
    ConnectionType["INVOKED_BY"] = "INVOKED_BY";
    ConnectionType["CALLED_WITH"] = "CALLED_WITH";
    ConnectionType["OVERLOADED_BY"] = "OVERLOADED_BY";
    ConnectionType["OVERRIDES"] = "OVERRIDES";
})(ConnectionType || (exports.ConnectionType = ConnectionType = {}));
/**
 * Enum for available LLM types
 */
var LLMType;
(function (LLMType) {
    LLMType["AZURE_OPENAI"] = "AZURE-OPENAI";
    LLMType["OPENAI"] = "OPENAI";
    LLMType["LOCAL"] = "LOCAL";
    LLMType["ANTHROPIC"] = "ANTHROPIC";
    LLMType["GEMINI"] = "GEMINI";
    LLMType["VERTEX_GEMINI"] = "VERTEX-GEMINI";
    LLMType["VERTEX_ENDPOINT"] = "VERTEX-ENDPOINT";
    LLMType["CUSTOM"] = "CUSTOM";
})(LLMType || (exports.LLMType = LLMType = {}));
//# sourceMappingURL=index.js.map