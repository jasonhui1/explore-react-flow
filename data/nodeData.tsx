import TextUpdaterNode from '../components/React-Flow/customNode';
import TextAnimationNode from '../components/Animation/TextAnimationNode';
import ChakraAccordion from '../components/Chakra/Chakra_Disclosure/Chakra_Accordion';
import { ChakraTab, ChakraCustomTab, ChakraDataTab } from '../components/Chakra/Chakra_Disclosure/Chakra_Tabs';
import {
    Node,
    Edge,
} from 'reactflow';
import ChakraAlert from '../components/Chakra/Chakra_Feedback/Chakra_Alert';
import ChakraCircularProgress from '../components/Chakra/Chakra_Feedback/Chakra_CircularProgress';
import ChakraProgress from '../components/Chakra/Chakra_Feedback/Chakra_Progress';
import ChakraSkeleton from '../components/Chakra/Chakra_Feedback/Chakra_Skeleton';
import ChakraToast from '../components/Chakra/Chakra_Feedback/Chakra_Toast';


export const initialEdges = [
    { id: 'eAccordion-0', source: '5', target: '6' },
    { id: 'eTab-0', source: '4', target: '7' },
    { id: 'eTab-1', source: '4', target: '8' },
    { id: 'eTab-2', source: '4', target: '9' },
];

export const initialNodes: Node[] = [
    // { id: '1', type: 'textUpdater', position: { x: 0, y: 0 }, data: { value: 'blue.100' } },
    // { id: '2', type: 'textUpdater', position: { x: 500, y: 500 }, data: { value: 'green.100' } },
    { id: '3', type: 'TextAnimationNode', position: { x: 0, y: -1000 }, data: { value: 'green.100' } },
    { id: '4', type: 'Input', position: { x:  -2400, y: 0 }, data: { label: 'Tab' } },
    { id: '5', type: 'Input', position: { x:  -2400, y: 1000 }, data: { label: 'Accordion' } },

    { id: '6', type: 'ChakraAccordion', position: { x: -1800, y: 0 }, data: { value: 'green.100' } },
    { id: '7', type: 'ChakraTab', position: { x:  -1800, y: 600 }, data: { value: '' } },
    { id: '8', type: 'ChakraCustomTab', position: { x: -1800, y: 1200 }, data: { value: '' } },
    { id: '9', type: 'ChakraDataTab', position: { x:  -1800, y: 1800 }, data: { value: '' } },

    { id: '10', type: 'ChakraAlert', position: { x: 1800, y: 0 }, data: { value: '' } },
    { id: '11', type: 'ChakraCircularProgress', position: { x: 1800, y: 600 }, data: { value: '' } },
    { id: '12', type: 'ChakraProgress', position: { x: 1800, y: 1200 }, data: { value: '' } },
    { id: '13', type: 'ChakraSkeleton', position: { x: 1800, y: 1800 }, data: { value: '' } },
    { id: '14', type: 'ChakraToast', position: { x: 1800, y: 2400 }, data: { value: '' } },
];

export const nodeTypes = {
    TextUpdaterNode,
    TextAnimationNode,
    ChakraAccordion,

    ChakraTab,
    ChakraCustomTab,
    ChakraDataTab,

    ChakraAlert,
    ChakraCircularProgress,
    ChakraProgress,
    ChakraSkeleton,
    ChakraToast,
};