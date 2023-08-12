import { useState, useEffect } from "react";
import {
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { auth, db } from "../firebase-config";
import "../styles/Chat.css";

export const Chat = (props) => {
  const { room } = props;
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const messagesRef = collection(db, "messages");

  useEffect(() => {
    const queryMessages = query(messagesRef, where("room", "==", room), orderBy("createdAt"));
    const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
      let mesge = [];
      snapshot.forEach((doc) => {
        mesge.push({ ...doc.data(), id: doc.id });
      });
      setMessages(mesge);
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault(); // This is used so that page does not reload after submitting
    // console.log(newMessage)

    if (newMessage === "") return;

    await addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      room, // In javascript you don't have type compleltely if both have same name like room: room you just right room thats it
    });
    // After adding messages to database we will empty the newMessage state
    setNewMessage("");
  };

  return (
    <div className="chat-app">
      <div className="header">Welcome to : {room.toUpperCase()}</div>
      <div className="messages">
        {messages.map((message) => (
          <div className="message" key={message.id}>
            <span className="user">{message.user}</span>
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="new-message-form">
        <input
          onChange={(event) => setNewMessage(event.target.value)}
          type="text"
          className="new-message-input"
          placeholder="Type your message here..."
          value={newMessage}
        />
        <button className="submit-button" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};
