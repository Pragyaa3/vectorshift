// conditionalNode.js - New node using BaseNode abstraction

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const ConditionalNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || 'greater');
  const [threshold, setThreshold] = useState(data?.threshold || '0');

  const fields = [
    <label key="condition">
      Condition:
      <select value={condition} onChange={(e) => setCondition(e.target.value)}>
        <option value="greater">Greater Than</option>
        <option value="less">Less Than</option>
        <option value="equal">Equal To</option>
        <option value="notEqual">Not Equal</option>
      </select>
    </label>,
    <label key="threshold">
      Threshold:
      <input 
        type="number" 
        value={threshold} 
        onChange={(e) => setThreshold(e.target.value)}
      />
    </label>
  ];

  const inputs = [
    { id: 'input', label: 'Value', color: '#ec4899' }
  ];

  const outputs = [
    { id: 'true', label: 'True', color: '#22c55e' },
    { id: 'false', label: 'False', color: '#ef4444' }
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      nodeType="conditional"
      title="Conditional"
      fields={fields}
      inputs={inputs}
      outputs={outputs}
    />
  );
};