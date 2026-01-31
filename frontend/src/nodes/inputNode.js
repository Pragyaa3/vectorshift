import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
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
      <select value={inputType} onChange={handleTypeChange}>
        <option value="Text">Text</option>
        <option value="File">File</option>
      </select>
    </label>
  ];

  const outputs = [
    { id: 'value', label: 'Output', color: '#22c55e' }
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      nodeType="customInput"
      title="Input"
      fields={fields}
      outputs={outputs}
    />
  );
}