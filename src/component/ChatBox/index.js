import React, { useEffect, useRef, useState } from 'react'
import "./style.css"
import { Row, Form, Button, FormControl, Col, InputGroup } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { getDatabase, ref, set, child, get } from "firebase/database";
const User = JSON.parse(localStorage.getItem("User"));

export default function Index() {
	const message = useRef('');
	const [messages, setmessages] = useState([])
	const db = getDatabase();
	const SendMessage = (e) => {
		e.preventDefault();
		if (message.current.value.trim() !== "") {
			console.log(message.current.value);
			set(ref(
				db, `Chat/${new Date().getTime()}`),
				{
					name: User.name,
					message: message.current.value,
				}
			);
			message.current.value = "";
		} else {
			toast.warning("please insert a message")
		}
	}
	// const starCountRef = ref(db, `Chat/`);


	const dbRef = ref(getDatabase());
	useEffect(() => {
		get(child(dbRef, `Chat/`)).then((snapshot) => {
			if (snapshot.exists()) {
				if (snapshot.val() !== null) {
					const Mess = Object.values(snapshot.val());
					console.log(Mess);
					const saveD = (params) => {
						setmessages([...params])
					}
					saveD(Mess)
				}
			} else {
				console.log("No data available");
			}
		}).catch((error) => {
			console.error(error);
		});
	}, [dbRef, message.current.value])


	// onValue(starCountRef, (snapshot) => {
	// 	// console.log(snapshot.val());
	// 	// console.log(Object.keys(snapshot.val()));
	// 	if (snapshot.val() !== null) {
	// 		const Mess = Object.values(snapshot.val());
	// 		console.log(Mess);
	// 		const saveD = (params) => {
	// 			setmessages([...params])
	// 		}
	// 		// saveD(Mess)
	// 		// setmessages(Mess)
	// 		// return false;
	// 	}
	// 	// setmessages([...Object.values(snapshot.val())])
	// });
	return (
		<>
			<Row>
				<Col sm={12} className="chatBox pt-4">
					<ul>
						{messages?.map((ele, i) => {
							return (
								<li className={`${ele.name === User.name ? "text-start" : "text-end text-danger"}`} key={i}>
									{ele.name === User.name ? (
										<span className="fs-6">👀 {ele.message}</span>
									) : (
										<span className="fs-6">{ele.message} :{ele.name.split(" ").slice(0, 1)}</span>
									)}
								</li>
							)
						})}
					</ul>
				</Col>
			</Row>
			<Row>
				<Col sm={12}>
					<Form onSubmit={(e) => SendMessage(e)}>
						<InputGroup className="mb-3">
							<FormControl
								ref={message}
								placeholder="Your Message"
								aria-label="Recipient's username"
								aria-describedby="basic-addon2"
							/>
							<Button type='submit' variant="outline-secondary" id="button-addon2">
								<svg width="22px" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="paper-plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-paper-plane fa-w-16 fa-2x"><path fill="currentColor" d="M464 4.3L16 262.7C-7 276-4.7 309.9 19.8 320L160 378v102c0 30.2 37.8 43.3 56.7 20.3l60.7-73.8 126.4 52.2c19.1 7.9 40.7-4.2 43.8-24.7l64-417.1C515.7 10.2 487-9 464 4.3zM192 480v-88.8l54.5 22.5L192 480zm224-30.9l-206.2-85.2 199.5-235.8c4.8-5.6-2.9-13.2-8.5-8.4L145.5 337.3 32 290.5 480 32l-64 417.1z" className=""></path></svg>
							</Button>
						</InputGroup>
					</Form>
				</Col>
			</Row>
		</>
	)
}
