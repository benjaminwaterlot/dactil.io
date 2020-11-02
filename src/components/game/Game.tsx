import React from 'react'
import { Box } from '@chakra-ui/core'
import useColor from 'lib/use-color'

import GameContent from './GameContent'
import GameLoading from './GameLoading'

const Game = () => (
  <Box
    mt="10vh"
    p={10}
    bg={useColor('primary.900')}
    borderRadius={5}
    w={['100%', '80%', '70%']}
    fontFamily="mono"
    fontSize="2xl"
  >
    <React.Suspense fallback={<GameLoading />}>
      <GameContent />
    </React.Suspense>
  </Box>
)

export default Game
