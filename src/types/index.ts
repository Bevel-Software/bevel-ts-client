/**
 * Represents a position in a code file with line and column information
 */
export interface LCPosition {
  line: number;
  column: number;
}

/**
 * Represents a range in a code file with start and end positions
 */
export interface LCRange {
  start: LCPosition;
  end: LCPosition;
}

/**
 * Enum for node types in the graph
 */
export enum NodeType {
  File = "File",
  Module = "Module",
  Namespace = "Namespace",
  Package = "Package",
  Class = "Class",
  Method = "Method",
  Property = "Property",
  Field = "Field",
  Constructor = "Constructor",
  Enum = "Enum",
  Interface = "Interface",
  Function = "Function",
  Variable = "Variable",
  Constant = "Constant",
  String = "String",
  Number = "Number",
  Boolean = "Boolean",
  Array = "Array",
  Object = "Object",
  Key = "Key",
  Null = "Null",
  EnumMember = "EnumMember",
  Struct = "Struct",
  Event = "Event",
  Operator = "Operator",
  TypeParameter = "TypeParameter",
  Alias = "Alias"
}

/**
 * Enum for connection types between nodes
 */
export enum ConnectionType {
  PARENT_OF = "PARENT_OF",
  INHERITS_FROM = "INHERITS_FROM",
  USES = "USES",
  IS_OF_TYPE = "IS_OF_TYPE",
  INVOKED_BY = "INVOKED_BY",
  CALLED_WITH = "CALLED_WITH",
  OVERLOADED_BY = "OVERLOADED_BY",
  OVERRIDES = "OVERRIDES",
  DEFINES = "DEFINES",
}

/**
 * Enum for available LLM types
 */
export enum LLMType {
  AZURE_OPENAI = "AZURE-OPENAI",
  OPENAI = "OPENAI",
  LOCAL = "LOCAL",
  ANTHROPIC = "ANTHROPIC",
  GEMINI = "GEMINI",
  VERTEX_GEMINI = "VERTEX-GEMINI",
  VERTEX_ENDPOINT = "VERTEX-ENDPOINT",
  CUSTOM = "CUSTOM"
}

/**
 * Represents a node in the graph
 */
export interface Node {
  id: string;
  simpleName: string;
  nodeType: NodeType;
  description: string;
  inboundConnectionVersion: string;
  outboundConnectionVersion: string;
  definingNodeName: string;
  filePath: string;
  codeLocation: LCRange;
  nameLocation: LCRange;
  codeHash: string;
  nodeSignature: string;
}

/**
 * Represents a connection between nodes in the graph
 */
export interface Connection {
  sourceNodeName: string;
  targetNodeName: string;
  connectionType: ConnectionType;
  filePath: string;
  location: LCRange;
}

/**
 * Represents a manual connection between nodes
 */
export interface ManualConnection {
  sourceNodeName: string;
  targetNodeName: string;
}

/**
 * Contains information about a function
 */
export interface FunctionInfo {
  name: string;
  filePath: string;
  line: number;
  column: number;
  code: string;
}

/**
 * Response DTO for a sequence diagram
 */
export interface SequenceDiagramDto {
  mmdContent: string;
  functionInfos: Record<string, FunctionInfo>;
  displayNames: Record<string, string>;
  toggleFunctions: Record<string, SequenceDiagramToggleFunction[]>;
}

/**
 * Information about a toggle function in a sequence diagram
 */
export interface SequenceDiagramToggleFunction {
  fullName: string;
  displayName: string;
  whereToDisplay: string;
  filePath: string;
  location: LCRange;
}

/**
 * Function call DTO for chat completions
 */
export interface FunctionCallDto {
  name: string;
  arguments: string;
}

/**
 * Chat completion message parameter DTO
 */
export interface ChatCompletionMessageParamDto {
  role: string;
}

/**
 * Chat completion message tool call DTO
 */
export interface ChatCompletionMessageToolCallDto extends ChatCompletionMessageParamDto {
  id: string;
  type: string;
  function: FunctionCallDto;
}

/**
 * Chat completion system message parameter DTO
 */
export interface ChatCompletionSystemMessageParamDto extends ChatCompletionMessageParamDto {
  content: string;
  name?: string;
}

/**
 * Chat completion user message parameter DTO
 */
