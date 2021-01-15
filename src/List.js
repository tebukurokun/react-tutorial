import React from "react"
import PropTypes from "prop-types"

export const List = ({ langs }) => {

  List.propTypes = {
    langs:PropTypes.arrayOf(PropTypes.string)
  }

  console.log(langs);

  return (
    <div>
      {
        langs && langs.map((lang, index) => {
          return <div key={index}>{ lang }</div>
        })
      }
    </div>
  )
}