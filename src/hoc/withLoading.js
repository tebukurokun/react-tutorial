import styled from "styled-components";
import { useEffect, useState, useContext } from 'react'
import {ThemeContext } from '../contexts/ThemeContext'

const LoadDiv = styled.div`
  height: 100%;
  padding: 36px;
  color: ${( { theme } ) => theme.color};
  background-color: ${( { theme } ) => theme.backgroundColor};
`


export const withLoading = ( WrappedComponent, fetchData ) => {
  const loading = () => {
    const [data, setData] = useState( null );
    const [theme] = useContext( ThemeContext )

    useEffect( () => {
      fetch();
    }, [] )

    const fetch = async () => {
      const fetchedData = await fetchData();
      setData( fetchedData );
    }

    const Loading = (
      <LoadDiv theme={theme}>Now Loading...</LoadDiv>
    )

    return data ? <WrappedComponent data={data} /> : Loading;

  }
  return loading
}
