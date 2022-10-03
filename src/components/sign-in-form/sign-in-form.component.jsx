import { 
    auth,
    signInWithGooglePopup,
     createUserDocumentFromAuth,
    //  signInWithGoogleRedirect,
    signInWithEmailAndPass } from "../../utils/firebase/firebase.utils";

import { useState } from "react";
// import {getRedirectResult} from 'firebase/auth';
// import { async } from "@firebase/util";
// import SignUpForm from '../sign-up-form/sign-up-form.component';
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import './sign-in-form.styles.scss'


const defaultFormFields = {
    email:'',
    password:'',
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;
    

    // useEffect(async () => {
    //     const response = await getRedirectResult(auth);
    //         console.log(response);
    //     if(response){
    //         const userDocRef = await createUserDocumentFromAuth(response.user);    
    //     }
    //     // return null;
    // }
        
    //     , []);

    const logGoogleUser = async () => {
        signInWithGooglePopup();
        
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // console.log(event);
        if(!password){
            alert("put in passwords");
            return;
        }
        try{
            const {user} = await signInWithEmailAndPass(email,password);
            // const userDocRef = await createUserDocumentFromAuth(user);
            
            console.log(user);
            
        }catch(error){
            if(error.code === 'auth/user-not-found'){
                alert('user-not-found');
            }else if(error.code === 'auth/wrong-password'){
                 alert('wrong-password')
            }
            console.error(error);}
        
}
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }

    return (
        <div className='sign-in-container'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    label="email"
                    type="email"
                    required
                    onChange={handleChange}
                    name='email'
                    value={email}
                />
        
                <FormInput
                    label="Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name='password'
                    value={password}
                />

                <div className="buttons-container">
                    <Button type="submit">Sign in</Button>
                    <Button type='button' buttonType='google'  onClick={logGoogleUser}>Sing in with Google Popup</Button>
                    {/* <button onClick={signInWithGoogleRedirect}>Sing in with Google Redirect</button> */}
                </div>
            
           
             </form>
        </div>
    );
};
export default SignInForm;