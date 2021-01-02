import React, { useState } from "react"
import {
  AspectRatioBox,
  Box,
  Flex,
  Heading,
  List,
  ListItem,
  Select,
  Stack,
  SimpleGrid,
  Text
} from "@chakra-ui/core"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import theme from '../assets/theme'
import SelectArrowSvg from '../components/SelectArrowSvg'

import Layout from "../components/layout"
import SEO from "../components/seo"

const data = [
  {
    cover: 'lebron-james_2019_01.jpg',
    date: 'Tue, Oct 27, 2009',
    teams: ['Cavaliers', 'Celtics'],
    score: [89, 95],
    link: [
      {
        title: 'Cavaliers vs Celtics',
        url: 'https://www.youtube.com/watch?v=vaEdn4M89cU',
      }
    ],
  },
  {
    cover: 'lebron-james_2019_02.jpg',
    date: 'Wed, Oct 28, 2009',
    teams: ['Raptors', 'Cavaliers'],
    score: [101, 91],
    link: [
      {
        title: 'Raptors vs Cavaliers',
        url: 'https://www.youtube.com/watch?v=7FBe8IwXUCQ',
      }
    ],
  },
  {
    cover: 'lebron-james_2019_01.jpg',
    date: 'Fri, Oct 30, 2009',
    teams: ['Timberwolves', 'Cavaliers'],
    score: [87, 104],
    link: [],
  }
]

const MenuLink = styled(Box)`
  cursor: pointer;
  opacity: 0.6;
  transition: opacity .2s ease;
  &:hover {
    opacity: 1;
  }
`

const SelectYear = styled(Select)`
  + div {
    position: absolute;
    right: 100%;
  }
  &:hover {
    background-color: ${theme.colors.black}
  }
`

const SelectIcon = styled(SelectArrowSvg)`

`

const GameList = styled(List)`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: ${(props: { current: number }) => `calc(${100 / data.length * props.current}% + 3px)`};
    left: 0;
    display: block;
    width: 2px;
    height: calc(${100 / data.length}% - 6px - ${theme.space[4]});
    border-radius: 1px;
    background-color: #FFF;
    transition: top .2s ease;
  }
`

const GameItem = styled(ListItem)`
  cursor: pointer;
  opacity: ${(props: { isCurrent: boolean }) => props.isCurrent ? 1 : 0.6};
  transition: opacity .2s ease;

  &:hover {
    opacity: 1;
  }
`

const SecondPage = () => {
  const [game, setGame] = useState<number>(0) // game index

  return (
    <Layout>
      <SEO title="Page two" />
      <Flex
        direction="column"
        height="100vh"
        px={['8.125rem']}
      >
        <Box
          // position="fixed"
          py={['3.5rem']}
        >
          <Stack isInline spacing="1.75rem">
            <Heading
              as="h1"
              fontSize="6xl"
              fontWeight="extrabold"
              textTransform="uppercase"
              whiteSpace="pre-wrap"
              lineHeight={0.95}
            >
              <Box as="span">LeBron</Box><br/>
              <Box as="span" letterSpacing={1.1}>James</Box>
            </Heading>
            <Box
              opacity={0.5}
              maxW="28.25rem"
              pt={1}
              fontWeight="light"
              lineHeight={1.43}
              whiteSpace="pre-wrap"
            >
              {`3x NBA champion 3x NBA Finals MVP 4x NBA MVP \n16x NBA All-Star 3x NBA All-Star Game MVP \n12x All-NBA First Team 5x NBA All-Defensive First Team \n1x NBA scoring champion NBA Rookie of the Year`} 
            </Box>
          </Stack>
        </Box>
        <Flex
          flex={1}
          minHeight={0}
          pt={12}
        >
          <Flex flexDirection="column">
            <List
              flex={0}
            >
              <ListItem>
                <SelectYear
                  variant="filled"
                  icon={SelectIcon}
                  pl={0}
                  backgroundColor="black"
                  focusBorderColor="black"
                  color="white"
                  fontFamily="serif"
                  fontSize="xl"
                  placeholder="Select option"
                >
                  <option value="option1" selected>2003 / 2004</option>
                  <option value="option2">2004 / 2005</option>
                  <option value="option3">2005 / 2006</option>
                </SelectYear>
              </ListItem>
              <ListItem>
                <MenuLink
                  as={Link}
                  color="white"
                  fontFamily="serif"
                  fontSize="xl"
                >
                  Previous
                </MenuLink>
              </ListItem>
              <ListItem>
                <MenuLink
                  as={Link}
                  color="white"
                  fontFamily="serif"
                  fontSize="xl"
                >
                  Next
                </MenuLink>
              </ListItem>
            </List>
            <List
              flex={1}
              pt={6}
            >
              <ListItem>
                <MenuLink
                  as={Link}
                  color="white"
                  fontFamily="serif"
                  fontSize="xl"
                >
                  Summer
                </MenuLink>
              </ListItem>
              <ListItem>
                <MenuLink
                  as={Link}
                  color="white"
                  fontFamily="serif"
                  fontSize="xl"
                >
                  October
                </MenuLink>
              </ListItem>
              <ListItem>
                <MenuLink
                  as={Link}
                  color="white"
                  fontFamily="serif"
                  fontSize="xl"
                >
                  November
                </MenuLink>
              </ListItem>
            </List>
          </Flex>
          <Box
            flex={1}
          >
            <Flex justifyContent="center" pr={40}>
              <Box flex="0 0 70%">
                <AspectRatioBox
                  ratio={960 / 540}
                  margin="0 auto"
                >
                  <Box
                    opacity={0.4}
                    position="absolute"
                    top={0}
                    left={0}
                    width="100%"
                    height="100%"
                    backgroundImage={`url('/images/${data[game].cover}')`}
                    backgroundSize="cover"
                  />
                  {/* <Box
                    as="iframe"
                    title="naruto"
                    // @ts-ignore 
                    src="https://www.youtube.com/embed/QhBnZ6NPOY0"
                    allowFullScreen
                    width="100%"
                    height="100%"
                  /> */}
                </AspectRatioBox>
              </Box>
              <Box position="relative">
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  height="100%"
                  overflow="hidden"
                >
                  <GameList
                    flex={1}
                    pl={5}
                    ml={16}
                    current={game}
                  >
                    {data.map((item, index) => (
                      <GameItem
                        key={index}
                        pb={4}
                        onClick={() => setGame(index)}
                        isCurrent={game === index}
                      >
                        <Heading
                          as="div"
                          fontWeight="medium"
                        >
                          <Box fontSize="md">{item.date}</Box>
                          <Box fontSize="xl" whiteSpace="nowrap">
                            {item.teams[0]}
                            <Box as="span" fontSize="md"> vs </Box>
                            {item.teams[1]}
                          </Box>
                        </Heading>
                      </GameItem>
                    ))}
                  </GameList>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Layout>
  )
}

export default SecondPage
