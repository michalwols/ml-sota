import React from 'react'

const Tag = ({ name }) =>
  <span
    style={{
      border: '1px solid #EAEAEA',
      backgroundColor: '#EEE',
      color: '#666',
      margin: '0 4px 0 0',
      padding: '3px 7px',
      fontSize: 10,
      fontFamily: 'sans-serif',
      fontWeight: 'bold',
      borderRadius: 7
    }}>
    {name}
  </span>

export default Tag
