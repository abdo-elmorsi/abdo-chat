import React from 'react';
import { Router, Switch } from 'react-router-dom'
import { createBrowserHistory } from "history";
import * as ROUTES from './constans';

import Home from '../pages/index';
import Users from '../pages/Users';

import Login from '../pages/Login';
import NotFound from '../pages/NotFound';



import Admin from "./Admin";
export const history = createBrowserHistory()
const AppRouter = () => {
	return (
		<Router history={history}>
			<Switch>
				<Admin exact component={Home} path={ROUTES.HOME} />
				<Admin exact component={Users} path={ROUTES.USERS} />
				<Admin exact component={Login} path={ROUTES.LOGIN} />
				<Admin component={NotFound} path={ROUTES.NOT_FOUND} />
			</Switch>
		</Router>
	)
}
export default AppRouter