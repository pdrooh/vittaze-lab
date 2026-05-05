'use client'

import { useRef, ReactNode } from 'react'
import { motion, useInView, Variants } from 'framer-motion'

interface FadeInProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  duration?: number
  className?: string
  once?: boolean
  amount?: number
}

const directionMap: Record<string, { x?: number; y?: number }> = {
  up:    { y: 30 },
  down:  { y: -30 },
  left:  { x: 30 },
  right: { x: -30 },
  none:  {},
}

export default function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.65,
  className = '',
  once = true,
  amount = 0.15,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once, amount })
  const { x = 0, y = 0 } = directionMap[direction]

  const variants: Variants = {
    hidden: { opacity: 0, x, y },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ──────────────────────────────────────────────────────────────
   StaggerGroup — wraps children with a stagger effect
   ────────────────────────────────────────────────────────────── */
interface StaggerProps {
  children: ReactNode
  stagger?: number
  delayChildren?: number
  className?: string
  amount?: number
}

export function StaggerGroup({
  children,
  stagger = 0.1,
  delayChildren = 0,
  className = '',
  amount = 0.1,
}: StaggerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount })

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: stagger,
        delayChildren,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ──────────────────────────────────────────────────────────────
   StaggerItem — child of StaggerGroup
   ────────────────────────────────────────────────────────────── */
export function StaggerItem({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  const item: Variants = {
    hidden: { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  )
}
