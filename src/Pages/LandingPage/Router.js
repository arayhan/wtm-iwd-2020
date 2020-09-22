import React from "react"
import { Switch, Route } from "react-router"
import Home from "./Home/Home"
import Login from "./Auth/Login"

const Router = () => {
  return (
    <Switch>
      <Route path="/auth" component={Login} />
      <Route path="/" component={Home} />
    </Switch>
  )
}

export default Router
