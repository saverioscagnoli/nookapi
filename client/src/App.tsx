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
  InputLeftAddon,
  InputRightElement,
  Text,
  ListItem,
  UnorderedList,
  Link,
  Stack,
  Checkbox,
  Spinner
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { SiKofi } from "react-icons/si";
import { IoFish } from "react-icons/io5";
import { BsBugFill, BsGithub } from "react-icons/bs";
import { useEffect, useState } from "react";
import ReactJson, { ThemeKeys } from "react-json-view";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [json, setJson] = useState();
  const [loading, setLoading] = useState<boolean>(false);
  const [theme, setTheme] = useState<ThemeKeys>("twilight");
  const [img, setImg] = useState<string>();
  const [reqBg, setReqBg] = useState<string>("#1E1E1E");

  const KOFI_LINK = "https://ko-fi.com/saverioscagnoli";
  const GIT_LINK = "https://github.com/saverioscagnoli/nOOk-api";
  const API_URL = "https://nook-api.vercel.app/api/";
  const EXPRESS_LINK = "https://www.npmjs.com/package/express";
  const ACNHAPI_LINK = "http://acnhapi.com/";
  const SPREADSHEET_LINK =
    "https://docs.google.com/spreadsheets/d/13d_LAJPlxMa_DubPTuirkIV4DERBMXbrWQsmSh8ReK4/";
  const WIKI_LINK =
    "https://en.wikipedia.org/wiki/Animal_Crossing:_New_Horizons";

  useEffect(() => {
    onFetch(API_URL + "data/fish/10");
  }, []);

  const onFetch = async (url: string) => {
    setLoading(true);
    const endpoint = url.split("/")[4];
    if (endpoint == "render" || endpoint == "icon") {
      const req = await fetch(url);
      const blob = await req.blob();
      setLoading(false);
      setImg(URL.createObjectURL(blob));
    } else {
      const req = await fetch(url);
      const data = await req.json();
      setLoading(false);
      setJson(data);
      setImg(null);
    }
  };

  const rng = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const random = [rng(1, 80), rng(1, 80), rng(1, 40)];
  const input = document.getElementById("reqBox") as HTMLInputElement;

  return (
    <Center justifyContent="center">
      <VStack gap="0.7rem">
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
          <a href={KOFI_LINK} target="_blank">
            <Button colorScheme="red">
              <Icon as={SiKofi} />
              &nbsp; Ko-fi
            </Button>
          </a>
          <a href={GIT_LINK} target="_blank">
            <Button>
              <Icon as={BsGithub} />
              &nbsp; GitHub
            </Button>
          </a>
          <IconButton
            aria-label="theme"
            icon={colorMode == "dark" ? <SunIcon /> : <MoonIcon />}
            onClick={() => {
              toggleColorMode();
              setTheme(colorMode == "dark" ? "rjv-default" : "twilight");
              setReqBg(
                colorMode == "dark" ? "rgba(128, 128, 128, 0.1)" : "#1E1E1E"
              );
            }}
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
          <InputLeftAddon fontWeight="semibold" children={API_URL} />
          <Input
            id="reqBox"
            fontWeight="semibold"
            type="text"
            defaultValue="data/fish/10"
          />
          <InputRightElement w="5rem">
            <Button
              size="md"
              h="1.9rem"
              onClick={async () => {
                await onFetch(API_URL + input.value);
              }}
            >
              fetch
            </Button>
          </InputRightElement>
        </InputGroup>
        <Box w="40rem" textAlign="left" fontWeight="semibold">
          <Text>Try with:</Text>
          <UnorderedList>
            <ListItem>
              <Link
                color="cyan.400"
                onClick={async () => {
                  await onFetch(API_URL + "data/bug/" + random[0]);
                  input.value = "data/bug/" + random[0];
                }}
              >
                data/bug/{random[0]}
              </Link>
            </ListItem>
            <ListItem>
              <Link
                color="cyan.400"
                onClick={async () => {
                  await onFetch(API_URL + "render/fish/" + random[1]);
                  input.value = "render/fish/" + random[1];
                }}
              >
                render/fish/{random[1]}
              </Link>
            </ListItem>
            <ListItem>
              <Link
                color="cyan.400"
                onClick={async () => {
                  await onFetch(API_URL + "icon/sea-creature/" + random[2]);
                  input.value = "icon/sea-creature/" + random[2];
                }}
              >
                icon/sea-creature/{random[2]}
              </Link>
            </ListItem>
          </UnorderedList>
        </Box>
        <Box
          pos="relative"
          w="40rem"
          h="30rem"
          bg={reqBg}
          borderRadius="5"
          overflowY="scroll"
        >
          {loading ? (
            <Center>
              <VStack>
                <Spinner />
              </VStack>
            </Center>
          ) : img ? (
            <Center
              position="absolute"
              top={0}
              right={0}
              left={0}
              bottom={0}
              margin="auto"
            >
              <Image src={img} />
            </Center>
          ) : (
            <ReactJson src={json} displayDataTypes={false} theme={theme} />
          )}
        </Box>
        <Box w="40rem" textAlign="left" fontWeight="semibold">
          <Text>
            This is a RESTful API which can provide data from{" "}
            <Link color="cyan.400" href={WIKI_LINK} target="_blank">
              Animal Crossing: New Horizons
            </Link>
            , made in TypeScript with NodeJS and{" "}
            <Link color="cyan.400" href={EXPRESS_LINK} target="_blank">
              express
            </Link>
            .
          </Text>
          <br />
          <Text>This API contains data of:</Text>
          <Flex>
            <Checkbox isDisabled isChecked />
            <Text> &nbsp; Fishes 🐟</Text>
          </Flex>
          <Flex>
            <Checkbox isDisabled isChecked />
            <Text> &nbsp; Bugs 🪲</Text>
          </Flex>
          <Flex>
            <Checkbox isDisabled isChecked />
            <Text> &nbsp; Sea Creatures 🦀</Text>
          </Flex>
          <Flex>
            <Checkbox isDisabled />
            <Text> &nbsp; Villagers 🐰</Text>
          </Flex>
          <Flex>
            <Checkbox isDisabled />
            <Text> &nbsp; Fossils 🦖</Text>
          </Flex>
          <br />
          <Text>
            All characters, assets and content is trademark of Nintendo.
          </Text>
          <br />
          <Text>
            This API provides data in a JSON format, images for renders and
            icons, and mp3 for songs (hourly music or K.K.) <br />
            Please contact via Discord (Saverio#0239) if you have any questions.
            <br />
            This is an unoffical API and does not intend on claim/steal any
            intellectual properties created/owned by Ninendo.
            <br />
            <br />
            Other projects you can check out:
            <UnorderedList>
              <ListItem>
                <Link color="cyan.400" href={ACNHAPI_LINK} target="_blank">
                  ACNH API (inspired me to make this)
                </Link>
              </ListItem>
              <ListItem>
                <Link color="cyan.400" href={SPREADSHEET_LINK} target="_blank">
                  Data Spreadsheet for Animal Crossing: New Horizons
                </Link>
              </ListItem>
            </UnorderedList>
          </Text>
          <br />
          <br />
          <Text>NOTE: this is an experimental API!</Text>
        </Box>
      </VStack>
    </Center>
  );
}

export default App;
