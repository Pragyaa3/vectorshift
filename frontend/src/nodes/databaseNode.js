// databaseNode.js - New node using BaseNode abstraction

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const DatabaseNode = ({ id, data }) => {
  const [operation, setOperation] = useState(data?.operation || 'SELECT');
  const [table, setTable] = useState(data?.table || '');

  const fields = [
    <label key="operation">
      Operation:
      <select value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option value="SELECT">SELECT</option>
        <option value="INSERT">INSERT</option>
        <option value="UPDATE">UPDATE</option>
        <option value="DELETE">DELETE</option>
      </select>
    </label>,
    <label key="table">
      Table:
      <input 
        type="text" 
        value={table} 
        onChange={(e) => setTable(e.target.value)}
        placeholder="table_name"
      />
    </label>
  ];

  const inputs = [
    { id: 'query', label: 'Query', color: '#6366f1' }
  ];

  const outputs = [
    { id: 'result', label: 'Result', color: '#6366f1' }
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      nodeType="database"
      title="Database"
      fields={fields}
      inputs={inputs}
      outputs={outputs}
    />
  );
};