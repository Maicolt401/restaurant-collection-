import StyledNotFound from "./NotFounStyled";

const NotfoundComponent = (): JSX.Element => {
  return (
    <StyledNotFound>
      <div className="face">
        <div className="band">
          <div className="red"></div>
          <div className="white"></div>
          <div className="blue"></div>
        </div>
        <div className="eyes"></div>
        <div className="dimples"></div>
        <div className="mouth"></div>
      </div>

      <h1>Oops! Something went wrong!</h1>
      <div className="btn">Return to Home</div>
    </StyledNotFound>
  );
};

export default NotfoundComponent;