import * as React from "react";
import { useState } from "react";
import { useMotionValue, Reorder } from "framer-motion";
import NodeWrapper from "../Wrapper/NodeWrapper";
import { Box, Flex, ListItem, Stack, UnorderedList } from "@chakra-ui/react";

const initialItems = ["🍅 Tomato", "🥒 Cucumber", "🧀 Cheese", "🥬 Lettuce"];

export default function ReorderList() {

    return (
        <NodeWrapper heading="Reorder List" description="drag and drop list">
            <Stack gap='5'>

                <List axis="y" />
                <List axis="x" />
            </Stack>

            {/* <List2 axis='y' /> */}
        </NodeWrapper>
    );
}



interface ListProps {
    axis: "x" | "y"
}

const List = ({ axis }: ListProps) => {
    const [items, setItems] = useState(initialItems);

    return (
        <Flex gap='5'>

            <Flex as={Reorder.Group} gap='1' bg='orange.200' p='2'
                axis={axis} direction={axis === 'x' ? "row" : 'column'}
                onReorder={setItems}
                values={items}
            >
                {items.map((item) => (
                    <Item key={item} item={item} />
                ))}
            </Flex>

            {/* Current list */}
            <UnorderedList>
                {items.map((item, index) => (
                    <ListItem key={index} listStyleType={'none'}>{item}</ListItem>
                ))}
            </UnorderedList>
        </Flex>
    )
}



interface ItemProps {
    item: string;
}

const Item = ({ item }: ItemProps) => {
    const y = useMotionValue(0);

    return (
        <Box as={Reorder.Item} value={item} id={item} style={{ y }}
            bg='gray.800' textColor={'pink'} px='5' py='2'
            listStyleType={'none'} >
            <span>{item}</span>
        </Box>
    );
};


///2D list attempt (fail)
// const initialItems2 = [["🍅 Tomato", "🥒 Cucumber", "🧀 Cheese", "🥬 Lettuce"], ["🍅 A", "🥒 B", "🧀 C", "🥬 D"]];

// const List2 = ({ axis }: ListProps) => {
//     const [itemsArray, setItemsArray] = useState(initialItems2);

//     const updateArray = (index: number, list: string[]) => {
//         setItemsArray(itemsArray => {
//             let  updatedList = [...itemsArray]
//             updatedList[index] = list
//             return updatedList
//         })
//     }


//     return (

//         <Reorder.Group
//             values={itemsArray}
//             axis='x'
//             onReorder={(list)=>{console.log('list', list)}}
//         >
//             {itemsArray.map((items, index) => (

//                 <Reorder.Group
//                     key={index}
//                     onReorder={(list: string[]) => updateArray(index, list)}
//                     values={items}

//                 >
//                     {
//                         items.map((item) => (
//                             <ItemDraggable key={item} item={item} />
//                         ))
//                     }
//                 </Reorder.Group>
//             ))}
//         </Reorder.Group>

//     )
// }

// const ItemDraggable = ({ item }: ItemProps) => {
//     const y = useMotionValue(0);

//     return (
//         <Box as={Reorder.Item} value={item} id={item} style={{ y }}
//             bg='gray.800' textColor={'pink'} px='5' py='2'
//             listStyleType={'none'} drag>
//             <span>{item}</span>
//         </Box>
//     );
// };
