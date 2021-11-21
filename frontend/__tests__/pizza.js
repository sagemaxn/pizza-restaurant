import React from 'react'
import renderer from 'react-test-renderer'
import Pizza from '../src/pages/menu/pizza'
import { ChakraProvider } from "@chakra-ui/react"

it('renders homepage unchanged', () => {
  const tree = renderer.create(<ChakraProvider><Pizza /></ChakraProvider>).toJSON()
  expect(tree).toMatchSnapshot()
})