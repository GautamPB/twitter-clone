import { Button } from '@material-ui/core'
import React from 'react'
import '../styles/Login.css'

function Login() {
    const signIn = () => {
        //sign in logic
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img
                    className="login__image"
                    src="https://pngimg.com/uploads/twitter/twitter_PNG3.png"
                    alt=""
                />

                <img
                    className="login__name"
                    src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-2.png"
                    alt=""
                />
            </div>

            <h2>See what's happening in the world right now</h2>

            <Button type="submit" onClick={signIn}>
                Login
            </Button>
        </div>
    )
}

export default Login
