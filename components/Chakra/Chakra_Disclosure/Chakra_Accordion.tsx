import {
    Box, Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, Text, Heading, List, ListItem, UnorderedList
} from '@chakra-ui/react';
import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';
import NodeWrapper from '../../Wrapper/NodeWrapper';
import NoteWrapper from '../../Wrapper/NoteWrapper';

const handleStyle = { left: 10 };

function Note() {
    return (
        <NoteWrapper>
            <UnorderedList>
                <ListItem>Has built in <Text as='b'  >isExpanded</Text> state, no need for useState </ListItem>
            </UnorderedList>
        </NoteWrapper>
    )
}

export default function ChakraAccordion({ data }: any) {

    const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nesciunt voluptatem magnam ipsa voluptas, reprehenderit est unde quod dolor laudantium beatae sunt excepturi ipsum doloremque dolorem commodi suscipit sint! Nihil!'
    return (
        <NodeWrapper heading='Accordion' description='Accordions display a list of high-level options that can expand/collapse to reveal more information.'>
            {/* allow Multiple = Expand multiple items at once */}
            {/* allow Toggle = Can collapse once expand */}
            {/* default index = Expand at start */}

            <Accordion w='50ch' defaultIndex={[0]} allowMultiple allowToggle>
                <AccordionItem >
                    <h2>
                        {/* Has aria-expanded property in default */}
                        <AccordionButton bg='red.100' _hover={{ bg: 'red.200' }} _expanded={{ bg: 'tomato', color: 'white' }}>
                            <Box as="span" flex='1' textAlign='left'>
                                Section 1 title
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} border='1px'>
                        In CSS, an accordion is a user interface element that allows users to toggle between hiding and showing content within a container. It typically consists of a list of items, where clicking on an item reveals its associated content while hiding the content of the other items.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    {({ isExpanded }) => (
                        <>
                            <h2>
                                <AccordionButton bg='blue.100' _hover={{ bg: 'blue.200' }} _expanded={{ bg: 'blue.500', color: 'white' }}>
                                    <Box as="span" flex='1' textAlign='left'>
                                        {!isExpanded ? 'Open Section 2 title' : 'Close Section 2 title'}
                                    </Box>
                                    <AccordionIcon />

                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} border='1px'>
                                It is often used to organize information or to display a set of related options.
                                An accordion typically consists of a list of items, where each item has a header and a content section. The header is the clickable element that users can click on to toggle the visibility of the associated content section. When a user clicks on a header, the associated content section expands or collapses.
                            </AccordionPanel>
                        </>
                    )}
                </AccordionItem>
            </Accordion>

            <Note/>


            <Handle type="target" position={Position.Left} />
            <Handle type="source" position={Position.Right} />
        </NodeWrapper>
    );
}