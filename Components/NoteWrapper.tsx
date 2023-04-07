import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

interface NoteProp{
    children:React.ReactNode
}


export default function NoteWrapper({children}:NoteProp) {
    return (
        <Box my='5'>
            <Heading as='h3' size='lg'>Note</Heading>
            {children}
        </Box>

    )
}


