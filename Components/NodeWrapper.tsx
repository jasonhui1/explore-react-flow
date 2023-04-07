import { Divider, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Handle, Position } from 'reactflow';


interface NoteProp {
    heading: string
    description: string
    children: React.ReactNode
}

export default function NodeWrapper({ heading, description, children }: NoteProp) {
    return (
        <>
            <Heading textAlign='center' mb='5' as='h1' size='2xl'> {heading}</Heading>
            <Text> {description}</Text>
            <Divider my='5'/>
            {children}

            <Handle type="target" position={Position.Left} />
            <Handle type="source" position={Position.Right} />
        </>

    )
}