export interface ChatCompletionUserMessageParamDto extends ChatCompletionMessageParamDto {
  content: string;
  name?: string;
}

/**
 * Chat completion tool message parameter DTO
 */
export interface ChatCompletionToolMessageParamDto extends ChatCompletionMessageParamDto {
  content: string;
  tool_call_id: string;
}

/**
 * Chat completion assistant message parameter DTO
 */
export interface ChatCompletionAssistantMessageParamDto extends ChatCompletionMessageParamDto {
  content?: string;
  name?: string;
  refusal?: string;
  tool_calls?: ChatCompletionMessageToolCallDto[];
}

/**
 * Chat message request DTO
 */
export interface ChatMessageRequestDto {
  messages: Array<
    | ChatCompletionAssistantMessageParamDto
    | ChatCompletionMessageToolCallDto
    | ChatCompletionSystemMessageParamDto
    | ChatCompletionToolMessageParamDto
    | ChatCompletionUserMessageParamDto
  >;
}

/**
 * Delta in a chat completion
 */
export interface Delta {
  content?: string;
}

/**
 * Choice in a chat completion
 */
export interface Choice {
  delta: Delta;
}

/**
 * Completion usage information
 */
export interface CompletionUsage {
  completion_tokens: number;
  prompt_tokens: number;
  total_tokens: number;
}

/**
 * Chat completion chunk
 */
export interface ChatCompletionChunk {
  choices: Choice[];
  usage?: CompletionUsage;
}

/**
 * Description DTO
 */
export interface DescriptionDto {
  description: string;
}

/**
 * Descriptions generated statistics
 */
export interface DescriptionsGenerated {
  current: number;
  percentage: number;
}

/**
 * Files statistics
 */
export interface Files {
  total: number;
}

/**
 * Functions statistics
 */
export interface Functions {
  total: number;
}

/**
 * Lines of code statistics
 */
export interface LinesOfCode {
  total: number;
  mainLanguage: string;
}

/**
 * Codebase statistics
 */
export interface CodebaseStats {
  descriptionsGenerated: DescriptionsGenerated;
  linesOfCode: LinesOfCode;
  functions: Functions;
  files: Files;
}

/**
 * Boolean response
 */
export interface BooleanResponse {
  response: boolean;
}

/**
 * Integer response
 */
export interface IntResponse {
  response: number;
}

/**
 * Node response DTO
 */
export interface NodeResponseDto {
  id: string;
  displayName: string;
  nodeType: NodeType;
  description?: string;
  simpleName: string;
}

/**
 * Connection response DTO
 */
export interface ConnectionResponseDto {
  sourceNodeName: string;
  targetNodeName: string;
  connectionType: ConnectionType;
  filePath: string;
  location: LCRange;
}

/**
 * Graph response DTO
 */
export interface GraphResponseDto {
  nodes: Record<string, NodeResponseDto>;
  connections: ConnectionResponseDto[];
  functionalRequirements: string[];
  appVersion: string;
}

/**
 * Connection structure DTO
 */
export interface ConnectionStructureDto {
  connectionType: ConnectionType;
  targetNodeName: string;
}

/**
 * Node structure DTO
 */
export interface NodeStructureDto {
  name: string;
  nodeType: NodeType;
  description?: string;
  connections: ConnectionStructureDto[];
}

/**
 * Graph structure DTO
 */
export interface GraphStructureDto {
  nodes: NodeStructureDto[];
}

/**
 * Node description DTO
 */
export interface NodeDescriptionDto {
  nodeName: string;
  displayName: string;
  description: string;
  filePath: string;
  startLine: number;
  startCharacter: number;
}

/**
 * File modification information
 */
export interface FileModificationInfo {
  contentHash: number;
  lastModified: number;
}

/**
 * Functional requirement
 */
export interface FunctionalRequirement {
  id: string;
  requirement: string;
  type: string;
  description: string;
  sourceNode: string;
  modificationInfo: FileModificationInfo;
}

/**
 * CodeLens function information DTO
 */
export interface CodeLensFunctionInfoDto {
  node: NodeResponseDto;
  functionalRequirements: FunctionalRequirement[];
  line: number;
}

/**
 * CodeLens file information DTO
 */
export interface CodeLensFileInfoDto {
  infos: CodeLensFunctionInfoDto[];
}
