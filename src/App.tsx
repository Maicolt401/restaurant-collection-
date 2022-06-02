import { Provider } from "react-redux";
import RegisterPage from "./pages/RegisterPage";
import store from "./redux/store/store";

function App(): JSX.Element {
  return (
    <>
      <Provider store={store}>
        <RegisterPage />
      </Provider>
    </>
  );
}

export default App;
