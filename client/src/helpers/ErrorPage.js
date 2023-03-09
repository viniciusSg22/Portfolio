import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <h1>ERRO!</h1>
      <p>Clique no botão abaixo e volte à segurança</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to={`/`}>Home</Link>
    </div>
  );
}
