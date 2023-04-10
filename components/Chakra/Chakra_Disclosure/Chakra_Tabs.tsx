import {
    Box, Text, Heading, ListItem, UnorderedList, Button, Stack
} from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, useColorModeValue, useMultiStyleConfig, useTab } from '@chakra-ui/react'
import { useState, forwardRef, } from 'react';
import { Handle, Position } from 'reactflow';
import NoteWrapper from '../../Wrapper/NoteWrapper';
import NodeWrapper from '../../Wrapper/NodeWrapper';


const tabData = [
    {
        label: 'Nigerian Jollof',
        content: 'Perhaps the greatest dish ever invented.',
    },
    {
        label: 'Pounded Yam & Egusi',
        content:
            'Perhaps the surest dish ever invented but fills the stomach more than rice.',
    },
]

interface TabData {
    label: string
    content: string
}

interface DataTabsProps {
    data: TabData[];
}

function ChakraDataTab({ data }: DataTabsProps) {
    return (
        <>
            <Tabs shadow='md' borderWidth='1px'>
                <TabList>
                    {data.map((tab: any, index: any) => (
                        <Tab key={index}>{tab.label}</Tab>
                    ))}
                </TabList>
                <TabPanels>
                    {data.map((tab: any, index: any) => (
                        <TabPanel p={4} key={index}>
                            {tab.content}
                        </TabPanel>
                    ))}
                </TabPanels>
            </Tabs>
        </>
    )
}


// Custom Tab - use useTab Hook
interface Props {
    children?: React.ReactNode;
}
type Ref = HTMLElement;

const CustomTab = forwardRef<Ref, Props>((props, ref) => {
    // 1. Reuse the `useTab` hook
    const tabProps = useTab({ ...props, ref })
    const isSelected = !!tabProps['aria-selected']

    // 2. Hook into the Tabs `size`, `variant`, props
    const styles = useMultiStyleConfig('Tabs', tabProps)

    return (
        <Button __css={styles.tab} {...tabProps}>
            <Box as='span' mr='2'>
                {isSelected ? '😎' : '😐'}
            </Box>
            {tabProps.children}
        </Button>
    )
});
CustomTab.displayName = 'CustomTab';


function ChakraCustomTab() {
    return (
        <>
            <Tabs shadow='md' borderWidth='1px'>
                <TabList>
                    <CustomTab>One</CustomTab>
                    <CustomTab>Two</CustomTab>
                </TabList>
                <TabPanels>
                    <TabPanel>1</TabPanel>
                    <TabPanel>2</TabPanel>
                </TabPanels>
            </Tabs>
        </>
    )
}

function ChakraBasicTab() {

    const colors = useColorModeValue(
        ['red.100', 'teal.100', 'blue.100'],
        ['red.900', 'teal.900', 'blue.900'],
    )
    const defaultIndex = 1
    const [tabIndex, setTabIndex] = useState(defaultIndex)
    const bg = colors[tabIndex]

    {/* isFitted - stretch the tabs to fit width/height*/ }
    {/* isLazy - lazy mounting*/ }
    {/* default index = tab shows at start */ }

    return (
        <Tabs isFitted isLazy size='lg' defaultIndex={defaultIndex} onChange={(index) => setTabIndex(index)} bg={bg} shadow='md' borderWidth='1px'>
            <TabList>
                <Tab>One</Tab>
                <Tab>Two</Tab>
                <Tab>Three</Tab>
            </TabList>

            <TabPanels>
                <TabPanel>
                    <p>one!</p>

                </TabPanel>
                <TabPanel>
                    <p>Instead of expanding or collapsing content, tabs switch between different content sections.</p>

                </TabPanel>
                <TabPanel>
                    <p>three!</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}

// 
export default function ChakraTab({ data }: any) {



    return (
        <NodeWrapper heading='Tabs' description='A React component that helps you build accessible tabs, by providing keyboard interactions and ARIA attributes described in the WAI-ARIA Tab Panel Design Pattern.' setMaxW={true}>

            <Stack spacing={8}>

                <ChakraBasicTab />
                <ChakraCustomTab />
                <ChakraDataTab data={tabData} />

            </Stack>


            <NoteWrapper>
                <UnorderedList>
                    <ListItem>Has built in <Text as='b'  >selected</Text> state, no need for useState </ListItem>
                    <ListItem>Can do stuff when tab changes, ex. bg color </ListItem>
                    <ListItem>Customs: tab indicator, tab component  </ListItem>
                    <ListItem>Has Lazy mounting  </ListItem>
                </UnorderedList>
            </NoteWrapper>


            <Handle type="target" position={Position.Left} />
            <Handle type="source" position={Position.Right} />
        </NodeWrapper>
    );
}