import {
    Box, Heading, List, ListItem, UnorderedList, Image, Flex, Stack, StackDivider
} from '@chakra-ui/react';
import NodeWrapper from '../Wrapper/NodeWrapper';
import NoteWrapper from '../Wrapper/NoteWrapper';
import { useState } from 'react';

const srcs = [
    'https://images.unsplash.com/photo-1681152553532-7e15439c0cba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=663&q=80',
    'https://images.unsplash.com/photo-1667543791182-9a534ced20cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
    'https://images.unsplash.com/photo-1680080303612-5febbc32e92a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    'https://images.unsplash.com/photo-1681189116425-fd3e47eb9647?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1492&q=80',
    'https://images.unsplash.com/photo-1681037690188-33ff11b9a05f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    'https://images.unsplash.com/photo-1680861273584-37c89966afc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
    'https://images.unsplash.com/photo-1680820364850-0064a0ae6d16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1673044296025-e3fe75735136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
]

function BasicSlider() {
    return (
        <>
            <Heading>Basic Image Slider</Heading>

            <Box overflow={'auto'}>
                <Flex gap='4'>
                    {srcs.map((src, i) => {
                        return <Image
                            key={i} src={src} alt='random'
                            w='40vmin' h='56vmin'
                            objectFit={'cover'} objectPosition={'center'} draggable={false}>
                        </Image>
                    })}
                </Flex>
            </Box>
            <NoteWrapper>
                <UnorderedList>
                    <ListItem>Overflow: auto </ListItem>
                </UnorderedList>
            </NoteWrapper>
        </>
    )
}

function MouseMoveSlider() {

    const [initialPosition, setInitialPosition] = useState(0)
    const [offset, setOffset] = useState(0)
    const [prevOffset, setPrevOffset] = useState(0)

    const onMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (initialPosition === 0) return
        const currentPosition = e.clientX
        const currentOffset = currentPosition - initialPosition
        setOffset(prevOffset + currentOffset)
    }

    const onMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setInitialPosition(e.clientX)
    }

    const onMouseUp = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setInitialPosition(0)
        setPrevOffset(offset)
    }

    return (
        <>
            <Heading>Mouse Move Slider</Heading>
            <Box overflow={'hidden'}
                onMouseMove={(e) => onMouseMove(e)}
                onMouseDown={(e) => onMouseDown(e)}
                onMouseUp={(e) => onMouseUp(e)}>
                <Flex gap='4' w='full'

                    translateX={-offset * 2}
                    transform={'auto'}
                    transition={'0.5s ease-out'}
                >
                    {srcs.map((src, i) => {
                        return <Image
                            key={i} src={src} alt='random'
                            w='40vmin' h='56vmin'
                            objectFit={'cover'} objectPosition={'center'} draggable={false}>
                        </Image>
                    })}
                </Flex>
            </Box>
            <NoteWrapper>
                <UnorderedList>
                    <ListItem>Translate the flex depends on the offset of the current mousemove + previous </ListItem>
                    <ListItem>Save offset when mouse up </ListItem>
                    <ListItem>Can use percentage depends on the window with instead, but since currently can be zoom in/out, it is not accurate</ListItem>
                </UnorderedList>
            </NoteWrapper>
        </>
    )
}

export default function ImageSlider({ data }: any) {

    return (
        <NodeWrapper heading='Image Slider' description='Image Slider.'>

            <Stack divider={<StackDivider />}>

                <BasicSlider />
                <MouseMoveSlider />

            </Stack>

        </NodeWrapper>
    );
}