// draggableNode.js - Part 2: Color-coded draggable nodes

export const DraggableNode = ({ type, label }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    // Color mapping for different node types
    const colorMap = {
      customInput: '#22c55e',
      customOutput: '#ef4444',
      llm: '#8b5cf6',
      text: '#3b82f6',
      filter: '#f59e0b',
      transform: '#06b6d4',
      conditional: '#ec4899',
      api: '#14b8a6',
      database: '#6366f1'
    };

    const backgroundColor = colorMap[type] || '#1C2536';

    return (
      <div
        className={`draggable-node ${type}`}
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')}
        style={{ 
          cursor: 'grab', 
          minWidth: '100px', 
          height: '70px',
          display: 'flex', 
          alignItems: 'center', 
          borderRadius: '10px',
          backgroundColor: backgroundColor,
          justifyContent: 'center', 
          flexDirection: 'column',
          padding: '10px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
          transition: 'all 0.2s ease',
          border: '2px solid rgba(255, 255, 255, 0.2)'
        }} 
        draggable
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'translateY(-3px)';
          e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)';
        }}
      >
          <span style={{ 
            color: '#fff', 
            fontWeight: '600',
            fontSize: '14px',
            textAlign: 'center'
          }}>
            {label}
          </span>
      </div>
    );
  };