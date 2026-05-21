import RobotProfileImage from '../assets/chatbot logo.png';
import UserProfileImage from '../assets/Mohan Raj Photo.jpg';
import './ChatMessage.css'

 export function ChatMessage({message, sender}){
       //const message = props.message;
       //const sender = props.sender;

       //const {message, sender} = props;

       /*if(sender === 'chatbot logo'){
           return(
           <div>
              <img src="chatbot logo.png" width="40"/>
              {message}
           </div>
        );
       }*/

        return(
           <div className = {sender === 'mohan raj photo' ? 'chat-message-user' : 'chat-message-robot'}>
            {sender === 'chatbot logo' && (
              <img src={RobotProfileImage} className="chat-profile-image"/>
              )}
              <div className="chat-message-text">
               {message}
              </div>
            {sender === 'mohan raj photo' && (
              <img src={UserProfileImage} className="chat-profile-image"/>
              )}
           </div>
        );
      }
