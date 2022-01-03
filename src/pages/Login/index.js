import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form, Spinner } from "react-bootstrap";
import { toast } from 'react-toastify';
import "./style.css";


import { getDatabase, ref, set } from "firebase/database";
// import firebase from "../../firebase"

import avatars1 from "../../images/01.jpg";
const Index = () => {
	const history = useHistory();
	const [Loading, setLoading] = useState(false);
	const Name = useRef("");
	const Mobile = useRef("");
	const Image = useRef("");

	const LogIn = (e) => {
		e.preventDefault();
		setLoading(true);
		localStorage.setItem("User", JSON.stringify({ name: Name.current.value, mobile: Mobile.current.value, image: Image.current.value }));
		if (Name.current.value !== '' && Mobile.current.value !== '' && Image.current.value !== '') {
			(async () => {
				const db = getDatabase();
				await set(ref(db, `users/${Mobile.current.value}`),
					{
						name: Name.current.value,
						mobile: Mobile.current.value,
						image: Image.current.value
					}
				).then(() => {
					console.log('sucs')
				}).catch((er) => {
					console.error(er)
				})
				console.log(Name.current.value);
				toast.success('💖 Welcome 💖', {
					position: "top-center",
					autoClose: 5000,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
				});
				setLoading(false);
				history.push("/");
			})();
		} else {
			if (Name.current.value === '') toast.warning("please add your name")
			if (Mobile.current.value === '') toast.warning("please add your phone number")
			if (Image.current.value === '') toast.warning("please add your image")
			setLoading(false);
		}
	};
	return (
		<div>
			<div className="login-wrapepr shadow-sm py-10">
				<div className="login-img">
					<img src={avatars1} alt="ss" />
				</div>
				<div className="login-form">
					<Form onSubmit={(e) => LogIn(e)}>
						<Form.Group
							style={{ minHeight: "94px" }}
							className="parent"
							controlId="formBasicPassword"
						>
							<Form.Label>Name</Form.Label>
							<Form.Control
								ref={Name}
								placeholder="Name"
								className=""
								onChange={() =>
									(document.getElementById("errorName").innerHTML = "")
								}
							/>
							<Form.Text
								className="text-danger text-center d-block"
								id="errorName"
							></Form.Text>
						</Form.Group>
						<Form.Group
							style={{ minHeight: "94px" }}
							controlId="formBasicEmail"
						>
							<Form.Label>Image</Form.Label>
							<Form.Control
								ref={Image}
								type="text"
								placeholder="Add Image By Url"
								onChange={() =>
									(document.getElementById("errorImage").innerHTML = "")
								}
							/>
							<Form.Text
								className="text-danger text-center d-block"
								id="errorImage"
							></Form.Text>
						</Form.Group>
						<Form.Group
							style={{ minHeight: "94px" }}
							controlId="formBasicEmail"
						>
							<Form.Label>Mobile</Form.Label>
							<Form.Control
								ref={Mobile}
								type="text"
								placeholder="Your Phone Number"
								onChange={() =>
									(document.getElementById("errorPhone").innerHTML = "")
								}
							/>
							<Form.Text
								className="text-danger text-center d-block"
								id="errorPhone"
							></Form.Text>
						</Form.Group>
						<div className="d-flex justify-content-between">
							<Form.Group className="">
								<Form.Control type="reset" value="reset"></Form.Control>
							</Form.Group>
							<Form.Group className="">
								<Button className="d-block min-w-100 mt-3" variant="primary" type="submit">
									{Loading ? (
										<Spinner animation="border" size="sm" className="mx-3" />
									) : "Login"}
								</Button>
							</Form.Group>
						</div>
					</Form>
				</div>
			</div>
		</div>
	);
}

export default Index