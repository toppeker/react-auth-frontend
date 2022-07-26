import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import Cookies from "universal-cookie";
import { AuthService } from "./AuthService";

const cookies = new Cookies();
const authService = new AuthService();

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(false);

    const handleSubmit = (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();
        
        // set configurations
        const configuration = {
            method: "post",
            url: "http://localhost:3000/login", //"https://demo-marketplace-webapp.azurewebsites.net/login",
            data: {
                email,
                password,
            },
        };
        // make the API call
        axios(configuration)
            .then((result) => {
                setLogin(true);
                
                // set the cookie
                cookies.set("TOKEN", result.data.token, {
                    path: "/",
                });

                // redirect user to the auth page
                window.location.href = "/auth";
            })
            .catch((error) => {
                error = new Error();
            });
    }

    const handleLyra = (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();
        authService.login();
      }
  
    return (
        <>
            <h2>Login</h2>
            <Form onSubmit={(e)=>handleSubmit(e)}>
                {/* email */}
                <Form.Group controlId="formBasicEmailLog">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                />
                </Form.Group>

                {/* password */}
                <Form.Group controlId="formBasicPasswordLog">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                </Form.Group>
                
                {/* submit button */}
                <Button 
                    variant="primary" 
                    type="submit" 
                    onClick={(e)=>handleSubmit(e)}>
                Submit
                </Button>

                {/* display success message */}
                {login ? (
                    <p className="text-success">You Are Logged in Successfully</p>
                    ) : (
                    <p className="text-danger">You Are Not Logged in</p>
                )}
            </Form>

            
            {/* submit button */}
            <Button
                variant="primary"
                type="submit"
                onClick={(e) => handleLyra(e)}
                >
                Login with Lyra
            </Button>
      
        </>
    )
}