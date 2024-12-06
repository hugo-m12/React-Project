function Error404View() {
  return (
    <>
      <div className="errorPage">
        <div>
          <h1>404</h1>
          <img className="error-img" src="src/assets/images/404-error-page/errorimg.png" alt="error-img"/>
          <p>Uh-oh!</p>
          <p className="margin">We can't find that page.</p>
          <a className="homeButton" href="/">Go Back Home</a>
        </div>
      </div>
    </>
  );
}

export default Error404View;
