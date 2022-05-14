import React, { useState } from 'react';
import axios from 'axios';

import history from './../history';

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    function handleChange(event) {
        setEmail(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    function handleClick() {

        var data = {
            "EMail": email,
            "Password": password
        }

        const headers = {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
        }

        axios.post('https://localhost:7024/api/Access/Login', data, {
            headers: headers
        })
            .then(response => {
                if (response.data.isSuccess === true) {
                    setError(response.data.message);
                    localStorage.setItem('role', response.data.data.role);
                    localStorage.setItem('accessToken', response.data.data.accessToken);
                   window.location.href="/Products";
                   //location.reload();
                }
                else {
                    setError(response.data.message);
                }

            }).catch((err) => {

            });

    }
    return (
        <div>
            <div>
                <input type="text" id="txtEmail" onChange={(e) => { handleChange(e) }} value={email} />
            </div>
            <div>
                <input type="password" id="txtPassword" onChange={(e) => { handlePasswordChange(e) }} value={password} />
            </div>

            <div>
                <button id="btnClick" onClick={handleClick} value="ss">Giriş</button>
            </div>
            <div>
                <label>{error}</label>
            </div>
        </div>
    );
}

export default Login;