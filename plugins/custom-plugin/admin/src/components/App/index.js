import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
    const [email, setEmail] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        
        try {
            const res = await axios.post('http://localhost:1337/email/create', { email, body });
            console.log('ok');
            console.log(res);
        } catch (err) {
            console.log(err);
        }
                
        strapi.notification.success('Email sent successfully!');
    };

    const handleAddress = e => setEmail(e.target.value);
    const handleBody = e => setBody(e.target.value);
    
    return (
        <div className="App container pt-5">
            <h2>My Email list plugin</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Email address</label>
                    <input type="email" className="form-control" value={email} onChange={handleAddress} placeholder="name@example.com"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Content</label>
                    <textarea className="form-control" value={body} onChange={handleBody} rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary p-3">Send Email</button>
            </form>
        </div>
    );
};

export default App;