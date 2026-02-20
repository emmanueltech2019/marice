import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode
    className?: string
}

const GlobalContainer = ({children, className}: Props) => {
  return (
    <div className={`md:px-30 px-5 ${className}`}>{children}</div>
  )
}

export default GlobalContainer