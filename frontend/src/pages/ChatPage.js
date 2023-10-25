import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ChatPage = () => {
    let [data,setData]= useState([])
    useEffect(()=>{
        fetchData();
    })
    let fetchData = async () =>{
        const chatData= await axios.get("./api/chat")
        setData(chatData.data)
    }
  return (
    <>
        {
            data.map((item)=>{
                return(
                    <div key={item._id}>{item.chatName}</div>
                )
            })
        }
    </>
  )
}

export default ChatPage