import { Box, Button, Card, Flex, Heading } from '@chakra-ui/react';
import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';

const handleStyle = { left: 10 };

export default function TextUpdaterNode({ data }: any) {
    const onChange = useCallback((evt: any) => {
        console.log(evt.target.value);
    }, []);

    return (
        <>
            <Handle type="target" position={Position.Top} />
            <div>
                <label htmlFor="text">Text:</label>
                <input id="text" name="text" onChange={onChange} className="nodrag" />
            </div>
            <Card>
                <Flex>
                    <Box>
                        <Heading>HELLLEOOOEOE</Heading>
                        <Button bg={data.value}>CLICK MMEMEEMEMEMMEME</Button>
                    </Box>
                </Flex>
            </Card>
            <Handle type="source" position={Position.Bottom} id="a" />
            <Handle type="source" position={Position.Bottom} id="b" style={handleStyle} />
        </>
    );
}