import { HStack, Hide, Switch, Text, useColorMode } from '@chakra-ui/react'

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode()

  return (
    <HStack>
      <Switch
        colorScheme="blue"
        isChecked={colorMode === 'dark'}
        onChange={toggleColorMode}
      />
      <Hide below="sm">
        <Text whiteSpace="nowrap">Change Mode</Text>
      </Hide>
    </HStack>
  )
}

export default ColorModeSwitch
