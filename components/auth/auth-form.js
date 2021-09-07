import { useState, useRef } from "react";
import { signIn } from "next-auth/client";
import FadeLoader from "react-spinners/FadeLoader";
import { css } from "@emotion/react";

// import { useRouter } from "next/router";
import classes from "./auth-form.module.css";

async function createUser(email, password, confirmPassword) {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ email, password, confirmPassword }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.error || "Something went wrong!");

  return data;
}

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [signUpError, setSignUpError] = useState('');
  const [signInError, setSignInError] = useState('');


  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();

  // const router = useRouter();

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  async function submitHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    if (isLogin) {
      setLoading(!loading);
      const result = await signIn("credentials", {
        redirect: false,
        email: enteredEmail,
        password: enteredPassword,
      });

      // console.log(result);
      
      if(result.error) {
        setSignInError(result.error);
        setLoading(false)
      }

      if (!result.error) {
        // router.replace('/') //replace the current url with a different one
        history.back();
      }
      setLoading(!loading);
    } else {
      try {
        const enteredConfirmPassword = confirmPasswordInputRef.current.value;
        //check if existing email
        setLoading(true);
        const result = await createUser(
          enteredEmail,
          enteredPassword,
          enteredConfirmPassword
        );
        // console.log(result);

        if(result.error){
          setLoading(false);
          setSignUpError(result.error);
          return;
        }

        emailInputRef.current.value = "";
        passwordInputRef.current.value = "";
        confirmPasswordInputRef.current.value = "";
        history.back();
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <section className={classes.auth}>
      {loading && <FadeLoader loading={loading} color="#C5C5C5" />}
      {isLogin ? (
        <>
          <h1>Login</h1>
          {signInError !== null && <p style={{color:'red'}}>{signInError}</p>}
          <form onSubmit={submitHandler}>
            <div className={classes.control}>
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" required ref={emailInputRef} />
            </div>
            <div className={classes.control}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                required
                ref={passwordInputRef}
              />
            </div>
            <div className={classes.actions}>
              <button>{isLogin ? "Login" : "Create Account"}</button>
              <button
                type="button"
                className={classes.toggle}
                onClick={switchAuthModeHandler}
              >
                {isLogin ? "Create new account" : "Login with existing account"}
              </button>
            </div>
          </form>
        </>
      ) : (
        <>
          <h1>Sign Up</h1>
          {signUpError !== null && <p style={{color:'red'}}>{signUpError}</p>}
          <form onSubmit={submitHandler}>
            <div className={classes.control}>
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" required ref={emailInputRef} />
            </div>
            <div className={classes.control}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                required
                ref={passwordInputRef}
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="password">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                required
                ref={confirmPasswordInputRef}
              />
            </div>
            <div className={classes.actions}>
              <button>{isLogin ? "Login" : "Create Account"}</button>
              <button
                type="button"
                className={classes.toggle}
                onClick={switchAuthModeHandler}
              >
                {isLogin ? "Create new account" : "Login with existing account"}
              </button>
            </div>
          </form>
        </>
      )}
    </section>
  );
}

//   return (
//     <section className={classes.auth}>
//       {loading && <FadeLoader loading={loading} color='#C5C5C5'/>}
//       <h1>{isLogin ? "Login" : "Sign Up"}</h1>
//       <form onSubmit={submitHandler}>
//         <div className={classes.control}>
//           <label htmlFor="email">Your Email</label>
//           <input type="email" id="email" required ref={emailInputRef} />
//         </div>
//         <div className={classes.control}>
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             required
//             ref={passwordInputRef}
//           />
//         </div>
//         <div className={classes.control}>
//           <label htmlFor="password">Confirm Password</label>
//           <input
//             type="password"
//             id="confirmPassword"
//             required
//             ref={confirmPasswordInputRef}
//           />
//         </div>
//         <div className={classes.actions}>
//           <button>{isLogin ? "Login" : "Create Account"}</button>
//           <button
//             type="button"
//             className={classes.toggle}
//             onClick={switchAuthModeHandler}
//           >
//             {isLogin ? "Create new account" : "Login with existing account"}
//           </button>
//         </div>
//       </form>
//     </section>
//   );
// }

export default AuthForm;
