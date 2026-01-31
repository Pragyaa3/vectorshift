// filterNode.js - New node using BaseNode abstraction

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const FilterNode = ({ id, data }) => {
  const [filterType, setFilterType] = useState(data?.filterType || 'contains');
  const [filterValue, setFilterValue] = useState(data?.filterValue || '');

  const fields = [
    <label key="type">
      Filter Type:
      <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
        <option value="contains">Contains</option>
        <option value="equals">Equals</option>
        <option value="startsWith">Starts With</option>
        <option value="endsWith">Ends With</option>
      </select>
    </label>,
    <label key="value">
      Filter Value:
      <input 
        type="text" 
        value={filterValue} 
        onChange={(e) => setFilterValue(e.target.value)}
        placeholder="Enter filter value..."
      />
    </label>
  ];

  const inputs = [
    { id: 'input', label: 'Data In', color: '#f59e0b' }
  ];

  const outputs = [
    { id: 'output', label: 'Filtered', color: '#f59e0b' }
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      nodeType="filter"
      title="Filter"
      fields={fields}
      inputs={inputs}
      outputs={outputs}
    />
  );
};