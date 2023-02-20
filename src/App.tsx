import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Greeter } from "my-awesome-greeter";

import {MyCounter ,CustomButton} from "@mansi-tntra/typescript-react-package"
function App() {
  return (
    <>
      <div>Hello</div>
      <div>
        <h2>Default counter</h2>
         <MyCounter/>

      </div>
      <hr />
      <div>
        <h2>Counter with predefined value</h2>
        <MyCounter value={5} />
      </div>
      <div>
        <CustomButton
          disabled={false}
          buttonText={"Click me"}
          onClick={() => console.log("HELLO")}
          type="primary"
          danger={false}
          size={"small"}
          className={""}
          htmlType={"button"}
          />
      </div>
    </>
  );
}

export default App;
