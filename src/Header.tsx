import styled from "styled-components";
import { Button } from './components/button';
import { useContext } from 'react';
import { ThemeContext } from "./contexts/ThemeContext";

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 24px 64px 0;
  border-bottom: 1px solid #E0E0E0;
`

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const HeaderButton = styled( Button )<{onClick: any | {color: string, backgroundColor: string}}>`
  padding: 1;
  margin-bottom: 4px;
`


const HeaderUl = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`
const HeaderLi = styled.li<{focused: boolean}>`
  list-style: none;
  padding: 4px 12px;
  cursor: pointer;
  border-bottom: ${props => props.focused ? '2px solid #F44336' : 'none' };
`

export const Header = ( { tab, setTab }: {tab:string, setTab: React.Dispatch<React.SetStateAction<string>>} ): JSX.Element => {

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
