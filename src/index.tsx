import "babel-polyfill";
import React from "react";
import { render } from "react-dom";

import "~/assets/global.scss";
import App from "./App";

render(<App />, document.getElementById("root"));
