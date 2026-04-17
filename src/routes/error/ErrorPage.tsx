import { useRouteError, type ErrorResponse } from "react-router-dom";

function ErrorPage() {
  const error: ErrorResponse = useRouteError() as ErrorResponse;

  return (
    <div>
      <h1>Ooops!</h1>
      <p>
        <i>{error.statusText}</i>
      </p>
    </div>
  );
}

export default ErrorPage;
