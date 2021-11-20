import React from 'react'
import { useHistory, NavLink } from "react-router-dom";
import { Container, Nav, Navbar, Form, Button, FormControl } from 'react-bootstrap';
import "./style.css"

export default function Index() {
	const history = useHistory();
	const User = JSON.parse(localStorage.getItem("User"));
	const logOut = () => {
		localStorage.removeItem("User");
		history.push("/")
	}
	return (
		<>
			<Navbar bg="light" expand="lg">
				<Container fluid>
					<Navbar.Brand>
						<img src={`${User.image}`} alt='' />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
						<Nav
							className="me-auto my-2 my-lg-0"
							style={{ maxHeight: '100px' }}
							navbarScroll
						>
							<Nav.Link className="Link mb-2 mb-lg-0 mx-auto me-lg-2" as={NavLink} to="/">Home</Nav.Link>
							<Nav.Link className="Link mb-2 mb-lg-0 mx-auto me-lg-2" as={NavLink} to="/setting">Setting</Nav.Link>
						</Nav>
						<Form className="d-flex">
							<FormControl
								type="search"
								placeholder="Search"
								className="me-2"
								aria-label="Search"
							/>
							<Button variant="outline-success" className="ms-2" onClick={() => logOut()}>
								<svg width='15px' aria-hidden="true" focusable="false" data-prefix="fad" data-icon="sign-out" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-sign-out fa-w-16 fa-2x"><g className="fa-group"><path fill="currentColor" d="M180 448H96a96 96 0 0 1-96-96V160a96 96 0 0 1 96-96h84a12 12 0 0 1 12 12v40a12 12 0 0 1-12 12H96a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h84a12 12 0 0 1 12 12v40a12 12 0 0 1-12 12z" className="fa-secondary"></path><path fill="currentColor" d="M353 88.3l151.9 150.6a24 24 0 0 1 0 34.1l-152 150.8a24.08 24.08 0 0 1-33.9-.1l-21.9-21.9a24.07 24.07 0 0 1 .8-34.7l77.6-71.1H184a23.94 23.94 0 0 1-24-24v-32a23.94 23.94 0 0 1 24-24h191.5l-77.6-71.1a24 24 0 0 1-.7-34.6l21.9-21.9a24 24 0 0 1 33.9-.1z" className="fa-primary"></path></g></svg>
							</Button>
						</Form>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	)
}
