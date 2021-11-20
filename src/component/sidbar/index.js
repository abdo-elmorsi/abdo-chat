import React, { useState, useEffect } from 'react'
import "./style.css"
import { FormControl } from 'react-bootstrap';

const User = JSON.parse(localStorage.getItem("User"));

export default function Index({ users, small }) {
	const [contactActive, setcontactActive] = useState('');

	const ClassActive = (e) => setcontactActive(e.target.getAttribute("data-id"));

	return (
		<>
			<FormControl
				type="search"
				placeholder="Search"
				className={`me-2 mb-4`}
				style={{
					position: "relative",
					transition: "all .5s ease-in-out",
					transform: `${small ? 'translate(-120%)' : 'translate(0)'}`,
				}}
				aria-label="Filter"
			/>
			{users && users.filter(e => e?.mobile !== User?.mobile)?.map((ele, i) => {
				return (
					<div key={i} className={`box ${ele.mobile === contactActive && 'active'}`} data-id={ele?.mobile} onClick={(e) => ClassActive(e)}>
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
				)
			})}
			{users?.length === 1 && <h4>you don't have any frinds</h4>}
		</>
	)
}
