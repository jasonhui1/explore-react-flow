import {
    Box, Text, Heading, ListItem, UnorderedList, Button, Stack, Flex, Divider, Center
} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react'
import NoteWrapper from '../NoteWrapper';
import NodeWrapper from '../NodeWrapper';


export default function ChakraToast({ data }: any) {

    return (
        <Box maxW='75ch'>
            <NodeWrapper heading='Toast' description='The toast component is used to give feedback to users after an action has taken place. It will close itself when the close button is clicked, or after a timeout.'>

                <Flex gap='5' direction='column'>
                    <ToastBasic />
                </Flex>

            </NodeWrapper>
        </Box>
    );
}

function ToastBasic() {
    const toast = useToast()
    return (
        <>
            <Flex gap='5'>
                <Button colorScheme='blue'
                    onClick={() =>
                        toast({
                            title: 'Account created.',
                            description: "We've created your account for you.",
                            status: 'success',
                            duration: 9000,
                            isClosable: true,
                        })
                    }
                >
                    Show Toast
                </Button>

                <Button colorScheme='blue'
                    onClick={() =>
                        toast({
                            position: 'bottom-left',
                            render: () => (
                                <Box color='white' p={3} bgGradient="linear(to-t, blue.200, pink.500)" rounded='xl'>
                                    Hello World. Custom Toast
                                </Box>
                            ),
                        })
                    }
                >
                    Show Custom Toast
                </Button>


                <Button onClick={() => toast.closeAll()} type='button' variant='outline' colorScheme='red'>
                    Close all toasts
                </Button>
            </Flex>

            <NoteWrapper>
                <UnorderedList>
                    <ListItem><Text as='b'>useToast</Text> hook</ListItem>
                    <ListItem>Functions: close(Element), closeAll()  </ListItem>

                    <ListItem>A lot of settings - duration, isCloseable, status, varients, position </ListItem>
                    <ListItem>Can render custom component</ListItem>
                </UnorderedList>

            </NoteWrapper>
        </>
    )
}