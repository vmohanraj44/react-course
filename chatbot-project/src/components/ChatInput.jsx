import { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import './ChatInput.css'
  
export function ChatInput({chatMessages, setChatMessages}){
          const [inputText, setInputText] = useState('');

              function SaveInputText(event){
                setInputText(event.target.value);
                }

                async function sendMessage(){
                    const newChatMessages =  [
                                        ...chatMessages,
                                        {
                                          message: inputText,
                                          sender:'mohan raj photo',
                                          id: crypto.randomUUID()
                                        },
                                        {
                                            message: 'Loading...',
                                            sender: 'robot',
                                            id: crypto.randomUUID()
                                          }
                                        ];

                    setChatMessages(newChatMessages);

                     setInputText('');    

                      const response = await Chatbot.getResponseAsync(inputText);
                       setChatMessages([
                                        ...newChatMessages.slice(0, newChatMessages.length - 1), 
                                        {
                                          message: response,
                                          sender:'chatbot logo',
                                          id: crypto.randomUUID()
                                        }
                                        ]);
                       
                }

                function handleKeyDown(event){
                  if(event.key === 'Enter'){
                    sendMessage();
                  }
                  else if(event.key === 'Escape'){
                     setInputText('');
                  }
                }
        return (
          <div className="chat-input-container">
           <input 
             placeholder="Send a message to Chatbot" 
             size="30" 
             onChange = {SaveInputText}
             value={inputText}
             onKeyDown ={handleKeyDown}
             className = "chat-input"
             />
           <button className="send-button" onClick={sendMessage}>Send</button>
          </div>
        );
      }