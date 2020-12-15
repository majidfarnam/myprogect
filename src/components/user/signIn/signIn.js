import React, {useState, useEffect, useContext, createContext} from 'react';
import axios from 'axios';
import logoLogin from '../../../assets/images/Logo.png';
import Button from '../../../components/students/UI/Button/button';
import captchaImage from '../../../assets/images/reload_image.jpg';
import './signIn.css';
import Counter from '../../../components/counter/counter';
import { createStore} from 'redux';
import counter from '../../../reducers';

const SingIn =(props)=>{
    const [inputHandler, setInputHandler]=useState(0);
    const [randomNumber1, setRandomNumber1]=useState(0);
    const [randomNumber2, setRandomNumber2]=useState(0);
    const [emailInput, setEmailInput]=useState('');
    const [passInput, setPassInput]=useState('');
    const sum = randomNumber1 + randomNumber2;

    const store = createStore(counter);
    useEffect(()=>{
        randomHandler();
    },[])
    const randomHandler =()=>{
        const number1 = Math.floor(Math.random() * 10) +1;
        const number2 = Math.floor(Math.random() * 10) +1;
        setRandomNumber1(number1);
        setRandomNumber2(number2);

    }
    const onChangeHandler=(event)=>{
        setInputHandler(Number(event.target.value));

    }
    const emailHandler =(event)=>{
        const emailData = event.target.value;
        setEmailInput(emailData);
    }
    const passHandler =(event)=>{
        setPassInput(event.target.value);
        console.log(passInput);
    }
    const loginHandler =()=>{
        if (inputHandler===sum){
            console.log('ok');
            axios.post('http://192.168.1.103/student/user_login.php',{
                email : emailInput,
                password : passInput
            })
            .then(response=>{
                if(response.data==="Data Matched"){
                    console.log(response);
                }else{
                    alert(response.data);
                }
            })
        }else{
            console.log('captcha invalid');
        }
    }

    return(
            <React.Fragment>
                <img className='img' src={logoLogin} alt='pte90' />
                <input type='text' placeholder="Username" onChange={emailHandler}/>
                <input type='password' placeholder="Password" onChange={passHandler}/>
                <div className="captchaView">
                    <p>{randomNumber1} + {randomNumber2} =</p>
                    <input onChange={onChangeHandler}/>
                    <img src={captchaImage} alt="captchaImage" onClick={randomHandler}/>
                </div>
                <img className='img' src={logoLogin} alt='pte90' />
                <Button clicked={loginHandler} >SignIn</Button>
                <Counter 
                    value={store.getState()}
                    onIncrement={()=> store.dispatch({type : 'INCREMENT'})}
                    onDecrement={()=> store.dispatch({type : 'DECREMENT'})}
                />

            </React.Fragment>
        
    )
}

export default SingIn;