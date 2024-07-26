import { useRef, useState } from "react";
import Input from "./Input";
import { hasMinLength, isEmail, isNotEmpty } from "../util/validation";
import useInput from "./hooks/useInput";

export default function Login() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError:emailHasError
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));
  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError:passwordHasError
  } = useInput("", (value) => hasMinLength(value, 6));

  const handleSubmit = (event) => {
    event.preventDefault();
    if(emailHasError || passwordHasError) {
      return
    }
    console.log(emailValue,passwordValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">

        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <Input
          id="email"
          type="email"
          name="email"
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={emailValue}
          error={emailHasError && "please enter a valid email !!!"}
        />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <Input
            id="password"
            type="password"
            name="password"
            onChange={handlePasswordChange}
            onBlur={handlePasswordBlur}
            value={passwordValue}
            error={passwordHasError && "please enter a valid password !!!"}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}

// !by using ref

// export default function Login() {
//   const [emailIsInvalid,setEmailIsInvalid]=useState(false)
//   const email = useRef();
//   const password = useRef();
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const enteredEmail = email.current.value;
//     console.log("🚀 ~ handleSubmit ~ enteredEmail:", enteredEmail)
//     const enteredPassword = password.current.value;

//     const  emailIsValid = enteredEmail.includes('@')
//     if(!emailIsValid){
//       setEmailIsInvalid(true)
//       return;
//         }
//         setEmailIsInvalid(false);
//   };
// console.log(emailIsInvalid);
//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Login</h2>

//       <div className="control-row">
//         <div className="control no-margin">
//           <label htmlFor="email">Email</label>
//           <input id="email"  name="email" ref={email}/>
//           <div className="control-error">{emailIsInvalid && <p>email is not valid</p>}</div>
//         </div>

//         <div className="control no-margin">
//           <label htmlFor="password">Password</label>
//           <input id="password" type="password" name="password" ref={password} />

//         </div>
//       </div>

//       <p className="form-actions">
//         <button className="button button-flat">Reset</button>
//         <button className="button">Login</button>
//       </p>
//     </form>
//   );
// }

// !generic way
// export default function Login() {
//   // const [enteredEmail, setEnteredEmail] = useState("");
//   // const [enteredPassword, setEnteredPassword] = useState("");

//   const[enteredValues, setEnteredValues] = useState({
//     email: '',
//     password: '',
//   })
//   const handleSubmit = (event) => {
//     event.preventDefault();
// console.log(enteredValues);
//   };
//   const handleInputChange= (identifier,event) => {
//     setEnteredValues(prevValues=>({...prevValues, [identifier]: event.target.value}))
//   };
//   // const handleChangeEmail = (event) => {
//   //   setEnteredEmail(event.target.value);
//   // };
//   // const handleChangePassword = (event) => {
//   //   setEnteredPassword(event.target.value);
//   // };
//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Login</h2>

//       <div className="control-row">
//         <input label=''Email id="email" type="email" name="email"/>
//         <div className="control no-margin">
//           <label htmlFor="email">Email</label>
//           <input
//             id="email"
//             type="email"
//             name="email"
//             // onChange={handleChangeEmail}
//             onChange={(event)=>handleInputChange('email',event)}
//             // value={enteredEmail}
//             value={enteredValues.email}
//           />
//         </div>

//         <div className="control no-margin">
//           <label htmlFor="password">Password</label>
//           <input
//             id="password"
//             type="password"
//             name="password"
//             // value={enteredPassword}
//             // onChange={handleChangePassword}
//             onChange={(event)=>handleInputChange('password',event)}
//             value={enteredValues.password}

//           />
//         </div>
//       </div>

//       <p className="form-actions">
//         <button className="button button-flat">Reset</button>
//         <button className="button">Login</button>
//       </p>
//     </form>
//   );
// }

// other way
// import { useState } from "react";

// export default function Login() {
//   const [enteredEmail, setEnteredEmail] = useState("");
//   const [enteredPassword, setEnteredPassword] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const email = formData.get("email");
//     const password = formData.get("password");

//     setEnteredEmail(email);
//     setEnteredPassword(password);

//     console.log("🚀 ~ Login ~ enteredEmail:", email);
//     console.log("🚀 ~ Login ~ enteredPassword:", password);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Login</h2>

//       <div className="control-row">
//         <div className="control no-margin">
//           <label htmlFor="email">Email</label>
//           <input
//             id="email"
//             type="email"
//             name="email"
//             defaultValue={enteredEmail}
//           />
//         </div>

//         <div className="control no-margin">
//           <label htmlFor="password">Password</label>
//           <input
//             id="password"
//             type="password"
//             name="password"
//             defaultValue={enteredPassword}
//           />
//         </div>
//       </div>

//       <p className="form-actions">
//         <button className="button button-flat">Reset</button>
//         <button type="submit" className="button">Login</button>
//       </p>
//     </form>
//   );
// }
