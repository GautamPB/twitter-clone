import { Button } from '@material-ui/core'
import React from 'react'
import '../styles/Login.css'
import { auth, provider } from '../firebase'
import { actionTypes } from './reducer'
import { useStateValue } from './StateProvider'

function Login() {
    const [user, dispatch] = useStateValue()

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch((error) => alert(error.message))
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
