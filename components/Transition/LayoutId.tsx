import { Stack, Box, Button, Flex, UnorderedList, ListItem, Text } from "@chakra-ui/react";
import { useState } from "react";
import { AnimatePresence, motion } from 'framer-motion';
import NodeWrapper from "../Wrapper/NodeWrapper";
import NoteWrapper from "../Wrapper/NoteWrapper";




export default function LayoutIdExample() {

    return (
        <NodeWrapper heading={"Layout Id Example"} description={"swap list item using example"} setMaxW={true}>

            <Stack gap={5}>
                <Example1 />
                <Example2 />
            </Stack>

            <NoteWrapper>
                <UnorderedList>
                    <ListItem>
                        Transition for the indicator of selected item smoothly, used when state changes
                    </ListItem>
                    <ListItem>
                        Underline has a property call <b><i>layoutId</i></b>, set it to be the same for all three boxes
                    </ListItem>

                    <ListItem>
                        'When a new component is added that has a layoutId prop that matches an existing component, it will automatically animate out from the old component.'
                    </ListItem>
                    <ListItem>
                        'If the old component is still mounted when the new component enters, they will automatically crossfade from the old to the new.'
                    </ListItem>

                </UnorderedList>
            </NoteWrapper>
        </NodeWrapper>
    )
};



interface Props {
    width: number
    translateX: number
    underline?: boolean
}

function BoxWithRandomTranslationX({ width, translateX, underline = false }: Props) {
    return (
        <>
            <Box position='relative' w={width} h='100px' bg='black' transform={`translateX(${translateX}px)`} >

                {underline && <Box as={motion.div} w={'inherit'} h='10px' bg='orange' position={'absolute'} bottom={0} layoutId='underline' key='underline' />}
            </Box>
        </>
    )
}



function Example1() {
    const [selecetedIndex, setSelecetedIndex] = useState(1)

    return (
        <>
            <Stack>
                <BoxWithRandomTranslationX width={100} translateX={100} underline={selecetedIndex === 0} />
                <BoxWithRandomTranslationX width={150} translateX={400} underline={selecetedIndex === 1} />
                <BoxWithRandomTranslationX width={120} translateX={200} underline={selecetedIndex === 2} />
            </Stack>

            <Flex justify={'space-around'} mt='5' gap='5'>

                {[0, 1, 2].map(index => (
                    <Button flexGrow={1} onClick={() => setSelecetedIndex(index)} key={index} colorScheme={selecetedIndex === index ? "green" : "blue"}>{index} </Button>
                ))}
            </Flex>
        </>
    )
}

const startItem = [
    { id: '1', name: 'banana' },
    { id: '2', name: 'apple' },
    { id: '3', name: 'orange' },
    { id: '4', name: 'pear' },
    { id: '5', name: 'strawberry' },
];


function Example2() {
    const [items, setItems] = useState(startItem)

    const onSwap = () => {
        setItems(items => {
            let updateItems = [...items]
            const temp = updateItems[0];
            updateItems[0] = updateItems[3];
            updateItems[3] = temp;
            return updateItems
        })
    }

    return (
        <Flex gap='5'>
            <Stack>
                {items.map((item) => (
                    <motion.div
                        key={item.id}
                        layoutId={item.id}
                        initial={{ opacity: 0, maxHeight: 0 }}
                        animate={{ opacity: 1, maxHeight: '50px' }}
                        exit={{ opacity: 0, maxHeight: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <Box w='200px' bg='blue.200' key={item.id} p='4' rounded='3xl' >
                            {item.name}
                        </Box>
                    </motion.div>
                ))}

            </Stack >

            <Box>
                <Button onClick={() => onSwap()}>Swap item</Button>
            </Box>
        </Flex>
    )
}

