// import { 
//     auth,
//     signInWithGooglePopup,
//      createUserDocumentFromAuth,
//     //  signInWithGoogleRedirect,
//     signInWithEmailAndPass } from "../../utils/firebase/firebase.utils";

import { ChangeEvent, FormEvent, useState } from "react";
// import {getRedirectResult} from 'firebase/auth';
// import { async } from "@firebase/util";
// import SignUpForm from '../sign-up-form/sign-up-form.component';
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import FormInput from "../form-input/form-input.component";
// import './sign-in-form.styles.tsx'
import { useDispatch } from "react-redux";
import { emailSignInStart, googleSignInStart } from "../../store/user/user.action";
import { ButtonsContainer, SignInContainer } from "./sign-in-form.styles";
import { AuthError, AuthErrorCodes } from "firebase/auth";
// import { onEmailSignInStart } from "../../store/user/user.saga";
 

const defaultFormFields = {
    email:'',
    password:'',
}

const SignInForm = () => {

    const dispatch = useDispatch();
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

const resetFormFields = () => {
    setFormFields(defaultFormFields);
}

    const logGoogleUser = async () => {
        dispatch(googleSignInStart());
        
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // console.log(event);
        if(!password){
            alert("put in passwords");
            return;
        }
        try{
            dispatch(emailSignInStart(email,password));
            // const userDocRef = await createUserDocumentFromAuth(user);
            resetFormFields();
            // console.log(user);
            
        }catch(error){
            if((error as AuthError).code === AuthErrorCodes.NULL_USER){
                alert('user-not-found');
            }else if((error as AuthError).code === AuthErrorCodes.INVALID_PASSWORD){
                 alert('wrong-password')
            }
            console.error(error as Error);}
        
}
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }

    return (
        <SignInContainer>
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

                <ButtonsContainer>
                    <Button type="submit">Sign in</Button>
                    <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google}  onClick={logGoogleUser}>Sing in with Google Popup</Button>
                    {/* <button onClick={signInWithGoogleRedirect}>Sing in with Google Redirect</button> */}
                </ButtonsContainer>
            
           
             </form>
        </SignInContainer>
    );
};
export default SignInForm;