import {
    Box, Text, Heading, ListItem, UnorderedList, Button, Stack, Flex, Divider, Center
} from '@chakra-ui/react';
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react'
import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import NoteWrapper from '../NoteWrapper';
import NodeWrapper from '../NodeWrapper';


export default function ChakraAlert({ data }: any) {

    return (
        <NodeWrapper heading='Alert' description='Alerts are used to communicate a state that affects a system, feature or page.'>
            <Flex gap='5'>

                <AlertBasic />
                <AlertVarient />
            </Flex>
        </NodeWrapper>
    );
}

function AlertBasic() {
    return (
        <Stack spacing={3}>
            <Alert status='error'>
                <AlertIcon />
                <AlertTitle>Error!</AlertTitle>
                <AlertDescription>There was an error processing your request</AlertDescription>
            </Alert>
            <Alert status='success'>
                <AlertIcon />
                <AlertTitle>Success!</AlertTitle>
                <AlertDescription>Data uploaded to the server. Fire on!</AlertDescription>
            </Alert>
            <Alert status='warning'>
                <AlertIcon />
                <AlertTitle>Warning!</AlertTitle>
                <AlertDescription>Seems your account is about expire, upgrade now</AlertDescription>
            </Alert>
            <Alert status='info'>
                <AlertIcon />
                <AlertTitle>Info!</AlertTitle>
                <AlertDescription>Chakra is going live on August 30th. Get ready!</AlertDescription>
            </Alert>

            <NoteWrapper>
                <UnorderedList>
                    <ListItem> <Text as='b'> Alert Status</Text> match with <Text as='b'>Alert icon</Text>, title style </ListItem>

                </UnorderedList>
            </NoteWrapper>
        </Stack>
    )
}

function AlertVarient() {
    return (
        <Stack spacing={3}>
            <Alert status='success' variant='subtle'>
                <AlertIcon />
                Data uploaded to the server. Fire on!
            </Alert>
            <Alert status='success' variant='solid'>
                <AlertIcon />
                Data uploaded to the server. Fire on!
            </Alert>
            <Alert status='success' variant='left-accent'>
                <AlertIcon />
                Data uploaded to the server. Fire on!
            </Alert>
            <Alert status='success' variant='top-accent'>
                <AlertIcon />
                Data uploaded to the server. Fire on!
            </Alert>
            <NoteWrapper>
                <UnorderedList>
                    <ListItem> <Text as='b'> Alert varient</Text> : Subtle(None?), solid, left-accent, top-accent</ListItem>

                </UnorderedList>
            </NoteWrapper>
        </Stack>
    )
}