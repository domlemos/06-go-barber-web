import React from "react";
import GlobalStyle from "./styles/globals";
import SignIn from "./pages/Signin";
import SignUp from "./pages/SignUp";

const App: React.FC = () => (
  <>
    {/* <SignIn /> */}
    <SignUp />
    <GlobalStyle />
  </>
);
export default App;
