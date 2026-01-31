// apiNode.js - New node using BaseNode abstraction

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const APINode = ({ id, data }) => {
  const [method, setMethod] = useState(data?.method || 'GET');
  const [endpoint, setEndpoint] = useState(data?.endpoint || '');

  const fields = [
    <label key="method">
      Method:
      <select value={method} onChange={(e) => setMethod(e.target.value)}>
        <option value="GET">GET</option>
        <option value="POST">POST</option>
        <option value="PUT">PUT</option>
        <option value="DELETE">DELETE</option>
      </select>
    </label>,
    <label key="endpoint">
      Endpoint:
      <input 
        type="text" 
        value={endpoint} 
        onChange={(e) => setEndpoint(e.target.value)}
        placeholder="https://api.example.com"
      />
    </label>
  ];

  const inputs = [
    { id: 'body', label: 'Body', color: '#14b8a6' }
  ];

  const outputs = [
    { id: 'response', label: 'Response', color: '#14b8a6' }
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      nodeType="api"
      title="API Call"
      fields={fields}
      inputs={inputs}
      outputs={outputs}
    />
  );
};