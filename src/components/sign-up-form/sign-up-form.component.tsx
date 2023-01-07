import { ChangeEvent, FormEvent, useState, } from "react";
import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth,  } from "../../utils/firebase/firebase.utils";
import FormInput from '../form-input/form-input.component';
import './sign-up-form.styles.tsx';
import Button from '../button/button.component';
import { useDispatch } from "react-redux";
import { signUpStart } from "../../store/user/user.action";
import { AuthError, AuthErrorCodes } from "firebase/auth";
import { SignUpContainer } from "./sign-up-form.styles";

const defaultFormFields = {
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}


const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;
    const dispatch = useDispatch();

    // console.log(formFields);
    const resetFormFields = () =>{
        setFormFields(defaultFormFields);
    }
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(password !== confirmPassword ) {
            alert("passwords do not match");
            return
        }
        try{
            dispatch(signUpStart(email, password, displayName))
            // console.log(user);

            resetFormFields();
        }catch(error){
            if((error as AuthError).code === AuthErrorCodes.NETWORK_REQUEST_FAILED){
                alert('auth/network-request-failed');
            }
            if((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS){
                alert('faild, email already exist')
            }
            console.error(error);}
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }

    return(
        <SignUpContainer>
            <h2>Don't have an account?</h2>
            <span>Sign Up with your email and password</span>
            <form onSubmit={handleSubmit} >
                <FormInput 
                    label ="Display Name"
                    type="text" 
                    required
                    onChange={handleChange}
                    name='displayName'
                    value={displayName}
                />

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

                <FormInput
                label="Confirm Password"
                type="password"
                required
                onChange={handleChange}
                name='confirmPassword'
                value={confirmPassword}
                />
                <Button  type="submit">Sign Up</Button>
            </form>
        </SignUpContainer>
    );
};

export default SignUpForm;
