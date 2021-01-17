import styled from "styled-components";
import PropTypes from "prop-types"
import { Button } from './components/button';
import { useContext } from 'react';
import { ThemeContext } from "./contexts/ThemeContext";

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 24px 64px 0;
  border-bottom: 1px solid #E0E0E0;
`

const HeaderButton = styled( Button )`
  padding: 1;
  margin-bottom: 4px;
`


const HeaderUl = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`
const HeaderLi = styled.li`
  list-style: none;
  padding: 4px 12px;
  cursor: pointer;
  border-bottom: ${props => props.focused ? '2px solid #F44336' : 'none' };
`

export const Header = ( { tab, setTab } ) => {
  Header.propTypes = {
    tab:PropTypes.string,
    setTab:PropTypes.func
  }

  // eslint-disable-next-line no-unused-vars
  const [theme, toggleTheme] = useContext( ThemeContext )

  return (
    <Container>
      <HeaderUl>
        <HeaderLi focused={tab === 'list'} onClick={() => setTab( 'list' )}>リスト</HeaderLi>
        <HeaderLi focused={tab === 'form'} onClick={() => setTab( 'form' )}>フォーム</HeaderLi>
      </HeaderUl>
      <HeaderButton onClick={toggleTheme}>change theme</HeaderButton>
    </Container>
  )
}
