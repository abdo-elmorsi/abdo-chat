import React, { useState } from 'react'
// import { getDatabase, ref, set, child, get, onValue } from "firebase/database";
import "./style.css"
import { FormControl, OverlayTrigger, Tooltip } from 'react-bootstrap';

const User = JSON.parse(localStorage.getItem("User"));

export default function Index({ users, small }) {
	const [contactActive, setcontactActive] = useState('');

	const OpenChat = (e) => {
		setcontactActive(e.target.getAttribute("data-id"));
		// const db = getDatabase();
		// console.log(e.target.getAttribute("data-id"));
		// console.log(User.mobile);
		// const userN = e.target.getAttribute("data-id");
		// const myN = User.mobile;
		// const dbRef = ref(getDatabase());
		// get(child(dbRef, `Chat${myN}-${userN}/`)).then((snapshot) => {
		// 	if (snapshot.exists()) {
		// 		// setstate(Object.values(snapshot.val()));
		// 		setTimeout(() => {
		// 			console.log(snapshot.val());
		// 		}, 3000);
		// 	} else {
		// 		console.log("No data available");
		// 	}
		// }).catch((error) => {
		// 	console.error(error);
		// });

		// const starCountRef = ref(db, `Chat${myN}-${userN}/`);
		// onValue(starCountRef, (snapshot) => {
		// 	console.log(snapshot.val());
		// });
	};

	return (
		<>
			<FormControl
				type="search"
				placeholder="Search"
				className={`me-2 mb-4`}
				style={{
					position: "relative",
					transition: "all 0.5s ease-in-out",
					transform: `${small ? 'translate(-120%)' : 'translate(0)'}`,
				}}
				aria-label="Filter"
			/>
			{users && users.filter(e => e?.mobile !== User?.mobile)?.map((ele, i) => {
				return (
					<OverlayTrigger
						key={i}
						placement="right"
						overlay={<Tooltip id="button-tooltip-2">{ele.mobile}</Tooltip>}
					>
						<div className={`box ${ele.mobile === contactActive && 'active'}`} data-id={ele?.mobile} onClick={(e) => OpenChat(e)}>
							<div className={`image overflow-hidden`} style={{
								position: `${"relative"}`,
								transform: `translate(-50%,-50%)`,
								top: `25px`,
								left: `${small ? "50%" : "25px"}`,
							}}>
								<img src={ele?.image ? ele.image : "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"} alt='' />
							</div>
							<span style={{
								transform: `${small ? "rotate(-90deg)" : "rotate(0deg)"}`,
								width: `${small ? "0px" : ""}`,
								opacity: `${small ? "0" : "1"}`
							}}>{ele?.name}</span>
						</div>
					</OverlayTrigger>
				)
			})}
			{users?.length === 1 && <h4>you don't have any frinds</h4>}
		</>
	)
}
