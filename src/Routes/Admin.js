import React from 'react'
import { Redirect, Route } from 'react-router-dom'


const AdminRoute = ({ path, component: Component, ...rest }) => {
	const User = JSON.parse(localStorage.getItem("User"));
	return (
		<>
			<Route
				{...rest}
				component={(props) =>
					User ? (
						path === "/login" ? (<Redirect to="/" />) : (
							<>
								<Component {...props} />
							</>
						)
					) : (
						path !== "/login" ? (<Redirect to="/login" />) : (
							<>
								<Component {...props} />
							</>
						)
					)
				}
			/>
		</>
	)
}
export default AdminRoute