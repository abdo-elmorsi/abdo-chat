import React, { useState, useEffect } from 'react'
import { getDatabase, ref, onValue } from "firebase/database";
import { Row, Col, Container } from 'react-bootstrap';
import firebase from "../firebase"
import NavBar from "../component/navbar"
import SidBar from "../component/sidbar"
import ChatBox from "../component/ChatBox"

export default function Index() {
	const [state, setstate] = useState();
	const [smallScreen, setsmallScreen] = useState(true);
	const db = getDatabase();

	useEffect(() => {
		console.log(firebase)
		if (document.body.clientWidth < 753) {
			setsmallScreen(true)
		} else {

			setsmallScreen(false)
		}
	}, [])
	useEffect(() => {
		// const dbRef = ref(getDatabase());
		// get(child(dbRef, `users/`)).then((snapshot) => {
		//   if (snapshot.exists()) {
		//     setstate(Object.values(snapshot.val()));
		//     setTimeout(() => {
		//       console.log(
		//         Object.keys(snapshot.val()),
		//       );
		//     }, 3000);
		//   } else {
		//     console.log("No data available");
		//   }
		// }).catch((error) => {
		//   console.error(error);
		// });
		const starCountRef = ref(db, 'users/');
		onValue(starCountRef, (snapshot) => {
			const data = snapshot.val() || {};
			// updateStarCount(postElement, data);
			setstate(Object.values(data));
			console.log(
				Object.keys(data),
			);
		});
	}, [db])
	return (
		<>
			<Container fluid>
				<Row className="flex-nowrap">
					<Col xs={smallScreen ? 3 : 12} sm={smallScreen ? 2 : 12} md={smallScreen ? 2 : 3} lg={smallScreen ? 1 : 2} className={`pt-4`} style={{ background: '#d1d1d1' }}>
						<div className="mt-0 mb-3 d-flex justify-content-end" onClick={() => setsmallScreen(!smallScreen)}>
							<svg style={{ transform: `rotate(${smallScreen ? "-90deg" : "90deg"})`, cursor: "pointer" }} width="25px" aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-circle-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-chevron-circle-down fa-w-16 fa-2x"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm8.5-107.5l122.8-122.8c4.7-4.7 4.7-12.3 0-17l-22.6-22.6c-4.7-4.7-12.3-4.7-17 0L256 277.8l-91.7-91.7c-4.7-4.7-12.3-4.7-17 0l-22.6 22.6c-4.7 4.7-4.7 12.3 0 17l122.8 122.8c4.7 4.7 12.3 4.7 17 0z" className=""></path></svg>
						</div>
						<SidBar users={state} small={smallScreen} />
					</Col>
					<Col xs={smallScreen ? 9 : 0} sm={smallScreen ? 10 : 0} md={smallScreen ? 10 : 9} lg={smallScreen ? 11 : 10} className="pt-4" style={{ minHeight: "100vh" }}>
						<NavBar />
						<ChatBox />
					</Col>
				</Row>
			</Container>
		</>
	)
}
