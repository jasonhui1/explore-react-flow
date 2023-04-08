import { Box, Button, Card, Flex, Heading } from '@chakra-ui/react';
import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';
import { AspectRatio } from '@chakra-ui/react'

const handleStyle = { left: 10 };

export default function TextUpdaterNode({ data }: any) {
    const onChange = useCallback((evt: any) => {
        console.log(evt.target.value);
    }, []);

    return (
        <>
            <Handle type="target" position={Position.Top} />


            <Card style={{ aspectRatio: '1/1.6' }} border='1px' borderColor='blue.500' >
                <Box bgGradient="radial(pink.200, gray.100) "
                    backgroundSize='5vmin 5vmin'
                    backgroundPosition="0 0" 
                    opacity='0.2'
                    w='full' h='full' position='absolute'></Box>
                <Flex dir='col'>
                    <Box>
                        <Heading>HELLLEOOOEOEEEEEEEEEEEE</Heading>
                        <Button bg={data.value}>CLICK MMEMEEMEMEMMEME</Button>
                        <Heading>NARUTOOO</Heading>

                    </Box>
                </Flex>
            </Card>
            <Handle type="source" position={Position.Bottom} id="a" />
            <Handle type="source" position={Position.Bottom} id="b" style={handleStyle} />
        </>
    );
}