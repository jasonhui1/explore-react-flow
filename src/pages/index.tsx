import Image from 'next/image'
import React, { useCallback, useState } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Edge,
  Connection,
  Background,
  useNodesState,
  useEdgesState,
  addEdge, applyEdgeChanges, applyNodeChanges
} from 'reactflow';

import 'reactflow/dist/style.css';
import TextUpdaterNode from '../../Components/customNode';


// const initialNodes = [
//   { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
//   { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
// ];
// const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

const initialNodes = [
  { id: 'node-1', type: 'textUpdater', position: { x: 0, y: 0 }, data: { value: 123 } },
];

const nodeTypes = { textUpdater: TextUpdaterNode };

export default function Home() {

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  // console.log('rendering')

  // const onConnect = useCallback((params: any) => setEdges((eds) => addEdge(params, eds)), [setEdges]);


  // const [nodes, setNodes] = useState(initialNodes);
  // const [edges, setEdges] = useState([]);

  // const onNodesChange = useCallback(
  //   (changes:any) => setNodes((nds) => applyNodeChanges(changes, nds)),
  //   [setNodes]
  // );
  // const onEdgesChange = useCallback(
  //   (changes:any) => setEdges((eds) => applyEdgeChanges(changes, eds)),
  //   [setEdges]
  // );
  // const onConnect = useCallback(
  //   (connection:any) => setEdges((eds) => addEdge(connection, eds)),
  //   [setEdges]
  // );

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((els) => addEdge(params, els)),
    [setEdges]
  );
  
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}

      >
        <Controls />
        <MiniMap />
        {/* <Background /> */}
      </ReactFlow>
    </div>
  );
}
