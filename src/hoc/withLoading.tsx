import styled from "styled-components";
import { useEffect, useState, useContext } from 'react'
import {ThemeContext } from '../contexts/ThemeContext'

const LoadDiv = styled.div`
  height: 100%;
  padding: 36px;
  color: ${( { theme } ) => theme.color};
  background-color: ${( { theme } ) => theme.backgroundColor};
`


export const withLoading = ( WrappedComponent: React.FunctionComponent<{data: Array<string>}>, fetchData:() => Promise<Array<string>> ) : () => JSX.Element => {
  const loading = () => {
    const [data, setData] = useState<Array<string>>(  );
    const [theme] = useContext( ThemeContext )

    useEffect( () => {
      fetch();
    }, [] )

    const fetch = async () => {      
      const fetchedData = await fetchData();
      
      setData( fetchedData );

      console.log( fetchedData );
      
    }

    const LoadingDiv = (
      <LoadDiv theme={theme}>Now Loading...</LoadDiv>
    )

    return data ? <WrappedComponent data={data} /> : LoadingDiv;

  }
  return loading
}
