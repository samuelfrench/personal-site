import React, { useRef, useState} from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import Box from '../components/box'

function Garden() {
	return (
	<div>
		<div>Welcome to Sam's Cactus Garden</div>
		<Canvas>
		    <ambientLight />
		    <pointLight position={[10, 10, 10]} />
		    <Box position={[-1.2, 0, 0]} />
		    <Box position={[1.2, 0, 0]} />
	  	</Canvas>
  	</div>
)}

export default Garden