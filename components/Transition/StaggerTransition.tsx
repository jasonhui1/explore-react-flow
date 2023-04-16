import { Box, Button, Flex, Heading, List, ListItem, OrderedList, Stack, Text, UnorderedList } from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";
import NodeWrapper from "../Wrapper/NodeWrapper";
import { useState } from "react";
import NoteWrapper from "../Wrapper/NoteWrapper";

// Come from downward, fades in
const itemVariants: Variants = {
    open: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

const menu = ["Grilled salmon", "Mushroom risotto", "Roasted chicken", "Steak frites", "Fish and chips", "Spicy ramen", "Pad Thai", "Sushi platter"];


export default function StaggerTransition() {
    const [isOpen, setIsOpen] = useState(false);

    return (

        <NodeWrapper heading='Stagger Transition' description="Use varients and stagger children">
            <Box as={motion.nav}
                initial={false}
                animate={isOpen ? "open" : "closed"} w='300px'
                color='purple.500' 
            >
                <Button as={motion.button} justifyContent={'space-between'} w='full' bg='white' mb='1'
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Menu
                    <motion.div
                        variants={{
                            open: { rotate: 180 },
                            closed: { rotate: 0 }
                        }}
                        transition={{ duration: 0.2 }}
                        style={{ originY: 0.55 }}
                    >
                        <svg width="15" height="15" viewBox="0 0 20 20">
                            <path d="M0 7 L 20 7 L 10 16" />
                        </svg>
                    </motion.div>
                </Button>

                <Stack as={motion.ul} bg='white' px='5' py='4' spacing={'3'}
                    variants={{
                        open: {
                            clipPath: "inset(0% 0% 0% 0% round 10px)",
                            transition: {
                                type: "spring",
                                bounce: 0,
                                duration: 0.7,
                                delayChildren: 0.5,
                                staggerChildren: 0.05
                            }
                        },
                        closed: {
                            clipPath: "inset(10% 50% 90% 50% round 10px)",
                            transition: {
                                type: "spring",
                                bounce: 0,
                                duration: 0.3
                            }
                        }
                    }}
                    style={{ pointerEvents: isOpen ? "auto" : "none" }}
                >

                    {menu.map((content, index) => (
                        <Text as={motion.p} key={index} variants={itemVariants} > {content}</Text>
                    ))}
                </Stack>
            </Box>

            <NoteWrapper>
                <Heading as='h4' fontSize={'xl'}>Animation Breakdown</Heading>
                <OrderedList>
                    <ListItem>When the menu button is clicked, <b><i>scale down</i></b>, <b><i>flip arrow icon</i></b>  </ListItem>
                    <ListItem>Shows Menu container , from top center using <b><i>clip path inset</i></b> </ListItem>
                    <ListItem>Start showing items near <b><i>full open</i></b>, using <b><i>delayChildren</i></b>, stagger using <b><i>staggerChildren</i></b> </ListItem>
                </OrderedList>
            </NoteWrapper>
        </NodeWrapper>
    )
};
