import React from 'react'
import styled from '@emotion/styled'
import { animated } from 'react-spring'

const trans = (x, y) => `translate3d(${x}px, ${y}px, 0) translate3d(-50%, -50%, 0)`

const CursorEl = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  will-change: transform;
  width: 3rem;
  height: 3rem;
  border: 1px solid white;
  border-radius: 50%;
  background: transparent;
  pointer-events: none;
`
const AnimatedCursor = animated(CursorEl)

const Cursor = ({ xy, opacity }) => (
  <AnimatedCursor style={{ transform: xy.interpolate(trans), opacity }} />
)

export default Cursor
