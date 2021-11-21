import React from 'react'
import { Container } from '@chakra-ui/react'
import Link from 'next/link'

const index = () => {
    return (
        <Container>
            <Link href="/menu/pizza">pizza</Link>
        </Container>
    )
}

export default index
