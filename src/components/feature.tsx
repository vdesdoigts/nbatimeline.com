import React from "react"
import { Box, Heading, Stack, Text } from "@chakra-ui/core"
import styled from "@emotion/styled"
import TransitionLink from "gatsby-plugin-transition-link"

const Meta = styled(Text)`
  opacity: 0;
  transition: opacity .3s ease;
`

const Link = styled(TransitionLink)`
  position: relative;
  display: flex;
  flex: 1;
  align-items: flex-end;
  cursor: none;
  &:hover ${Meta} {
    opacity: 1;
  }
`

interface IProps extends React.ComponentProps<typeof TransitionLink> {
  title: string
  seasons: number[][]
}

const Feature = ({ title, seasons, ...props }: IProps) => {

  return (
    <Link {...props}>
      <Box px={12} py={6}>
        <Meta
          display="block"
          color="white"
          fontFamily="serif"
          fontSize="xl"
        >
          Explore this journey
        </Meta>
        <Heading
          as="h2"
          color="white"
          fontSize="5xl"
          fontWeight="extrabold"
          lineHeight="none"
          textTransform="uppercase"
          whiteSpace="pre-wrap"
        >
          {title} 
        </Heading>
        <Box pt={2}>
          <Stack
            isInline
            spacing={8}
          >
            {seasons.map((season, index) => (
              <Box key={index}>
                <Text
                  display="block"
                  color="white"
                  fontFamily="serif"
                  fontSize="xl"
                >
                  {season[0]} - {season[season.length - 1] + 1}
                </Text>
              </Box>
            ))}
          </Stack>
        </Box>
      </Box>
    </Link>
  );
}

export default Feature
