import {
    Box, Text, Heading, ListItem, UnorderedList, Button, Stack, Flex, Divider, Center
} from '@chakra-ui/react';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import NoteWrapper from '../../Wrapper/NoteWrapper';
import NodeWrapper from '../../Wrapper/NodeWrapper';


export default function ChakraCircularProgress({ data }: any) {

    return (
        <NodeWrapper heading='Circular Progress' description='Circular Progress is used to indicates the progress for determinate and indeterminate processes.'>

            <Flex gap='5' direction='column'>

                <CircularProgressBasic />
            </Flex>

        </NodeWrapper>

    );
}

function CircularProgressBasic() {
    return (
        <>
            <Flex align='center' gap='5'>
                <CircularProgress value={80} />
                {/* // Change the size to 120px */}
                <CircularProgress value={30} color='orange.400' size='120px'>
                    <CircularProgressLabel>30%</CircularProgressLabel>
                </CircularProgress>
                <CircularProgress value={59} size='100px' thickness='4px' />

                <CircularProgress isIndeterminate color='green.300' />


            </Flex>
            <NoteWrapper>
                <UnorderedList>
                    <ListItem>Determinate - value is known</ListItem>
                    <ListItem>Indeterminate - value not known - (spinning)</ListItem>
                    <ListItem>Interesting settings - thickness, label </ListItem>
                    <ListItem>Common settings - color, size</ListItem>
                </UnorderedList>

            </NoteWrapper>
        </>
    )
}