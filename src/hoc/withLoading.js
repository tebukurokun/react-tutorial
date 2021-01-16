import styled from "styled-components";
import { useEffect, useState } from 'react'

const LoadDiv = styled.div`
  height: 100%;
  padding: 36px;
  color: ${( { theme } ) => theme.color};
  background-color: ${( { theme } ) => theme.backgroundColor};
`


export const withLoading = ( WrappedComponent, fetchData ) => {
  const loading = () => {
    const [data, setData] = useState( null );

    useEffect( () => {
      fetch();
    }, [] )

    const fetch = async () => {
      const fetchedData = await fetchData();
      setData( fetchedData );
    }

    const Loading = (
      <LoadDiv>ロード中...</LoadDiv>
    )

    return data ? <WrappedComponent data={data} /> : Loading;

  }
  return loading
}
