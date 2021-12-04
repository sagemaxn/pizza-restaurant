import Link from "next/link";
import {
  Flex,
  Stack,
  Menu,
  MenuButton,
  Button,
  Text,
  MenuIcon,
} from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";

import {
  IconButton,
  Avatar,
  Box,
  HStack,
  VStack,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FiBell } from "react-icons/fi";

import PreviewCart from "./PreviewCart";

export function Navbar() {
  return (
    <Flex
      flexDirection="row"
      justify={"space-between"}
      top="0"
      width="100%"
      minH={"60px"}
      py={{ base: 2 }}
      px={{ base: 4 }}
      borderBottom={0.4}
      borderStyle={"solid"}
      borderColor={"grey"}
      //align={'center'}
    >
      <Stack flex={{ base: 1, md: 0 }} direction={"row"} spacing={10}>
        <Link href="/">
          <Text>Joe's Pizza</Text>
        </Link>

        <Menu>
          <MenuButton>
            Menu <FiChevronDown />
          </MenuButton>
          <MenuList>
            <Link href='/pizza'>
            <MenuItem>Pizza</MenuItem>
            </Link>
            <Link href='/sides'>
            <MenuItem>Sides</MenuItem>
            </Link>
            <Link href='/drinks'>
            <MenuItem>Drinks</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Stack>
      <PreviewCart />
    </Flex>
  );
}
