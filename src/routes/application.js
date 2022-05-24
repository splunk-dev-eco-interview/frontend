import { Navigate, useLocation } from "react-router-dom";
import { Main } from "../components/common";

export default function Application() {
  // hook that returns the current location object of the browser
  // https://reactrouter.com/docs/en/v6/hooks/use-location
  const location = useLocation();
  // state
  // https://v5.reactrouter.com/web/api/location
  const application = location && location.state ? location.state.application : null;

  if (application === null || application === undefined) {
    return(
      <Navigate to="/" />
    );
  }

  return (
    <Main>
      {application && (
        <>
          {/* TODO */}
          <pre>{JSON.stringify(application, null, 2)}</pre>
          {/* TODO */}
        </>
      )}
    </Main>
  );
}
