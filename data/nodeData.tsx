import TextUpdaterNode from '../components/React-Flow/customNode';
import TextAnimationNode from '../components/Animation/TextAnimationNode';
import ChakraAccordion from '../components/Chakra/Chakra_Disclosure/Chakra_Accordion';
import ChakraTab from '../components/Chakra/Chakra_Disclosure/Chakra_Tabs';
import {
    Node,
    Edge,
} from 'reactflow';
import ChakraAlert from '../components/Chakra/Chakra_Feedback/Chakra_Alert';
import ChakraCircularProgress from '../components/Chakra/Chakra_Feedback/Chakra_CircularProgress';
import ChakraProgress from '../components/Chakra/Chakra_Feedback/Chakra_Progress';
import ChakraSkeleton from '../components/Chakra/Chakra_Feedback/Chakra_Skeleton';
import ChakraToast from '../components/Chakra/Chakra_Feedback/Chakra_Toast';
import DragHandleNode from '../components/React-Flow/DragHandle';
import TextCutting from '../components/Animation/TextCutting';
import TextFadingIn from '../components/Animation/TextFadingIn';
import TextHack from '../components/Animation/TextHack';
import ImageSlider from '../components/ImageSlider/ImageSlider';


export const initialEdges = [
    // { id: 'eAccordion-0', source: '5', target: '6' },
    // { id: 'eTab-0', source: '4', target: '7' },
    // { id: 'eTab-1', source: '4', target: '8' },
    // { id: 'eTab-2', source: '4', target: '9' },
];

export const initialNodes: Node[] = [
    // { id: '1', type: 'textUpdater', position: { x: 0, y: 0 }, data: { value: 'blue.100' } },
    // { id: '2', type: 'textUpdater', position: { x: 500, y: 500 }, data: { value: 'green.100' } },
    { id: '3', type: 'TextAnimationNode', position: { x: 0, y: -1000 }, data: { value: 'green.100' } },
    // { id: '4', type: 'input', position: { x: -2400, y: 0 }, data: { label: 'Tab' } },
    // { id: '5', type: 'input', position: { x: -2400, y: 1000 }, data: { label: 'Accordion' } },

    {
        id: 'Disclosure',
        data: { label: 'Chakra Disclosure' },
        position: { x: 3000, y: 200 },
        className: 'light',
        style: { backgroundColor: 'rgba(255, 0, 0, 0.2)', width: 300, height: 300 },
    },

    { id: '6', type: 'ChakraAccordion', position: { x: 0, y: 0 }, data: { value: 'green.100' }, parentNode: 'Disclosure', expandParent:true },
    { id: '7', type: 'ChakraTab', position: { x: 0, y: 600 }, data: { value: '' }, parentNode: 'Disclosure', expandParent:true},

    {
        id: 'Feedback',
        data: { label: 'Chakra Feedback' },
        position: { x: 1800, y: 0 },
        className: 'light',
        style: { backgroundColor: 'rgba(255, 0, 0, 0.2)', width: 300, height: 300 },
    },

    { id: '10', type: 'ChakraAlert', position: { x: 0, y: 0 }, data: { value: '' }, parentNode: 'Feedback', expandParent:true  },
    { id: '11', type: 'ChakraCircularProgress', position: { x: 0, y: 600 }, data: { value: '' }, parentNode: 'Feedback', expandParent:true },
    { id: '12', type: 'ChakraProgress', position: { x: 0, y: 1200 }, data: { value: '' }, parentNode: 'Feedback', expandParent:true },
    { id: '13', type: 'ChakraSkeleton', position: { x: 0, y: 1800 }, data: { value: '' }, parentNode: 'Feedback', expandParent:true },
    { id: '14', type: 'ChakraToast', position: { x: 0, y: 2400 }, data: { value: '' }, parentNode: 'Feedback', expandParent:true },

    // React flow
    { id: '15', type: 'DragHandleNode', position: { x: -3000, y: 0 }, dragHandle: '.custom-drag-handle', data: { value: '' } },

    //Animation
    { id: '100', type: 'TextCutting', position: { x: 800, y: 0 },  data: { value: '' } },
    { id: '101', type: 'TextFadingIn', position: { x: -1600, y: 0 },  data: { value: '' } },
    { id: '102', type: 'TextHack', position: { x: -2400, y: 0 },  data: { value: '' } },


    { id: '200', type: 'ImageSlider', position: { x: 0, y: 0 },  data: { value: '' } , dragHandle: '.custom-drag-handle'},



];

export const nodeTypes = {
    TextUpdaterNode,
    TextAnimationNode,
    TextCutting,
    TextFadingIn,
    TextHack,

    ChakraAccordion,
    ChakraTab,

    ChakraAlert,
    ChakraCircularProgress,
    ChakraProgress,
    ChakraSkeleton,
    ChakraToast,

    ImageSlider,
    DragHandleNode,
};