// import React, { useCallback } from 'react';

// import ReactFlow, { addEdge, useNodesState, useEdgesState, MarkerType } from 'reactflow';
// import { getStraightPath } from 'reactflow';
// import { Handle, Position, useStore } from 'reactflow';
// import { getEdgeParams } from '../../utils/utils';

// const initialNodes = [
//     {
//         id: '1',
//         type: 'custom',
//         position: { x: 0, y: 0 },
//     },
//     {
//         id: '2',
//         type: 'custom',
//         position: { x: 250, y: 320 },
//     },
//     {
//         id: '3',
//         type: 'custom',
//         position: { x: 40, y: 300 },
//     },
//     {
//         id: '4',
//         type: 'custom',
//         position: { x: 300, y: 0 },
//     },
// ];

// const initialEdges = [];

// const connectionLineStyle = {
//     strokeWidth: 3,
//     stroke: 'black',
// };

// const nodeTypes = {
//     custom: CustomNode,
// };

// const edgeTypes = {
//     floating: FloatingEdge,
// };

// const defaultEdgeOptions = {
//     style: { strokeWidth: 3, stroke: 'black' },
//     type: 'floating',
//     markerEnd: {
//         type: MarkerType.ArrowClosed,
//         color: 'black',
//     },
// };

// export default function EasyConnect() {
//     const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
//     const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

//     const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

//     return (
//         <ReactFlow
//             nodes={nodes}
//             edges={edges}
//             onNodesChange={onNodesChange}
//             onEdgesChange={onEdgesChange}
//             onConnect={onConnect}
//             fitView
//             nodeTypes={nodeTypes}
//             edgeTypes={edgeTypes}
//             defaultEdgeOptions={defaultEdgeOptions}
//             connectionLineComponent={CustomConnectionLine}
//             connectionLineStyle={connectionLineStyle}
//         />
//     );
// };



// const connectionNodeIdSelector = (state) => state.connectionNodeId;

// function CustomNode({ id, isConnectable }) {
//     const connectionNodeId = useStore(connectionNodeIdSelector);
//     const isTarget = connectionNodeId && connectionNodeId !== id;

//     const targetHandleStyle = { zIndex: isTarget ? 3 : 1 };
//     const label = isTarget ? 'Drop here' : 'Drag to connect';

//     return (
//         <div className="customNode">
//             <div
//                 className="customNodeBody"
//                 style={{
//                     borderStyle: isTarget ? 'dashed' : 'solid',
//                     backgroundColor: isTarget ? '#ffcce3' : '#ccd9f6',
//                 }}
//             >
//                 <Handle
//                     className="targetHandle"
//                     style={{ zIndex: 2 }}
//                     position={Position.Right}
//                     type="source"
//                     isConnectable={isConnectable}
//                 />
//                 <Handle
//                     className="targetHandle"
//                     style={targetHandleStyle}
//                     position={Position.Left}
//                     type="target"
//                     isConnectable={isConnectable}
//                 />
//                 {label}
//             </div>
//         </div>
//     );
// }

// function FloatingEdge({ id, source, target, markerEnd, style }) {
//     const sourceNode = useStore(useCallback((store) => store.nodeInternals.get(source), [source]));
//     const targetNode = useStore(useCallback((store) => store.nodeInternals.get(target), [target]));

//     if (!sourceNode || !targetNode) {
//         return null;
//     }

//     const { sx, sy, tx, ty } = getEdgeParams(sourceNode, targetNode);

//     const [edgePath] = getStraightPath({
//         sourceX: sx,
//         sourceY: sy,
//         targetX: tx,
//         targetY: ty,
//     });

//     return (
//         <path
//             id={id}
//             className="react-flow__edge-path"
//             d={edgePath}
//             markerEnd={markerEnd}
//             style={style}
//         />
//     );
// }
