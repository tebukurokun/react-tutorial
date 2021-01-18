import styled from "styled-components";
import React from "react"
import { useEffect } from 'react'
import { TabBodyContainer } from './components/tab-body-container';


const ListItem = styled.div`
  padding: 8px 16px;

  &:nth-child(n+2) {
    border-top: 1px solid #D9DBDE;
  }
`

export const List = ( { langs }: {langs: Array<string>} ): JSX.Element => {

  useEffect( () => {
    console.log( 'list useeffect' )
    return () => {
      console.log( 'list unmount' );
    }
  } )

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
