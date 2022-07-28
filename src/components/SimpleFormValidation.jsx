import React, {useState} from 'react';


const SimpleFormValidation = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const eventHandler = (e) => {
        e.preventDefault()
        if (!login || password.length < 5) {
            alert('All fields must be filled' +
                '\n' +
                'Password must be received more than 5 characters')
        }else {
        console.log('Login' + ' ' + login,'Password' + ' ' + password);
        setLogin('');
        setPassword('');
    }
    }
    return (
        <div>
            <form onSubmit={eventHandler}>
                <h1>Sing in</h1>
                <input type="text"
                       value={login}
                       onChange={e => setLogin(e.target.value)}
                       placeholder= 'Enter your login'/>

                <input type='password'
                       value={password}
                       onChange={e => setPassword(e.target.value)}
                       placeholder='Enter your password'/>

                       <button>Sing in</button>
            </form>
        </div>
    );
};

export default SimpleFormValidation;