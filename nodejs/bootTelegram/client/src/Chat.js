import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import uuid from 'uuid/v4';
import { Button } from './components';
// e.jpg  iconError.png
import IconErrorlink from '../src/assets/imgs/e.jpg';
const IconError = () => <img className='iconError' src={IconErrorlink} width={15} height={15} alt='error' />;

const myId = uuid();

const socket = io('http://localhost:8080', 
{ transports: ['websocket', 'polling', 'flashsocket'] });

socket.on('connect', () => console.log('[IO] Connect => A new connection has been established'));

const Chat = () => {
    const [message, setMessage] = useState('');
    const [chat, setChat] = useState([]);

    useEffect(() => {
        const handleNewMessage = newMessage => setChat([...chat, newMessage]);
        socket.on('chat.message', handleNewMessage);
        return () => socket.off('chat.message', handleNewMessage);
    }, [chat]);

    const handleFormSubmit = event => {
        event.preventDefault();
        if (message.trim()) {
            socket.emit('chat.message', {
                id: myId,
                message
            })
            setMessage('');
        }
    }

    const handleInputChange = event => setMessage(event.target.value)

    const handleTikTok = event => {
        event.preventDefault();
        let video = event.target.value;
        if (video) {
            socket.emit('upload.video', {
                video
            });       
            video = "";            
        }
    }
    
    const overflow = () => {
        let element = document.querySelector('.list');
        element.scrollTop = element.scrollHeight - element.clientHeight;
    }

    return (
        <div className='Master'>
            <main className="container" ref={overflow}>
                <ul className="list" >
                    { chat.map((item, key) => (
                        <li
                            className={`list__item list__item--${item.id === myId ? 'mine' : 'other'}`}
                            key={key}
                        >
                            <span className={`message message--${item.id === myId ? 'mine' : 'other'}`}>
                            { item.name && <b>{item.name}: </b> } 
                            { item.message }
                            { item.error &&  <IconError/> } 
                            </span>
                        </li> 
                    ))}
                </ul>
                <form className="form">
                    <input
                        className="form__field"
                        onChange={handleInputChange}
                        placeholder="Type a new message here and pressed Enter"
                        type="text"
                        value={message}
                    />
                    <Button onCLick={handleFormSubmit} > Enviar </Button>
                    <label className='labelTiktok'>
                        TikTok
                        <input type="file" name="file" className='file' onChange={handleTikTok} />
                    </label>                                      
                </form>
            </main>
        </div>
    )
}

export default Chat
