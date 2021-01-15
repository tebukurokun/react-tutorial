import React from "react"
import PropTypes from 'react'
import {useState} from 'react'

export const Form = ({ onAddLang }) => {

  Form.propTypes = {
    onAddLang: PropTypes.func,
  }

  const [text, setText] = useState('')
  
  const submitForm = (event) => {
    event.preventDefault()
    console.log(text);
    onAddLang(text)
  } 
  
  return (
    <div>
      <h4>add new language</h4>
      <form onSubmit={submitForm}>
        <div>
          <input 
          type="text" 
          value={text} 
          onChange={ (e) => setText(e.target.value) } 
          />
        </div>
        <div>
          <button>追加</button>
        </div>
      </form>
    </div>
  )

}
