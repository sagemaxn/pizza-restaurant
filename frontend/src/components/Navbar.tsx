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
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FiBell } from "react-icons/fi";

import CartButton from "./CartButton";

export function Navbar() {
  return (
    <Flex
      background="white"
      flexDirection="row"
      justify={"space-between"}
      top="0"
      width="100%"
      minH={"60px"}
      py={{ base: 2 }}
      px={{ base: 4 }}

      //align={'center'}
    >
      <Stack flex={{ base: 1, md: 0 }} direction={"row"} spacing={10}>
        <Link href="/">
          <Text>Joe's Pizza</Text>
        </Link>

        <Menu>
          <MenuButton>
            <Flex>Menu <FiChevronDown /> </Flex>
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
      <CartButton />
    </Flex>
  );
}
