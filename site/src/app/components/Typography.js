import React from 'react'

export const Heading = ({ children }) =>
  <h1
    style={{
      fontSize: 18,
      lineHeight: '1.2em',
      margin: '2px 0',
      maxWidth: '200ch'
    }}>
    {children}
  </h1>

export const Subtitle = ({ children, style }) =>
  <p
    style={{
      fontSize: 12,
      color: '#AAA',
      maxWidth: '80ch',
      lineHeight: '1.3em',
      fontFamily: 'sans-serif',
      marginBottom: '1.2em',
      ...style
    }}>
    {children}
  </p>


export const Name = ({ children }) =>
  <sub style={{
      fontSize: 10,
      color: '#888',
      maxWidth: '200ch',
    lineHeight: '1.3em',
      fontFamily: 'sans-serif',
      margin: '0 6px 0 0'
    }}>{children}</sub>