import React, { useState } from 'react'
import NodeWrapper from '../Wrapper/NodeWrapper'
import { Box, Button, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import NoteWrapper from '../Wrapper/NoteWrapper'

export default function HoverTrail() {
    const [hovering, setHovering] = useState(false)
    const [hide, setHide] = useState(false)

    return (
        <NodeWrapper heading='trail' description='hover trail effect'>

            <Button bg={'gray.500'} w='200px' h='100px' rounded={'3xl'} position={'relative'}
                overflow={'hidden'} onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}
                _hover={{
                    bg: 'gray.800', textColor: 'white',
                }}
            >
{/* 
                {hovering && <Trail color='#00ccff' duration={4} delay={0} />}
                {hovering && <Trail color='#d400d4' duration={4} delay={-2} />} */}
                { <Trail color='#00ccff' duration={4} delay={0} />}
                {<Trail color='#d400d4' duration={4} delay={-2} />}

                {!hide && <Box bg='inherit' position={'absolute'} inset={'5px'} rounded={'inherit'} />}

                <Text zIndex={1} fontSize={'3xl'}>Trail</Text>
            </Button>

            <Button onClick={() => setHide(!hide)}>Uncover Magic</Button>

            <NoteWrapper>
                <UnorderedList>
                    <ListItem>
                        Rotate Conic-gradient, overflow hidden
                    </ListItem>
                    <ListItem>
                        Another box, inherit everything with inset, to hide
                    </ListItem>
                </UnorderedList>
            </NoteWrapper>
        </NodeWrapper>
    )
}

interface TrailProps {
    color: string,
    duration: number,
    delay: number
}

function Trail({ color, duration, delay }: TrailProps) {
    return (
        <Box as={motion.div} position='absolute' w='400px' h='400px' backgroundImage={`conic-gradient(transparent,transparent,transparent, ${color})`}
            animate={{
                rotate: [0, 360],
                transition: { repeat: Infinity, duration: duration, ease: 'linear', delay: delay }
            }}

        />
    )
}