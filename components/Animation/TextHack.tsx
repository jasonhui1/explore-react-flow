import React, { useState } from 'react'
import { Box, Button, Card, Divider, Flex, Heading, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import NodeWrapper from '../Wrapper/NodeWrapper';
import NoteWrapper from '../Wrapper/NoteWrapper';

export default function TextHack() {
    const theWord = 'HACKING'
    const letters = 'QWERTYUIOPASDFGHJKLZXCVBNM'

    const flip = 3
    const intervalPerFlip = 30

    const [currentText, setCurrentText] = useState(theWord)

    let interval: NodeJS.Timer;
    const onMouseOver = () => {
        let iteration = 0;

        clearInterval(interval);

        interval = setInterval(() => {
            setCurrentText(text => text
                .split("")
                .map((_, index) => {
                    if (index < iteration) {
                        return theWord[index];
                    }

                    return letters[Math.floor(Math.random() * 26)]
                })
                .join("")
            );

            if (iteration >= currentText.length) {
                clearInterval(interval);
            }

            iteration += 1 / flip;
        }, intervalPerFlip);
    }

    return (
        <NodeWrapper heading='Text Hack' description='Hack looking text' setMaxW={true}>

            <Box onMouseOver={onMouseOver} w='fit-content'>
                <Text as='span' fontSize='6xl' fontWeight={'800'} >
                    {currentText}
                </Text>
            </Box>


            <NoteWrapper>
                <UnorderedList>
                    <ListItem>
                        params: Flip: number of flip for each letter
                    </ListItem>
                    <ListItem>
                        params: intervalPerFlip
                    </ListItem>


                    <ListItem>
                        At every interval, flip the letter
                    </ListItem>

                    <ListItem>
                        To make it stop one after another, don't flip if index &lt; interval
                    </ListItem>


                    <ListItem>
                        Code from Hyperlexed: https://codepen.io/hrshainik/pen/mdVBwwm?editors=0100
                    </ListItem>
                </UnorderedList>
            </NoteWrapper>
        </NodeWrapper >
    )
}
