import React, { useState } from 'react'
import NodeWrapper from '../Wrapper/NodeWrapper'
import { Box, Button, Flex, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import NoteWrapper from '../Wrapper/NoteWrapper'

export default function HoverFocus() {

    const text = 'FocusMe'
    return (
        <NodeWrapper heading='Hover Focus' description='hover to focus content with crosshead' setMaxW='50ch'>

            <Flex justify={'center'} gap={2}>

                {text.split("").map((letter, index) => (
                    <Box key={index} display={'inline-block'} position={'relative'} role={'group'} px='1'>
                        <Text fontSize={'6xl'} fontWeight={'900'} fontFamily={'monospace'} color={'gray.500'} as='span'
                            filter={'blur(5px)'} transitionDuration={'0.5s'}
                            _groupHover={{ filter: 'blur(0px)' }}
                        >
                            {letter}
                        </Text>

                        <Box opacity={'0'} _groupHover={{opacity:1}} transitionDuration={'0.5s'}>
                            <Crosshair />
                        </Box>
                    </Box>
                ))}
            </Flex>

            <NoteWrapper>
                <UnorderedList>
                    <ListItem>
                        Filter blur, group hover
                    </ListItem>
                    <ListItem>
                        CrossHair: 4 corners, each corner is made up of two rects, set position using absolute
                    </ListItem>
                    <ListItem>
                        Inspiration from: https://www.youtube.com/watch?v=mfZIpSj_ZmE&list=LL&index=4&ab_channel=OnlineTutorials
                    </ListItem>
                </UnorderedList>
            </NoteWrapper>
        </NodeWrapper>
    )
}


function Crosshair() {
    return (
        <>
            <CrosshairCorner x='left' y='top' />
            <CrosshairCorner x='right' y='top' />
            <CrosshairCorner x='left' y='bottom' />
            <CrosshairCorner x='right' y='bottom' />
        </>
    )
}

interface Props {
    x: 'left' | 'right',
    y: 'top' | 'bottom'
}
function CrosshairCorner({ x, y }: Props) {
    const position = { top: y === 'top' ? 0 : '', bottom: y === 'bottom' ? 0 : '', left: x === 'left' ? 0 : '', right: x === 'right' ? 0 : '' }
    return (
        <>
            <Box position={'absolute'} {...position} bg='blue.600' w='10px' h='2px' />
            <Box position={'absolute'} {...position} bg='blue.600' w='2px' h='10px' />
        </>
    )
}