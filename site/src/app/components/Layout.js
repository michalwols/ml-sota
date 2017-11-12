import React from 'react'

export const Row = (
  {
    children,
    align = 'flex-start',
    justify = 'flex-start',
    flex = 1,
    style
  } = {}
) =>
  <div
    style={{
      display: 'flex',
      flex,
      flexDirection: 'row',
      alignItems: align,
      justifyContent: justify,
      ...style
    }}>
    {children}
  </div>

export const Col = (
  {
    children,
    align = 'flex-start',
    justify = 'flex-start',
    flex = 1,
    style
  } = {}
) =>
  <div
    style={{
      display: 'flex',
      flex,
      flexDirection: 'column',
      alignItems: align,
      justifyContent: justify,
      ...style
    }}>
    {children}
  </div>
