import React from 'react'

const Click = (props) => {
    const handle = ()=>{
        console.log('how r u')
    }
  return (
    <button onClick={handle}>Click me</button>
  )
}

export default Click