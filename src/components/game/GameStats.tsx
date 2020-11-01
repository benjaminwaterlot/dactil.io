import React from 'react'
import { Box, Circle, SlideFade, Text } from '@chakra-ui/core'
import { GameContext } from 'store/game/machine'

const GameStats = ({ context }: { context: GameContext }) => (
  <Box position="fixed" bottom="0" left="0" w="100%" backgroundColor="gray.500" p={10}>
    <Text>Erreurs: {context.errors.length}</Text>
    <Circle
      bg={context.saved.type === 'ERROR' ? 'tomato' : 'gray.700'}
      transition="background-color .2s ease-out"
      size="100px"
      pos="absolute"
      top="-50px"
      left="calc(50% - 50px)"
      fontSize="48px"
      fontWeight="bolder"
    >
      <SlideFade in={Boolean(context.saved)} key={context.saved.key}>
        {context.saved.key}
      </SlideFade>
    </Circle>
  </Box>
)

export default GameStats
