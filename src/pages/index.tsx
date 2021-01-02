import React, { useRef, useState, MouseEvent, useEffect } from "react"
import { Box, Heading, Stack, SimpleGrid, Text } from "@chakra-ui/core"
import styled from "@emotion/styled"
import TransitionLink, { TransitionPortal } from "gatsby-plugin-transition-link"
import gsap from 'gsap'
import { useTrail } from "react-spring"

import { breakpoints } from "../assets/theme"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Cursor from '../components/cursor'
import Feature from "../components/feature"

const fast = { mass: 4, tension: 400, friction: 40 }

const data = [
  {
    title: `St Mary\nSt Vincent`,
    seasons: [[2000, 2001, 2002]],
    colors: ['#47504d', '#cdae8f'],
  },
  {
    title: `Cleveland\nCavaliers`,
    seasons: [
      [2003, 2004, 2005, 2006, 2007, 2008, 2009],
      [2014, 2015, 2016, 2017],
    ],
    colors: ['#7f1515', '#f09f07'],
  },
  {
    title: `Miami\nHeats`,
    seasons: [[2010, 2011, 2012, 2013]],
    colors: ['#9f131c', '#040003'],
  },
  {
    title: `Los Angeles\nLakers`,
    seasons: [[2018, 2019]],
    colors: ['#714eaa', '#ffe641'],
  },
]

const AbsoluteBox = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const Clip = styled(AbsoluteBox)`
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: clip-path .4s;
  clip-path: ${(props: any) => props.current === 1
    ? `polygon(0% 0%, 100% 0%, 100% 25%, 0% 25%)`
    : props.current === 2
      ? `polygon(0% 25%, 100% 25%, 100% 50%, 0% 50%)`
      : props.current === 3
        ? `polygon(0% 50%, 100% 50%, 100% 75%, 0% 75%)` 
        : props.current === 4 
          ? `polygon(0% 75%, 100% 75%, 100% 100%, 0% 100%)`
          : `polygon( 0% 0%, 0% 0%, 0% 100%, 0% 100% )`};

  @media screen and (min-width: ${breakpoints[1]}) {
    transition: clip-path 0s;
    clip-path: ${(props: any) => props.current === 1
        ? `polygon(50% 50%, 0% 50%, 0% 0%, 50% 0%)`
        : props.current === 2
          ? `polygon(50% 50%, 50% 0%, 100% 0%, 100% 50%)`
          : props.current === 3
            ? `polygon(0% 50%, 50% 50%, 50% 100%, 0% 100%)` 
            : props.current === 4 
              ? `polygon(100% 100%, 100% 50%, 50% 50%, 50% 100%)`
              : `polygon( 0% 0%, 0% 0%, 0% 100%, 0% 100% )`};
  }

  @media screen and (min-width: ${breakpoints[3]}) {
    transition: clip-path .4s;
    clip-path: ${(props: any) => props.current !== 0 
      ? `polygon(
        ${25 * (props.current - 1)}% 0%,
        ${props.current * 25}% 0%,
        ${props.current * 25}% 100%,
        ${25 * (props.current - 1)}% 100%
      )`
      : `polygon( 0% 0%, 0% 0%, 0% 100%, 0% 100% )`};
  }
`

const IndexPage = () => {
  const [trail, set] = useTrail<{ xy: number[] }>(1, () => ({ xy: [0, 0], config: () => fast }))
  const [hover, setHover] = useState(0)
  const [hideCursor, setHideCursor] = useState(true)
  const transitionCover = useRef(null)
  const layoutContents = useRef(null)

  useEffect(() => {
    setHideCursor(false)
  }, [])

  const test = (node) => {
    return gsap.from(
      node.querySelectorAll('h1, p, a, pre'),
      { 
        opacity: 0, 
        y: '+=50',
        duration: 1,
        stagger: 0.1,
      },
    )
  }

  const verticalAnimation = ({ length }, direction) => {
    const directionTo = direction === 'up' ? '-100%' : '100%'
    const directionFrom = direction === 'up' ? '100%' : '-100%'

    // convert ms to s for gsap
    const seconds = length

    return gsap.timeline()
      .set(transitionCover.current, { y: directionFrom })
      .to(transitionCover.current, {
        y: '0%',
        ease: "power1.easeInOut",
        duration: seconds / 2,
      })
      .set(layoutContents.current, { opacity: 0 })
      .to(transitionCover.current, {
        y: directionTo,
        ease: "power1.easeIn",
        duration: seconds / 2,
      })
  }

  return (
    <Layout>
      {trail.map((props, index) => (
        <Cursor key={index} xy={props.xy} opacity={hideCursor ? 0 : 0.6} />
      ))}
      <SEO title="Home" />

      <Box
        ref={layoutContents}
        position="relative"
        minH="100vh"
        display="flex"
        alignItems="stretch"
        onMouseMove={(e: MouseEvent) => set({ xy: [e.clientX, e.clientY] })}
      >
        <AbsoluteBox>
          <AbsoluteBox>
            <AbsoluteBox
              opacity={0.8}
              backgroundImage={`url('/images/welcome.jpg')`}
              backgroundPosition="top center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
            />
            <Clip
              overflow="hidden"
              backgroundColor="black"
              current={hover}
            >
              <AbsoluteBox
                backgroundImage="url('/images/welcome.jpg')"
                backgroundPosition="top center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                opacity={0.4}
                transform="scale(1.05)"
              />
            </Clip>
          </AbsoluteBox>
        </AbsoluteBox>

        <SimpleGrid
          columns={[1, 1, 2, 2, 4]}
          spacing={0}
          position="relative"
          zIndex={2}
          width="100%"
        >
          {data.map((item, index) => (
            <Feature
              key={index}
              {...item}
              onMouseEnter={() => index + 1 !== hover && setHover(index + 1)}
              exit={{
                length: 1,
                trigger: ({ exit }) => {
                  verticalAnimation(exit, 'down')
                  setHideCursor(true)
                },
                state: { test: 'exit state' },
              }}
              entry={{
                delay: 0.5,
                trigger: ({ entry, node }) => test(node),
              }}
              to="/page-2/"
            />
          ))}
        </SimpleGrid>
      </Box>

      <TransitionPortal>
        <Box
          ref={transitionCover}
          position="fixed"
          background="#000"
          top={0}
          left={0}
          width="100vw"
          height="100vh"
          transform="translateY(100%)"
        />
      </TransitionPortal>
    </Layout>
  )
}

export default IndexPage
