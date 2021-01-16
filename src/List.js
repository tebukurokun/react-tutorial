import styled from "styled-components";
import React from "react"
import { useEffect } from 'react'
import PropTypes from "prop-types"

const Container = styled.div`
  padding: 12px 64px;
`
const ListItem = styled.div`
  padding: 8px 16px;

  &:nth-child(n+2) {
    border-top: 1px solid #D9DBDE;
  }
`

export const List = ( { langs } ) => {

  useEffect( () => {
    console.log( 'list useeffect' )

    return () => {
      console.log( 'list unmount' );
    }
  } )

  List.propTypes = {
    langs:PropTypes.arrayOf( PropTypes.string )
  }

  return (
    <Container>
      {
        langs && langs.map( ( lang, index ) => {
          return <ListItem key={index}>{ lang }</ListItem>
        } )
      }
    </Container>
  )
}
