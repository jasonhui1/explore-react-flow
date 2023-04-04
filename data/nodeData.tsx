import TextUpdaterNode from '../components/customNode';
import TextAnimationNode from '../components/TextAnimationNode';
import ChakraAccordion from '../components/Chakra_Accordion';

export const initialEdges = [
    { id: 'e1-2', source: '1', target: '2' }



];

export const initialNodes = [
    // { id: '1', type: 'textUpdater', position: { x: 0, y: 0 }, data: { value: 'blue.100' } },
    // { id: '2', type: 'textUpdater', position: { x: 500, y: 500 }, data: { value: 'green.100' } },
    { id: '3', type: 'textAnimationNode', position: { x: 0, y: 0 }, data: { value: 'green.100' } },
    { id: '5', type: 'input', position: { x: 600, y: 0 }, data: { value: 'green.100' } },
    { id: '6', type: 'chakraAccordion', position: { x: 600, y: 300 }, data: { value: 'green.100' } },
];

export const nodeTypes = { textUpdater: TextUpdaterNode, textAnimationNode: TextAnimationNode, chakraAccordion:ChakraAccordion };