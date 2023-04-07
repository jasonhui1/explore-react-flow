import {
    Box, Text, Heading, ListItem, UnorderedList, Button, Stack, Flex, Divider, Center
} from '@chakra-ui/react';
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import NoteWrapper from '../NoteWrapper';
import NodeWrapper from '../NodeWrapper';


export default function ChakraSkeleton({ data }: any) {

    return (
        <Box maxW='75ch'>
            <NodeWrapper heading='Skeleton' description='Progress is used to display the progress status for a task that takes a long time or consists of several steps. Useful when fetching remote data.'>

                <Flex gap='5' direction='column'>
                    <SkeletonBasic />
                </Flex>

            </NodeWrapper>
        </Box>
    );
}

function SkeletonBasic() {
    return (
        <>
            <Stack>
                <Skeleton height='20px' />
                <Skeleton>
                    <Box>contents wrapped</Box>
                    <Box>contents wrapped</Box>
                </Skeleton>

                <Box padding='6' boxShadow='lg' bg='white'>
                    <SkeletonCircle size='10' />
                    <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
                </Box>
            </Stack>

            <NoteWrapper>
                <UnorderedList>
                    <ListItem>Circle/Text</ListItem>
                    <ListItem>Interesting settings - noOfLines, fadeInDuration, isloaded </ListItem>
                    <ListItem>Common settings - height, color, spacing</ListItem>
                </UnorderedList>

            </NoteWrapper>
        </>
    )
}