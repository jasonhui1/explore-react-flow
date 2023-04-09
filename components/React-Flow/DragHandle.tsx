import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';
import NodeWrapper from '../Wrapper/NodeWrapper';
import NoteWrapper from '../Wrapper/NoteWrapper';
import { ListItem, UnorderedList, Text, Box } from '@chakra-ui/react';

const labelStyle = {
    display: 'flex',
    alignItems: 'center',
};

const dragHandleStyle = {
    display: 'inline-block',
    width: 50,
    height: 50,
    backgroundColor: 'teal',
    marginLeft: 5,
    borderRadius: '50%',
};

function DragHandleNode() {
    return (
        <>
            <Box maxW='50ch'>

                <NodeWrapper heading='DragHandler' description='Specify the draggable area (instead of the whole node)'>
                    <div style={labelStyle}>
                        Only draggable here → <span className="custom-drag-handle" style={dragHandleStyle} />
                    </div>
                    <NoteWrapper>
                        <UnorderedList>
                            <ListItem> Add Classname to where you wants to be draggable, example <Text as='i'><Text as='b'>'custom-drag-handle'</Text></Text></ListItem>
                            <ListItem> Add <Text as='i'><Text as='b'>dragHandle: '.custom-drag-handle'</Text></Text>, to the node when adding to initial nodes</ListItem>
                        </UnorderedList>
                    </NoteWrapper>
                </NodeWrapper>
            </Box>
        </>
    );
}

export default memo(DragHandleNode);
