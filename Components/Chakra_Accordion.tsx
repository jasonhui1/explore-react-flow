import {
    Box, Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, Text, Heading, List, ListItem, UnorderedList
} from '@chakra-ui/react';
import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';

const handleStyle = { left: 10 };

export default function ChakraAccordion({ data }: any) {

    const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nesciunt voluptatem magnam ipsa voluptas, reprehenderit est unde quod dolor laudantium beatae sunt excepturi ipsum doloremque dolorem commodi suscipit sint! Nihil!'
    return (
        <>
            {/* allow Multiple = Expand multiple items at once */}
            {/* allow Toggle = Can collapse once expand */}
            {/* default index = Expand at start */}

            <Accordion w='50ch' defaultIndex={[0]} allowMultiple allowToggle>
                <AccordionItem >
                    <h2>
                        {/* Has aria-expanded property in default */}
                        <AccordionButton _expanded={{ bg: 'tomato', color: 'white' }}>
                            <Box as="span" flex='1' textAlign='left'>
                                Section 1 title
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    {({ isExpanded }) => (
                        <>
                            <h2>
                                <AccordionButton _expanded={{ bg: 'blue.200', color: 'white' }}>
                                    <Box as="span" flex='1' textAlign='left'>
                                        {!isExpanded? 'Open Section 2 title': 'Close Section 2 title'}
                                    </Box>
                                    <AccordionIcon />

                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
                            </AccordionPanel>
                        </>
                    )}
                </AccordionItem>
            </Accordion>

            <Box my='5'>
                <Heading>Notes</Heading>
                <UnorderedList>
                    <ListItem>Has built in <Text as='b'  >isExpanded</Text> state, no need for useState </ListItem>
                </UnorderedList>
            </Box>


            <Handle type="target" position={Position.Left} />
            <Handle type="source" position={Position.Right}/>
        </>
    );
}