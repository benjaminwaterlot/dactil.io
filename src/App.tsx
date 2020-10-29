import React from 'react'
import {
  Box,
  Flex,
  Button,
  Heading,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  useColorMode,
} from '@chakra-ui/core'

function App() {
  const { toggleColorMode } = useColorMode()

  return (
    <div>
      <Flex as="header" py={12} px={6} direction="column" align="center">
        <Heading size="2xl" as="h1">
          Dactil.io
        </Heading>

        <Box mt={200} p={10} bg="gray.900" borderRadius={5} w={['100%', '50%']} textAlign="center">
          <Text fontFamily="mono" fontSize="lg" my={5} color="gray.600">
            The spectacle before us was indeed sublime.
          </Text>
          <Flex minH="60px" d="flex" flexDirection="column" justifyContent="center">
            <Text fontFamily="mono" fontSize="xl">
              <Box as="span" bg="gray.200" color="gray.800">
                T
              </Box>
              he spectacle before us was indeed sublime.
            </Text>
          </Flex>
          <Text fontFamily="mono" fontSize="lg" my={5} color="gray.600">
            The spectacle before us was indeed sublime.
          </Text>
        </Box>

        <Popover trigger="hover">
          <PopoverTrigger>
            <Text mt={200}>Test my popover!</Text>
          </PopoverTrigger>

          <PopoverContent>
            <PopoverArrow />
            <PopoverBody>Heyyy</PopoverBody>
          </PopoverContent>
        </Popover>

        <Button onClick={toggleColorMode} mt={20}>
          Toggle color
        </Button>
      </Flex>
    </div>
  )
}

export default App
