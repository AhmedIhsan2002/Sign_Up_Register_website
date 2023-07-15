import React from 'react'
import './signup.css'
import Container from '../../components/Container/Container'
import { Logoimg } from '../../components/Container/Logo'
import Text from '../../components/TextGroup/Text'
import TitleGroup from '../../components/Titlegame/Title'
import SignUp from '../../components/SignUp'
export const SignUP_Page = () => {
  
  return (
    <section className='Sign-sec'>
   
        <div className='box1'>
            <div className='weeget1'>
                <div className='overlay'>
                    <Container>
                    <div>
                    <Logoimg />
                    </div>
                    <div className='text-sign'>
                <div className='te'>
            
              <p style={{
                color:'#fff',
                marginTop:'120px',
                lineHeight:'38px',
                fontSize:'17px',
                width: '473px',
                height: '164px',
                marginBottom:'30px'
              }}>
               "“ I always observe the people who pass by when I ride an escalator. I'll never see most of them again, so I imagine a lot of things about their lives... about the day ahead of them." 
              </p>
                </div>
                    <h5>Hideo Kojima</h5>

                    <div className='arrow'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="33" viewBox="0 0 34 33" fill="none">
  <path d="M21 0H33.5V33H0V20.5H21V0Z" fill="white"/>
</svg>
                    </div>
                    </div>
                    </Container>
                </div>
            </div>
        </div>

        <div className="box2">
          <div className='links'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
             <path d="M14.8625 3.225L13.3791 1.75L5.13745 10L13.3875 18.25L14.8625 16.775L8.08745 10L14.8625 3.225Z" fill="#8692A6"/>
            </svg>
          <a href="/">Back</a>
          </div>

       <div className='title'>
       <div className="text">
            <TitleGroup 
            
        cildern={
          <>
            <h2>Register Individual Account!</h2>

            <h5>For the purpose of gamers regulation, your <br /> details are required.</h5>
           
          </>
        }
            
            />
          </div>
          
       </div>

        <div className='signup_div'>
        <SignUp />
        </div>

        </div>
      
    </section>
  )
}
