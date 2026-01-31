// BaseNode.js - Reusable base component for all nodes

import { Handle, Position } from 'reactflow';
import './BaseNode.css';

export const BaseNode = ({ 
  id, 
  data,
  nodeType = 'default',
  title,
  fields = [],
  inputs = [],
  outputs = [],
  children
}) => {
  
  return (
    <div className={`base-node ${nodeType}-node`}>
      {/* Title/Header */}
      <div className="node-header">
        <span className="node-title">{title}</span>
      </div>
      
      {/* Input Handles (Left side) */}
      {inputs.map((input, index) => (
        <Handle
          key={`input-${input.id}`}
          type="target"
          position={Position.Left}
          id={`${id}-${input.id}`}
          style={{
            top: `${(100 / (inputs.length + 1)) * (index + 1)}%`,
            background: input.color || '#555'
          }}
          title={input.label}
        />
      ))}
      
      {/* Content Area */}
      <div className="node-content">
        {/* Render custom fields */}
        {fields.map((field, index) => (
          <div key={index} className="node-field">
            {field}
          </div>
        ))}
        
        {/* Custom children */}
        {children}
      </div>
      
      {/* Output Handles (Right side) */}
      {outputs.map((output, index) => (
        <Handle
          key={`output-${output.id}`}
          type="source"
          position={Position.Right}
          id={`${id}-${output.id}`}
          style={{
            top: `${(100 / (outputs.length + 1)) * (index + 1)}%`,
            background: output.color || '#555'
          }}
          title={output.label}
        />
      ))}
    </div>
  );
};