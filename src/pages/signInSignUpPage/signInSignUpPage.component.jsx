import React from "react";
import "./signInSignUpPage.styles.scss"
import SignIn from "../../components/sign-in/sign-in.component"
import SignUp from '../../components/sign-up/sign-up.component'

const SignInSignUpPage = () =>
{
    return(
        <div className="signInSignUpPage">
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default SignInSignUpPage;