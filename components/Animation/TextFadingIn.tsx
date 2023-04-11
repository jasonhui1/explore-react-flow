import { Box, Button, Card, Divider, Flex, Heading, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import NodeWrapper from '../Wrapper/NodeWrapper';
import NoteWrapper from '../Wrapper/NoteWrapper';
import { transform } from 'typescript';


export default function TextFadingIn({ data }: any) {

    const sentences = [
        "The quick brown fox jumps over the lazy dog.",
        "A watched pot never boils.",
        "Actions speak louder than words.",
        "All's fair in love and war.",
        "An apple a day keeps the doctor away.",
        "April showers bring May flowers.",
        "As you sow, so shall you reap.",
        "Ask not what your country can do for you; ask what you can do for your country.",
        "Behind every great man is a great woman.",
        "Beauty is in the eye of the beholder."
    ];

    const letterDelay = 0.05
    const letterTransitionDuration = 1

    const sentenceMoveDuration = 25 //Should normalise this (not intuituve), the lower the quicker
    const sentenceFadeOutDuration = 1 
    const sentenceFadeOutDelay = 1 

    return (
        <NodeWrapper heading='Text Fading' description='Fading text'>

            {/* Up : difference in transform, clipPath*/}
            <Box role="group" overflow={'hidden'} w='1000px'>

                {/* Mess up position - need more maths but cant be bother */}
                {/* <Box _groupHover={{ translate: ('-1000px'), transition: '100000ms'}}> */}
                <Box>
                    {sentences.map((sentence, i) => {
                        //Total letters in previous sentences 
                        const letters = sentences.slice(0, i).reduce((acc, sentence) => acc + sentence.length, 0)
                        const fadeInDelay = letters * letterDelay
                        const fadeOutDelay = (sentence.length + letters) * letterDelay + sentenceFadeOutDelay

                        return (
                            <Box key={i} position={'relative'} left={`${Math.random() * 500 + 50}px`} whiteSpace={'nowrap'}
                                _groupHover={{
                                    translate: '-1000px', opacity: 0, 
                                    transition: `translate ${sentenceMoveDuration}s, opacity ${sentenceFadeOutDuration}s`,
                                    transitionDelay: `${fadeInDelay}s, ${fadeOutDelay}s`
                                }}
                            >
                                {sentence.split("").map((word, j) => {
                                    return (
                                        <Text as='span' key={j} fontSize={'3xl'}
                                            opacity={0}
                                            _groupHover={{opacity: 1, transition: `${letterTransitionDuration}s`, transitionDelay: `${fadeInDelay + j * letterDelay}s` }}
                                        >
                                            {word}
                                        </Text>)
                                })}
                            </Box>
                        )
                    })}
                </Box>
            </Box>

            <NoteWrapper>
                <UnorderedList>
                    <ListItem>
                        Show one sentence after another - uses delay depends on how many letters appeared before 
                    </ListItem>
                    <ListItem>
                        Sentences are moving to the left over time, disappear after finished showing + some delay
                    </ListItem>

                    <ListItem>
                        Letters show one after another - use letterDelay depends on index
                    </ListItem>

                    <ListItem>
                        Inspiration from anime, ex. angel beats, stray dogs, danganronpa
                    </ListItem>

                    <ListItem>
                        Inprovements, ex. scale down while showing sentences, more transitions for letters, ex. slide in, 
                    </ListItem>
                </UnorderedList>
            </NoteWrapper>
        </NodeWrapper >
    );
}