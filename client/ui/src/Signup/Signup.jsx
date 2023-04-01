import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';



function Signup() {
    const [pwdValidation, setPwdValidation] = useState({
        lowercase : false,
        uppercase : false,
        number : false,
        symbol : false,
        length : false
    });

    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        const isPwdValid = Object.values(pwdValidation).every(Boolean);
        console.log(isPwdValid);
        setIsValid(isPwdValid);
        console.log({isValid});
    }, [setPwdValidation])

    const {lowercase, uppercase, number, symbol, length} = pwdValidation;
    const validatePassword = (ev) => {
        const password = ev.target.value;
        console.log(password);
        const lowercase = /(?=.*[a-z])/.test(password);
        const uppercase = /(?=.*[A-Z])/.test(password);
        const number = /(?=.*\d)/.test(password);
        const symbol = /(?=.*[\W_])/.test(password);
        const length = password.length >= 8;
        setPwdValidation({lowercase, uppercase, number, symbol, length});

    }
  return (
    <div className='p-5 col-8 offset-2'>
        <input type="password" onChange={validatePassword} name='pwd' id='pwd'/>
        <div className='pwdStrength'>
            <div className= {lowercase ? 'text-success' : 'text-danger'}>lowercase must : a-z</div>
            <div className= {uppercase ? 'text-success' : 'text-danger'}>uppercase must : A-Z</div>
            <div className= {number ? 'text-success' : 'text-danger'}>Numeric must : 0-9</div>
            <div className= {symbol ? 'text-success' : 'text-danger'}>special must : @#$&*</div>
            <div className= {length ? 'text-success' : 'text-danger'}>length must : 8 or more</div>
        </div>
        <Button variant='outline-primary' disabled={!isValid}>Signup</Button>
    </div>
  )
}

export default Signup;