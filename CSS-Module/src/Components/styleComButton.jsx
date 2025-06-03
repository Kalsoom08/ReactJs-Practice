import React from 'react'
import styled from 'styled-components';

const styleComButton = () => {
    const Button = styled.button`
    background-color : ${(props)=>(props.danger ? 'red': 'cadetblue')}
    `
  return (
    <div>
        <Button danger>Danger</Button>
        <Button>Normal</Button>
    </div>
  )
}

export default styleComButton