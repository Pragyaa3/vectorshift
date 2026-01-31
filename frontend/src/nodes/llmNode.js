// llmNode.js - Refactored to use BaseNode

import { BaseNode } from './BaseNode';

export const LLMNode = ({ id, data }) => {
  const inputs = [
    { id: 'system', label: 'System', color: '#8b5cf6' },
    { id: 'prompt', label: 'Prompt', color: '#8b5cf6' }
  ];

  const outputs = [
    { id: 'response', label: 'Response', color: '#8b5cf6' }
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      nodeType="llm"
      title="LLM"
      inputs={inputs}
      outputs={outputs}
    >
      <div style={{ fontSize: '12px', color: '#666', textAlign: 'center' }}>
        This is a LLM.
      </div>
    </BaseNode>
  );
}