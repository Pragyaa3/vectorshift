// outputNode.js - Refactored to use BaseNode

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  const fields = [
    <label key="name">
      Name:
      <input 
        type="text" 
        value={currName} 
        onChange={handleNameChange} 
      />
    </label>,
    <label key="type">
      Type:
      <select value={outputType} onChange={handleTypeChange}>
        <option value="Text">Text</option>
        <option value="Image">Image</option>
      </select>
    </label>
  ];

  const inputs = [
    { id: 'value', label: 'Input', color: '#ef4444' }
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      nodeType="customOutput"
      title="Output"
      fields={fields}
      inputs={inputs}
    />
  );
}