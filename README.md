# Bevel TypeScript Client

[![npm version](https://img.shields.io/npm/v/bevel-ts-client.svg)](https://www.npmjs.com/package/bevel-ts-client)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A strongly-typed TypeScript client library for interacting with the [Bevel](https://marketplace.visualstudio.com/items?itemName=bevel-software.bevel) Graph REST API. This library provides programmatic access to Bevel's powerful code visualization, analysis, and AI features.

## About Bevel

Bevel helps developers understand legacy or complex codebases through interactive visualizations and AI-powered static code analysis. The core features include:

- **Interactive Code Visualization** - Generate call graphs and sequence diagrams to navigate code structures
- **AI-Powered Business Context Extraction** - Extract business logic and domain knowledge from code
- **Knowledge Graph Creation** - Build comprehensive graphs representing code relationships

This client library gives you programmatic access to all these features via TypeScript.

## Installation

```bash
npm install bevel-ts-client
```

## Getting Started

```typescript
import { BevelClient, LLMType } from 'bevel-ts-client';

// Initialize with your Bevel server URL
const client = new BevelClient('http://localhost:1645');

// Example: Check if the server is alive
async function checkServerStatus() {
  try {
    const isAlive = await client.server.isAlive();
    console.log(`Bevel server is ${isAlive ? 'online' : 'offline'}`);
    return isAlive;
  } catch (error) {
    console.error('Error checking Bevel server status:', error);
    return false;
  }
}

// Example: Analyze a project and get its structure
async function analyzeAndExploreProject(projectPath: string) {
  // Check if project is already analyzed
  const isAnalyzed = await client.project.isProjectAnalyzed(projectPath);
  
  if (!isAnalyzed) {
    console.log('Analyzing project...');
    await client.project.analyzeProject(projectPath, LLMType.OPENAI);
    console.log('Analysis complete');
  }
  
  // Get project stats
  const stats = await client.project.getCodebaseStats(projectPath);
  console.log(`Project stats: ${stats.files.total} files, ${stats.linesOfCode.total} lines of code`);
  
  // Get the full graph structure
  const graph = await client.graph.getGraph(projectPath);
  return graph;
}
```

## Client API Structure

The client library is organized into logical modules that mirror the Bevel API:

### Core Client

- **BevelClient** - Main entry point with configuration options for base URL and authentication

### API Modules

- **nodes** - Manage graph nodes representing code entities (classes, functions, variables)
- **connections** - Work with relationships between code entities
- **diagrams** - Generate sequence diagrams for visual code understanding
- **chat** - Interact with Bevel's AI chat capabilities
- **businessContext** - Extract and manage business context for code entities
- **project** - Analyze projects and retrieve codebase statistics
- **graph** - Access the complete code knowledge graph
- **codeLens** - Interact with CodeLens features
- **server** - Check server status and health

## Use Cases

### Analyzing Code Structure

```typescript
// Get all nodes in a project
const nodes = await client.nodes.getNodes('/path/to/project');

// Find a specific node by name
const node = await client.nodes.findNodeByName(
  '/path/to/project',
  'UserController.login',
  '/src/controllers/UserController.ts'
);

// Find all connections to a specific node
const connections = await client.connections.findConnectionsTo('/path/to/project', node.id);
```

### Generating Visualizations

```typescript
// Generate a sequence diagram starting from a specific function
const sequenceDiagram = await client.diagrams.generateSequenceDiagram(
  '/path/to/project',
  'AuthService.authenticate'
);

// The returned data contains both mermaid.js content and detailed function information
console.log(sequenceDiagram.mmdContent); // Use with mermaid.js to render the diagram
```

### Working with Business Context

```typescript
// Generate business context for a specific function
const businessContext = await client.businessContext.getBusinessContext(
  '/path/to/project',
  'PaymentProcessor.processPayment',
  LLMType.OPENAI
);

// Save custom business context for a node
await client.businessContext.saveBusinessContext(
  '/path/to/project',
  'PaymentProcessor.processPayment',
  { description: 'Handles payment processing with multiple gateways including credit cards and PayPal' }
);
```

### Project Management

```typescript
// Check if a project has been analyzed
const isAnalyzed = await client.project.isProjectAnalyzed('/path/to/project');

// Analyze or update a project
await client.project.analyzeProject(
  '/path/to/project',
  LLMType.OPENAI, 
  null, // optional file to add
  null, // optional file to delete
  '/src/models/User.ts' // optional file to update
);

// Get project statistics
const stats = await client.project.getCodebaseStats('/path/to/project');
```

## Configuration

### Custom Server URL

```typescript
// Connect to a custom Bevel server
const client = new BevelClient('http://your-bevel-server:8080');
```

### Authentication

```typescript
// Add authentication token
const client = new BevelClient('http://localhost:1645');
client.setAuthToken('your-auth-token');
```

### Advanced Configuration

```typescript
// Configure with additional Axios options
const client = new BevelClient('http://localhost:1645', {
  timeout: 30000,
  headers: {
    'X-Custom-Header': 'value'
  }
});
```

## Supported Languages

Bevel supports a wide range of programming languages for static analysis and visualization, including:

- COBOL
- Java
- JavaScript/TypeScript
- Python
- C#
- C/C++
- Kotlin
- Ruby

## API Documentation

For detailed API documentation, refer to the JSDoc comments in the source code. Each method is thoroughly documented with parameter types and return values.

## Development

### Building from source

```bash
# Clone the repository
git clone https://github.com/your-org/bevel-ts-client.git
cd bevel-ts-client

# Install dependencies
npm install

# Build the library
npm run build
```

## Integration with Bevel

This client library works with the Bevel VS Code extension, connecting to its local REST API service. To use this library:

1. Install the [Bevel extension](https://marketplace.visualstudio.com/items?itemName=bevel-software.bevel) in VS Code
2. Analyze your project using the Bevel extension
3. Use this client to programmatically access the Bevel analysis results

## License

MIT

## Support

For questions and support, please contact juan@bevel.software.
