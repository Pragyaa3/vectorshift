// transformNode.js - New node using BaseNode abstraction

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const TransformNode = ({ id, data }) => {
  const [operation, setOperation] = useState(data?.operation || 'uppercase');

  const fields = [
    <label key="operation">
      Transform:
      <select value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option value="uppercase">UPPERCASE</option>
        <option value="lowercase">lowercase</option>
        <option value="trim">Trim Spaces</option>
        <option value="reverse">Reverse</option>
        <option value="capitalize">Capitalize</option>
      </select>
    </label>
  ];

  const inputs = [
    { id: 'input', label: 'Text In', color: '#06b6d4' }
  ];

  const outputs = [
    { id: 'output', label: 'Text Out', color: '#06b6d4' }
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      nodeType="transform"
      title="Transform"
      fields={fields}
      inputs={inputs}
      outputs={outputs}
    />
  );
};