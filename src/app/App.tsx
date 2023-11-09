import { Header } from "../features/header";
import { Router } from "./providers/router";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "./styles/index.css"

export function App() {
  return (
    <div className="content">
      <Header />
      <Router />
    </div>
  )
}

