import React from 'react'
import "./style.css"
import { Container, Row, Form, Button, FormControl, Col } from 'react-bootstrap';

export default function Index() {
	return (
		<Container fluid>
			<Row>
				<Col sm={6}>
					one
				</Col>
				<Col sm={6}>
					tow
				</Col>
			</Row>
		</Container>
	)
}
