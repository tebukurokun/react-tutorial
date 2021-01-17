import styled from 'styled-components';
import { Modal } from "./components/modal"
import { Button } from "./components/button";
import PropTypes from 'react'

const Container = styled.div`
  width: 240px;
  border-radius: 10px;
  padding: 24px 36px;
  background-color: white;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 24px;
`

export const FormModal = ( { confirm, cancel } ) => {

  FormModal.propTypes = {
    confirm: PropTypes.func,
    cancel: PropTypes.func
  }

  return (
    <Modal>
      <Container>
        <div>本当に作成しますか？</div>
        <ButtonWrapper>
          <Button onClick={cancel}>Cancel</Button>
          <Button onClick={confirm}>OK</Button>
        </ButtonWrapper>
      </Container>
    </Modal>
  )
}
