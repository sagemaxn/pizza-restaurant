import React from 'react'
import {SimpleGrid} from '@chakra-ui/react'
import MenuItem from '../components/MenuItem'

const Menu = () => {
    return (
        <SimpleGrid columns={2} spacingX="40px" spacingY="20px">
            <MenuItem name="Cheese Pizza" price="$13" picture="img"/>
            <MenuItem name="Pepperoni Pizza" price="$13" picture="img"/>
            <MenuItem name="Meat Lovers Pizza" price="$13" picture="img"/>
            <MenuItem name="Margharitta Pizza" price="$13" picture="img"/>
        </SimpleGrid>
    )
}

export default Menu
