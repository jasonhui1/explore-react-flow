import { Stack, Box, Button, Flex, UnorderedList, ListItem, Text } from "@chakra-ui/react";
import { useState } from "react";
import { v4 as uuid } from 'uuid';
import { AnimatePresence, motion } from 'framer-motion';
import NodeWrapper from "../Wrapper/NodeWrapper";
import NoteWrapper from "../Wrapper/NoteWrapper";

const startItem = [
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    { id: '3', name: 'Item 3' },
    { id: '4', name: 'Item 4 Item 4 Item 4' },
    { id: '5', name: 'Item 5' },
    { id: '6', name: 'Item 6' },
];

let randomStuff = ["banana", "coffee mug", "apple", "orange", "pear", "desk lamp"];

export default function SmoothListInsertion() {
    const [items, setItems] = useState(startItem)
    const onAdd = () => {
        const newItems = [...items]
        const randomItemName = randomStuff[Math.floor(Math.random() * randomStuff.length)]
        newItems.splice(1, 0, { id: uuid(), 'name': randomItemName })
        setItems(newItems)
    }

    return (
        <NodeWrapper heading={"Smooth List Insertion"} description={"Insert/ remove item in the list with smooth transition"}>
            <Flex gap='5'>
                <Stack>
                    <Text>CLick on item to remove</Text>
                    <AnimatePresence initial={false}>

                        {items.map((item) => (
                            <motion.div
                                key={item.id}
                                // initial={{ opacity: 0, maxHeight: 0 }}
                                animate={{ opacity: 1, maxHeight: '50px' }}
                                exit={{ opacity: 0, maxHeight: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Button w='200px' overflowWrap={'anywhere'} bg='blue.200' key={item.id} onClick={() => setItems(items.filter(prevItem => prevItem.id !== item.id))}
                                >{item.name}</Button>

                            </motion.div>
                        ))}
                    </AnimatePresence>

                </Stack >

                <Box>

                    <Button onClick={() => onAdd()}>Add item</Button>
                </Box>
            </Flex>

            <NoteWrapper>
                <UnorderedList>
                    <ListItem>
                        Animate max Height, initial,exit: 0, animate:50px
                    </ListItem>
                </UnorderedList>
            </NoteWrapper>
        </NodeWrapper>


    )
};
