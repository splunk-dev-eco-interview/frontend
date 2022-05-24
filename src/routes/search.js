import styled from "styled-components";
import { Main } from "../components/common";

const AppSearchInput = styled.input`
  border: 1px solid #272727;
`

const AppResultsContainer = styled.div``;

const AppCardContainer = function({name}) {
  return (
    <div>
      {name}
    </div>
  )
}

// eslint-disable-next-line no-unused-vars
async function fetchData() {
  const response = await fetch("");
  return await response.json();
}

export default function Search() {

  const onChangeInput = function(e) {}

  return (
    <Main>
      <AppSearchInput defaultValue="" onChange={onChangeInput}></AppSearchInput>
      <AppResultsContainer>
        <AppCardContainer name={"App 1"} />
        <AppCardContainer name={"App 2"}/>
      </AppResultsContainer>
    </Main>
  );
}