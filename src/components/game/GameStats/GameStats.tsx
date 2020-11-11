import React from 'react'
import {
  Box,
  Circle,
  SlideFade,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Wrap,
  WrapItem,
} from '@chakra-ui/core'
import { GameContext, KEY_STATUS } from 'store/game/machine.types'
import { WarningTwoIcon, ArrowRightIcon } from '@chakra-ui/icons'
import useColor from 'lib/use-color'

const CIRCLE_SIZE = 110

const GameStatsChar = ({ saved }: { saved: { type: KEY_STATUS; key: string } }) => {
  const colors = {
    bg: useColor('primary.900'),
    border: useColorModeValue('white', 'gray.800'),
  }

  return (
    <Circle
      bg={saved.type === KEY_STATUS.ERROR ? 'red.600' : colors.bg}
      color={saved.type === KEY_STATUS.ERROR ? 'white' : undefined}
      borderColor={colors.border}
      borderWidth={10}
      transition="background-color .15s ease-out"
      size={CIRCLE_SIZE}
      fontSize="5xl"
      fontWeight="bolder"
    >
      <SlideFade in={Boolean(saved)} key={saved.key}>
        {saved.key}
      </SlideFade>
    </Circle>
  )
}

const GameStatsErrors = ({ count }: { count: number }) => (
  <Stat>
    <StatLabel>
      <WarningTwoIcon mr={2} />
      Errors
    </StatLabel>
    <StatNumber>{count}</StatNumber>
    <StatHelpText>
      <StatArrow type="decrease" />
      25% more!
    </StatHelpText>
  </Stat>
)

const GameStatsWPM = ({ wpm }: { wpm: number }) => (
  <Stat>
    <StatLabel>
      <ArrowRightIcon mr={2} />
      WPM
    </StatLabel>
    <StatNumber>{wpm}</StatNumber>
    <StatHelpText>
      <StatArrow type="increase" />
      12% increase
    </StatHelpText>
  </Stat>
)

const GameStats = ({ context }: { context: GameContext }) => {
  return (
    <Box position="fixed" bottom="0" left="0" w="100%">
      <Wrap spacing={10} backgroundColor={useColor('primary.900')} p={10}>
        <WrapItem>
          <GameStatsErrors count={context.errors.length} />
        </WrapItem>
        <WrapItem>
          <GameStatsWPM wpm={context.errors.length} />
        </WrapItem>
      </Wrap>

      <Box
        position="absolute"
        top={`-${CIRCLE_SIZE * 0.7}px`}
        left={`calc(50% - ${CIRCLE_SIZE / 2}px)`}
      >
        <SlideFade in={Boolean(context.saved.key)}>
          <GameStatsChar saved={context.saved} />
        </SlideFade>
      </Box>
    </Box>
  )
}

export default GameStats
