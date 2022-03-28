import React,{useState} from 'react'
import './LoginPage.css'
import './LoginPageResponsive.css'
import Registration from './Registration'


function LoginPage() {

      const [signUp, setSignUp] = useState(false)

      const signUpHandler = () => {
          setSignUp(true)
      }

      const submitHandler = (e) => {
          e.preventDefault()
      }


  return (
    <div className='login-page__wrapper'>

<div className="login-left__wrapper">
       {!signUp ? <div className="login-page__content">
          <div className="login-page__logo">
            <img src={require('../../pictures/logo.png')} alt="logo" />
          </div>
          <div className="login-page__welcome">
            <h1>Welcome back</h1>
            <a href="#">Sign in to your account</a>
          </div>
          <form className="login-inputs__form" onSubmit={submitHandler}>
            <div className="inputs">
            <input type="text"  placeholder='Username'/>
            <input type="password" placeholder='Password'/>
            </div>
         
            <div className="remember-and-forgot-password">
              <div className="remember-password">
                <input type="checkbox" />
                <p>Remember password</p>
              </div>
              
              <a href="#">Forgot password</a>
           
            </div>

            <button>Sign in</button>
            <div className="sign-up"><p>Don’s have an account?</p> <a href="#" onClick={signUpHandler}>Sign Up</a></div>
          </form>
        </div>
        : <Registration setSignUp={setSignUp}/> }
        </div>




 
        <div className="login-right__wrapper"> 
        
        <div className="welcome-sircles">
      
                <div className="elipse1">
                  <div className="elipse2">
                    <div className="elipse3">
                      <div className="elipse4">
                        <div className="elipse5">
                          <img src={require('../../pictures/Ellipse 5.png')} alt="elipse" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <img className='ellipse6' src={require('../../pictures/Ellipse 6.png')} alt="elipse5" />
                <img className='ellipse7' src={require('../../pictures/Ellipse 7.png')} alt="elipse5" />
                <img className='ellipse8' src={require('../../pictures/Ellipse 8.png')} alt="elipse5" />
                <img className='ellipse9' src={require('../../pictures/Ellipse 9.png')} alt="elipse5" />
                <img className='ellipse10' src={require('../../pictures/Ellipse 10.png')} alt="elipse5" />
        </div>
        
         </div>
    </div>
  )
}

export default LoginPage