import React, { useState } from 'react'
import { motion, Variants, LayoutGroup } from 'framer-motion';
import { Box, Button, Flex, ListItem, UnorderedList } from '@chakra-ui/react';
import NodeWrapper from '../Wrapper/NodeWrapper';
import NoteWrapper from '../Wrapper/NoteWrapper';

const buttonVariants: Variants = {
    closed: { opacity: 1 },
    open: { opacity: 0.5 }
};

export default function LayoutTransition() {

    return (
        <NodeWrapper heading='Layout Transition' description='All layout animations are performed using the transform property, resulting in smooth framerates. Useful for animating width/height, position' setMaxW={'100ch'}>
            <Flex align={'center'} justify={'center'} h='400px' gap='4'>

                <LayoutGroup>
                    <Component />
                    <Component />
                    <Component />
                </LayoutGroup>

            </Flex >

            <NoteWrapper>
                <UnorderedList>
                    <ListItem>Layout: Position-related, such as CSS flex, position or grid</ListItem>
                    <ListItem>Position-related, such as CSS flex, position or grid</ListItem>
                    <ListItem>Wrap around with <b><i>LayoutGroup</i></b> to group animation together (prevent instant width update which affects others abruptly)</ListItem>
                    <ListItem>Note: the animation may look jaggy once you pan the canvas, (border radius)</ListItem>
                    <ListItem>Official doc: https://codesandbox.io/s/framer-motion-2-scale-correction-z4tgr?from-embed=&file=/src/App.js:828-858</ListItem>
                </UnorderedList>
            </NoteWrapper>
        </NodeWrapper >
    );
}

function Component() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Flex as={motion.div}
            layout
            animate={isOpen ? "open" : "closed"}
            initial={{ borderRadius: 50 }}

            align={'center'} justify={'center'}
            bg='black'
            w={`${isOpen ? '400px' : '100px'}`}
            h={`${isOpen ? '200px' : '100px'}`}

            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}

        >
            <motion.div layout variants={buttonVariants}>
                <Button w={'50px'} h={'50px'} colorScheme='red' rounded={'full'}> </Button>
            </motion.div>
        </Flex>
    )
}
