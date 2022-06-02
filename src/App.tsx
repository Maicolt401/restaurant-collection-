import { Provider } from "react-redux";
import FormComponent from "./components/RegisterFormComponent";
import store from "./redux/store/store";

function App(): JSX.Element {
  return (
    <>
      <Provider store={store}>
        <FormComponent />
      </Provider>
    </>
  );
}

export default App;
