import { Box, Divider, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Handle, Position } from 'reactflow';

const dragHandleStyle = {
    display: 'inline-block',
    width: 50,
    height: 50,
    backgroundColor: 'teal',
    marginLeft: 5,
    borderRadius: '50%',
};

interface NoteProp {
    heading: string
    description: string
    children: React.ReactNode
    setMaxW?: boolean
}

export default function NodeWrapper({ heading, description, children, setMaxW = false }: NoteProp) {
    return (
        <>
            <Box border='solid' p='5' m='5' bg='blue.50' maxW={setMaxW ? '75ch' : 'fit-content'}>

                <Text as='span' className="custom-drag-handle" style={dragHandleStyle} />

                <Heading textAlign='center' mb='5' as='h1' size='2xl'> {heading}</Heading>
                <Text> {description}</Text>
                <Divider my='5' />
                {children}

                <Handle type="target" position={Position.Left} />
                <Handle type="source" position={Position.Right} />
            </Box>
        </>

    )
}


