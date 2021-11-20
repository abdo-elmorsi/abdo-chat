
import React, { StrictMode } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

import AppRouter from "./Routes/app"

const App = () => {
  window.addEventListener('offline', () => toast.error("sorry you are offline now"));
  window.addEventListener('online', () => {
    toast.success("congratulations you are online now")
    setTimeout(() => {
      window.location.reload()
    }, 1000)
  }
  )
  return (
    <StrictMode>
      <AppRouter />
    </StrictMode>
  )
}

export default App;