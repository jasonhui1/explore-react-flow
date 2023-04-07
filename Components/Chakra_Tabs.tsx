import {
    Box, Text, Heading, ListItem, UnorderedList, Button
} from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, useColorModeValue, useMultiStyleConfig, useTab } from '@chakra-ui/react'
import { useState, forwardRef, } from 'react';
import { Handle, Position } from 'reactflow';
import NoteWrapper from './NoteWrapper';


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

export function ChakraDataTab() {
    const DataTabs = ({ data }: DataTabsProps) => {
        return (
            <>

                <Tabs>
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
                <Handle type="target" position={Position.Left} />
                <Handle type="source" position={Position.Right} />
            </>
        )
    }
    return <DataTabs data={tabData} />
}


// Custom Tab - use useTab Hook
interface Props {
    children?: React.ReactNode;
}
export type Ref = HTMLElement;

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


export function ChakraCustomTab({ data }: any) {
    return (
        <>
            <Tabs>
                <TabList>
                    <CustomTab>One</CustomTab>
                    <CustomTab>Two</CustomTab>
                </TabList>
                <TabPanels>
                    <TabPanel>1</TabPanel>
                    <TabPanel>2</TabPanel>
                </TabPanels>
            </Tabs>
            <Handle type="target" position={Position.Left} />
            <Handle type="source" position={Position.Right} />
        </>
    )
}

// 
export function ChakraTab({ data }: any) {

    const colors = useColorModeValue(
        ['red.50', 'teal.50', 'blue.50'],
        ['red.900', 'teal.900', 'blue.900'],
    )
    const [tabIndex, setTabIndex] = useState(0)
    const bg = colors[tabIndex]

    return (
        <>
            {/* isFitted - stretch the tabs to fit width/height*/}
            {/* isLazy - lazy mounting*/}
            {/* default index = tab shows at start */}

            <Tabs isFitted isLazy size='lg' defaultIndex={1} onChange={(index) => setTabIndex(index)} bg={bg}>
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
                        <p>two!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>three!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>

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
        </>
    );
}