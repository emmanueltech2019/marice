"use client"
import React, { ReactNode, useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/all'
import {ReactLenis, type LenisRef} from 'lenis/react'
import gsap from 'gsap'

type Props = {
    children: ReactNode
}

const SmoothScroll = ({children}: Props) => {
    const lenisRef = useRef<LenisRef>(null)

    useEffect(() => {
        function update(time: number) {
            lenisRef.current?.lenis?.raf(time * 1000)
        }

        gsap.ticker.add(update);

        return () => {
            gsap.ticker.remove(update)
        }
    }, [])
  return (
    <ReactLenis ref={lenisRef} root options={{autoRaf: false}}>{children}</ReactLenis>
  )
}

export default SmoothScroll