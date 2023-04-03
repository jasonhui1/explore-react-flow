import { Box, Button, Card, Flex, Heading, Text } from '@chakra-ui/react';
import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';

const handleStyle = { left: 10 };

export default function TextAnimationNode({ data }: any) {
    // const onChange = useCallback((evt: any) => {
    //     console.log(evt.target.value);
    // }, []);

    const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nesciunt voluptatem magnam ipsa voluptas, reprehenderit est unde quod dolor laudantium beatae sunt excepturi ipsum doloremque dolorem commodi suscipit sint! Nihil!'

    return (
        <>
            <Handle type="target" position={Position.Top} />
            <Box maxW='50ch' h='500px' bg='blue.200' role="group">
                {text.split(" ").map((word, index) => (

                    <Text as='span' key={index}
                        display='inline-block' m='0vmin 0.3vmin'
                        transform='translateY(40%)' opacity='0' transition='none'
                        _groupHover={{ transform: 'translateY(0%)', opacity: '1', transition: '200ms' }}
                        style={{ 'transitionDelay': `${index * 100}ms` }}
                    >
                        {word}
                    </Text>
                ))}
                <Text>https://www.youtube.com/watch?v=joDhIH6Xumw&list=LL&index=1&ab_channel=Hyperplexed</Text>

            </Box>
            <Handle type="source" position={Position.Bottom} id="a" />
        </>
    );
}