import React from "react"
import styled from 'styled-components';
import { useEffect, useState, useContext } from "react"
import PropTypes from "prop-types"
import { List } from "./List"
import { Form } from "./Form"
import { Header } from "./Header";
import {ThemeContext} from "./contexts/ThemeContext";

const Container = styled.div`
  height: 100%;
  color: ${( { theme } ) => theme.color};
  background-color: ${( { theme } ) => theme.backgroundColor};
`

function App( {data} ) {
  App.propTypes = {
    data:PropTypes.arrayOf( PropTypes.string )
  }

  const [tab, setTab] = useState( "list" )
  const [langs, setLangs] = useState( data ) 

  const [theme] = useContext( ThemeContext )

  useEffect(
    () => {
      console.log( 'App.js useeffect' )
    }, [] )

  const addLang = ( lang ) => {
    setLangs( [...langs, lang] );
    setTab( 'list' );
  }

  return (
    <Container theme={theme}>
      <Header tab={tab} setTab={setTab}/>
      {tab === "list" ? <List langs={ langs } /> : <Form onAddLang={addLang} />}
    </Container>
  )
}

export default App
