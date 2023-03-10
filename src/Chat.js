import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@mui/icons-material';
import { Avatar,IconButton, } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './Chat.css'
import db from './firebase';
function Chat() {
   const[seed,setSeed]=useState("");
   useEffect(()=>{
      setSeed(Math.floor(Math.random()*5000));
   },[]);
   const[input,setInput]=useState("");
   const { roomId }= useParams();
   const [roomName,setRoomName]= useState("");

   useEffect(()=>{
  if(roomId){
   db.collection('rooms').doc(roomId).onSnapshot(snapshot =>(
      setRoomName(snapshot.data().name)
      ));
      }
   },[roomId]);

   const sendMessage= (e) => {
    e.preventDefault();
    console.log("you typed", input)
    setInput(" ")
   }
  return (
        <div className='chat'>

         <div className='chat_header'>
            <Avatar src='http://avatars.dicebear.com/api/human/${seed}.svg' />
          
            <div className="chat_headerInfo">
               <h3>{roomName}</h3>
               <p>Last seen at...</p>
            </div>

         <div className="chat_headerRight">
            <IconButton><SearchOutlined /></IconButton>
            <IconButton><AttachFile/></IconButton>
            <IconButton><MoreVert /></IconButton>
         </div>

      </div>
            <div>
         
            </div>
        <div className='chat_body'>
    <p className={`chat_message ${true && 'chat_reciever'}`}>
          <span className="chat_name">shivam</span>
          hey guys
          <span className="chat_timestamp">3:50pm</span>         
   </p>
        </div>

        <div className='chat_footer'>
         <InsertEmoticon />
         <form>
            <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder='type a message..' type="text"/>
            <button onClick={sendMessage} type='submit'>Send a message</button>
         </form>
         <Mic />
        </div>
     </div> 
    

  )
}

export default Chat
