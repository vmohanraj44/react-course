import { useState } from 'react'
import { ChatInput } from './components/ChatInput'
import { ChatMessage } from './components/ChatMessage'
import  ChatMessages  from './components/ChatMessages'

import './App.css'  
    
  function App(){

           const [chatMessages, setChatMessages] = useState(
                                     [{message: 'hello chatbot', sender: 'mohan raj photo', id:'id1'},
                                      {message: 'Hello! How can I help you?', sender: 'chatbot logo', id:'id2'},
                                      {message: 'Can you get me todays date?', sender: 'mohan raj photo', id:'id3'},
                                      {message: 'Today is may 19', sender: 'chatbot logo', id:'id4'}
                                      ]
        );
               

        return(
                  <div className="app-container">
                   
                    <ChatMessages 
                       chatMessages = {chatMessages}

                    />

                     <ChatInput 
                       chatMessages = {chatMessages}
                       setChatMessages = {setChatMessages}
                    />
                  </div>
        );
      }

export default App
