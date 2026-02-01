// textNode.js - Part 3: Dynamic sizing + Variable detection

import { useState, useEffect, useRef } from 'react';
import { Handle, Position } from 'reactflow';
import './BaseNode.css';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const [dimensions, setDimensions] = useState({ width: 250, height: 100 });
  const textareaRef = useRef(null);

  // Detect variables in text (e.g., {{name}}, {{age}})
  useEffect(() => {
    // Regex to find all {{variableName}} patterns
    const variablePattern = /\{\{(\w+)\}\}/g;
    const matches = [...currText.matchAll(variablePattern)];
    const foundVariables = matches.map(match => match[1]);
    
    // Remove duplicates
    const uniqueVariables = [...new Set(foundVariables)];
    setVariables(uniqueVariables);
  }, [currText]);

  // Auto-resize based on content
  useEffect(() => {
    if (textareaRef.current) {
      const textarea = textareaRef.current;
      
      // Reset height to get accurate scrollHeight
      textarea.style.height = 'auto';
      
      // Calculate new dimensions
      const newHeight = Math.max(100, Math.min(textarea.scrollHeight + 60, 400));
      const newWidth = Math.max(250, Math.min(currText.length * 8 + 40, 500));
      
      setDimensions({ width: newWidth, height: newHeight });
    }
  }, [currText]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <div 
      className="base-node text-node"
      style={{ 
        width: `${dimensions.width}px`, 
        height: `${dimensions.height}px`,
        transition: 'all 0.3s ease'
      }}
    >
      {/* Dynamic Input Handles for Variables */}
      {variables.map((varName, index) => (
        <Handle
          key={`var-${varName}`}
          type="target"
          position={Position.Left}
          id={`${id}-${varName}`}
          style={{
            top: `${(100 / (variables.length + 1)) * (index + 1)}%`,
            background: '#3b82f6'
          }}
          title={varName}
        />
      ))}
      
      {/* Header */}
      <div className="node-header">
        <span className="node-title">Text</span>
      </div>
      
      {/* Content */}
      <div className="node-content" style={{ height: 'calc(100% - 40px)' }}>
        <label style={{ fontSize: '12px', fontWeight: '500', display: 'block', marginBottom: '4px' }}>
          Text:
        </label>
        <textarea
          ref={textareaRef}
          value={currText}
          onChange={handleTextChange}
          placeholder="Enter text... Use {{variable}} for inputs"
          style={{
            width: '100%',
            height: 'calc(100% - 20px)',
            padding: '8px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '13px',
            fontFamily: 'monospace',
            resize: 'none',
            boxSizing: 'border-box'
          }}
        />
        
        {/* Variable badges */}
        {variables.length > 0 && (
          <div style={{ 
            marginTop: '4px', 
            fontSize: '10px', 
            color: '#666',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '4px'
          }}>
            {variables.map(varName => (
              <span 
                key={varName}
                style={{
                  background: '#3b82f6',
                  color: 'white',
                  padding: '2px 6px',
                  borderRadius: '3px',
                  fontSize: '10px'
                }}
              >
                {varName}
              </span>
            ))}
          </div>
        )}
      </div>
      
      {/* Output Handle */}
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
        style={{ background: '#3b82f6' }}
      />
    </div>
  );
}