import React, { useState, useEffect, useRef } from 'react'
import { getDatabase, ref, set, child, get } from "firebase/database";
import fireDb from "./firebase"
export default function App() {
  const [state, setstate] = useState([]);
  const name = useRef("");
  const age = useRef("");
  const mobile = useRef("");


  const handleSubmit = (e) => {
    e.preventDefault();
    const db = getDatabase();
    const setData = () => {
      set(ref(db, `users/`), [{ name: name.current.value, age: age.current.value, mobile: mobile.current.value }]);
    };
    setData();
    console.log("abdo")
  }

  useEffect(() => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/`)).then((snapshot) => {
      if (snapshot.exists()) {
        setstate(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }, [])

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          ref={name}
          id="name"
          placeholder="Enter Your Name"
        />
        <input
          type="number"
          ref={age}
          id="age"
          placeholder="Enter Your Age"
        />
        <input
          type="number"
          ref={mobile}
          id="mobile"
          placeholder="Enter Your mobile"
        />
        <input type="submit" value="Enter" />
      </form>
      {state?.map((ele, i) => {
        return (
          <div key={i}>
            <h2>{ele?.name}</h2>
            <h2>{ele?.age}</h2>
            <h2>{ele?.mobile}</h2>
          </div>
        )
      })}
    </>
  )
}
