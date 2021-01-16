import styled from "styled-components";
import React from "react"
import { useEffect } from 'react'
import PropTypes from "prop-types"
import { TabBodyContainer } from './components/tab-body-container';


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
    <TabBodyContainer title="言語リスト">
      <div>
        {
          langs && langs.map( ( lang, index ) => {
            return <ListItem key={index}>{ lang }</ListItem>
          } )
        }
      </div>
    </TabBodyContainer>
  )
}
