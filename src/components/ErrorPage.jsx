const ErrorPage = (props) => {
  return (
    <div>
      <h1>Error en {props.location}</h1>
      <p>{error.message || error?.statusText}</p>
    </div>
  );
};

export default ErrorPage;
