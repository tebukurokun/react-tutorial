import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types"

const Container = styled.div`
  padding: 12px 64px;
`

export const TabBodyContainer = ( { children, title } ) => {
  TabBodyContainer.propTypes = {
    children:PropTypes.element,
    title: PropTypes.string
  }

  return (
    <Container>
      <h4>{ title }</h4>
      { children }
    </Container>
  )
}
