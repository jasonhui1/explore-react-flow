import { Box, Button, Card, Divider, Flex, Heading, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import NodeWrapper from '../Wrapper/NodeWrapper';
import NoteWrapper from '../Wrapper/NoteWrapper';


export default function TextCutting({ data }: any) {

    const text = 'Hover me to --------a-----!'
    const delay = 100
    const duration = 500

    return (
        <NodeWrapper heading='Text Cutting' description='Cutting text' setMaxW={true}>

            <Box role="group" w='fit-content'>
                {/* Up : difference in transform, clipPath*/}
                <Box position={'absolute'}>

                    {text.split(" ").map((word, index) => (
                        <Text as='span' fontSize='2xl' key={index} display='inline-block' m='0vmin 0.3vmin' overflow={'hidden'} clipPath={'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)'}
                            _groupHover={{ transform: 'translateY(40%)', opacity: '1', transition: `${duration}ms`, transitionDelay: `${index * delay}ms` }}
                        >
                            {word}
                        </Text>
                    ))}
                </Box>

                {/* Down : difference in transform, clipPath*/}
                <Box position={'absolute'}>
                    {text.split(" ").map((word, index) => (

                        <Text as='span' fontSize='2xl' key={index} display='inline-block' m='0vmin 0.3vmin' overflow={'hidden'} clipPath={'polygon(0 0, 100% 0%, 100% 50%, 0 50%)'}
                            _groupHover={{ transform: 'translateY(-40%)', opacity: '1', transition: `${duration}ms`, transitionDelay: `${index * delay}ms` }}
                        >
                            {word}
                        </Text>
                    ))}
                </Box>

                {/* Cut Indicator: use After*/}
                <Box position={'absolute'} whiteSpace={'nowrap'}
                    _after={{
                        content: '""', w: '0', h: '5px', bg: 'red.200', opacity: '0.8',
                        position: 'absolute', left: '0', top: '50%',

                    }}
                    _groupHover={{ _after: { opacity: '1', w: 'full', transition: `${delay * (text.split(" ").length)}ms` } }}
                >

                    {text.split(" ").map((word, index) => (
                        <Text as='span' fontSize='2xl' key={index} display='inline-block' m='0vmin 0.3vmin' opacity={0}>
                            {word}
                        </Text>
                    ))}
                </Box>

                {/* For layout, need some actual text to have width */}
                <Text opacity={0} display='inline-block' m='0vmin 0.3vmin'>{text}</Text>
            </Box>


            <NoteWrapper>
                <UnorderedList>
                    <ListItem>
                        Compose of two identical text, when hover: one moves up, another moves down,
                    </ListItem>
                    <ListItem>
                        Use overflow:hidden and clip path to hide half of the text
                    </ListItem>

                    <ListItem>
                        The cut is using the after attribute in css, so the length matches. Have some maths to calculate timing (delay, text length) 
                    </ListItem>

                    <ListItem>
                        Inspiration from: https://codepen.io/hrshainik/pen/mdVBwwm?editors=0100
                    </ListItem>
                </UnorderedList>
            </NoteWrapper>
        </NodeWrapper>
    );
}