// toolbar.js - Part 2: Styled toolbar

import { DraggableNode } from './draggableNode';
import './toolbar.css';

export const PipelineToolbar = () => {
    return (
        <div className="toolbar">
            <h2 className="toolbar-title">🛠️ Pipeline Nodes</h2>
            <div className="toolbar-nodes">
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='filter' label='Filter' />
                <DraggableNode type='transform' label='Transform' />
                <DraggableNode type='conditional' label='Conditional' />
                <DraggableNode type='api' label='API Call' />
                <DraggableNode type='database' label='Database' />
            </div>
        </div>
    );
};