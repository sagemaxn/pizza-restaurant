import React from 'react'
import renderer from 'react-test-renderer'
import Index from '../src/pages/index'
import { ChakraProvider } from "@chakra-ui/react"

it('renders homepage unchanged', () => {
  const tree = renderer.create(<ChakraProvider><Index /></ChakraProvider>).toJSON()
  expect(tree).toMatchSnapshot()
})