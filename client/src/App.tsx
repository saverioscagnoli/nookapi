import {
  Center,
  Button,
  Flex,
  Heading,
  IconButton,
  useColorMode,
  Box,
  VStack,
  Image,
  Icon,
  InputGroup,
  Input,
  InputLeftAddon
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { SiKofi } from "react-icons/si";
import { IoFish } from "react-icons/io5";
import { BsBugFill, BsGithub } from "react-icons/bs";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Center justifyContent="center">
      <VStack>
        <Flex mt="5rem" gap="1rem">
          <Heading as="h1">nOOk-api!</Heading>
          <Box position="relative">
            <Image id="tn" src="/tn.png" w="5rem" h="5rem" mt="-1rem" />
            <Image
              id="qm"
              src="/qm.png"
              w="1.5rem"
              h="1.5rem"
              pos="absolute"
              mt="-3rem"
              ml="1.7rem"
              zIndex="-1"
            />
          </Box>
          <Button>
            <Icon as={SiKofi} />
            &nbsp; Ko-fi
          </Button>
          <Button>
            <Icon as={BsGithub} />
            &nbsp; GitHub
          </Button>
          <IconButton
            aria-label="theme"
            icon={colorMode == "dark" ? <SunIcon /> : <MoonIcon />}
            onClick={toggleColorMode}
          />
        </Flex>
        <Flex>
          <Heading size="lg">Critters, fossils, villagers and more!</Heading>
          <Heading size="xl" mt="0.1rem" ml="1rem">
            <Icon as={IoFish} />
          </Heading>
          <Heading size="xl" mt="0.1rem" ml="0.3rem">
            <Icon as={BsBugFill} />
          </Heading>
        </Flex>
        <InputGroup>
          <InputLeftAddon
            fontWeight="semibold"
            children="https://nook-api.vercel.app/"
          />
          <Input fontWeight="semibold" type="text" value="api/data/fish/10" />
        </InputGroup>
      </VStack>
    </Center>
  );
}

export default App;
