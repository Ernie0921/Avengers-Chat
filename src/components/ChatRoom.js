import React from 'react'
import { useState } from "react";
import { db, auth, firebaseRef} from "../config"
import { useCollectionData } from 'react-firebase-hooks/firestore';
import MessageCard from './MessageCard'

const ChatRoom = ({currentRoom}) => {
    const [message, setMessage] = useState(""); // initial message value is blank
 
    const messagesRef = db.collection("messages"); // creating a collection in the firbase database

    const query = messagesRef   // query throught the database 
        .where("room", "==", currentRoom)
        //.orderBy("createdAt")
        //.limit(20);

    const [messages] = useCollectionData(query, {idField: "id" })

    const handleSubmit =  async (e) => {
        e.preventDefault()
        const { uid, photoURL } = auth.currentUser;
        const createdAt = firebaseRef.firestore.FieldValue.serverTimestamp(); //creates a date 

        await messagesRef.add({ //adding object to firebase database by using .add method
            uid,
            photoURL,
            createdAt,
            text: message,
            room: currentRoom,
        });
        setMessage("")
    };

    const handleDelete = (createdAt, id) => {
        db.collection("messages").doc(id).delete();
    }
    
    return (
        <div className="messages">
            {messages && 
                messages.map((message) => (
                    <MessageCard
                        message={message}
                        key={message.id}
                        handleDelete={handleDelete}
                    />
                ))}
            <form onSubmit={handleSubmit}>
                <textarea 
                    value={message}  //the value of the text area is blank bc it sset to "message" which is = ""
                    onChange={(e) => setMessage(e.target.value)} // when inputting run the setMessage function to update the message value to the inputed value
                    placeholder="Enter Message"        
                />
                <button type="submit" disabled={!message}>
                    Send
                </button>   
            </form>      
        </div>
    )
}

export default ChatRoom
