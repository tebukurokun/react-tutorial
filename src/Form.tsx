import React from "react"
import {useState} from 'react'
import styled from "styled-components";
import { Button } from './components/button'
import { TabBodyContainer } from './components/tab-body-container';
import { FormModal } from "./FormModal";
import { Hint } from "./Hint";

const Label = styled.label`
display: flex;
color: #757575;
font-size: 14px;
font-weight: bold;
`

const Input = styled.input`
border-radius: 3px;
padding: 4px 8px;
border: 1px solid black;
`

const ButtonContainer = styled.div`
margin-top: 24px;
`

const FormButton = styled( Button )`
width: 120px;
`

export const Form = ( { onAddLang }:{onAddLang: ( arg: string )=>void} ): JSX.Element => {

  const [text, setText] = useState( '' )
  const [showModal, setShowModal] = useState( false )
  
  const submitForm = ( event : React.FormEvent<HTMLFormElement> ) => {
    event.preventDefault()
    console.log( text );
    setShowModal( true )
  } 
  
  return (
    <TabBodyContainer title="新しい言語の追加">
      <form onSubmit={submitForm}>
        <div>
          <Label>言語</Label>
          <Input 
            type="text" 
            value={text} 
            onChange={ ( e ) => setText( e.target.value ) } 
            autoFocus 
          />
          <Hint message="言語の名前です" />
        </div>
        <ButtonContainer>
          <FormButton>追加</FormButton>
        </ButtonContainer>
        {
          showModal && 
        <FormModal confirm={() => onAddLang( text )}  
          cancel={() => setShowModal( false )} /> 
        }      
      </form>
    </TabBodyContainer>
  )

}
