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
import { initialEdges, initialNodes, nodeTypes } from '../../data/nodeData';


export default function Home() {

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
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
