import {
    Box, Text, Heading, ListItem, UnorderedList, Button, Stack, Flex, Divider, Center
} from '@chakra-ui/react';
import { Progress } from '@chakra-ui/react'
import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import NoteWrapper from '../NoteWrapper';
import NodeWrapper from '../NodeWrapper';


export default function ChakraProgress({ data }: any) {

    return (
        <>
            <Box maxW='75ch'>
                <NodeWrapper heading='Progress' description='Progress is used to display the progress status for a task that takes a long time or consists of several steps.'>

                    <Flex gap='5' direction='column'>
                        <ProgressBasic />
                    </Flex>

                </NodeWrapper>
            </Box>
        </>
    );
}

function ProgressBasic() {
    return (
        <>
            <Progress value={80} />
            <Progress hasStripe value={64} />
            <Progress colorScheme='green' size='lg' value={20} />
            <Progress size='xs' isIndeterminate />
            <NoteWrapper>
                <UnorderedList>
                    <ListItem>Determinate - value is known</ListItem>
                    <ListItem>animate - isIndeterminate</ListItem>
                    <ListItem>Interesting settings - thickness, label </ListItem>
                    <ListItem>Common settings - color, size</ListItem>
                </UnorderedList>

            </NoteWrapper>
        </>
    )
}