import styled from "styled-components";
import { fetchApplications } from "../utils/api";
import { debug } from "../utils/log";
import { Main } from "../components/common";
import ApplicationCard from "../components/ApplicationCard";

const Nav = styled.nav`
  border-bottom: solid 1px;
  padding-bottom: 1rem;
`;

const Header = styled.div`
  margin: auto;
  text-align: center;
`;

const ApplicationCardListContainer = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const CardContainer = styled.div``;

// eslint-disable-next-line no-unused-vars
async function fetchData() {
  const response = await fetchApplications();
  debug(response);
  return response;
}

const ApplicationCardList = function ({ applications, appUrlPath }) {
  return (
    <ApplicationCardListContainer>
      {applications && applications.length > 0
        ? applications.map((application, index) => {
            return (
              <CardContainer key={`${application.name}-${index}`}>
                <ApplicationCard application={application} appUrlPath={appUrlPath} />
              </CardContainer>
            );
        })
      : null}
    </ApplicationCardListContainer>
  );
}

export default function Applications() {
  let applications;

  return (
    <Main>
      <Nav>
        <Header>Splunk App Store</Header>
      </Nav>
      <ApplicationCardList applications={applications} appUrlPath="/applications/" />
    </Main>
  );
}
