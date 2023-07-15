import React from 'react'
import Container from '../../components/Container/Container'
import { Logoimg } from '../../components/Container/Logo/index'
import Text from '../../components/TextGroup/Text'
import TitleGroup from '../../components/Titlegame/Title'
import { Icon } from '../../components/Icon_Soical/Icon'
import Login from '../../components/Login/index'
import './loginpage.css'
export const LoginPage = () => {
  return (
    <div>
        <Container>
        <div>
        <Logoimg />
        </div>

        <section className='Text-sec'>
            <div className='box'>
                <Text text="“
                I always observe the people who pass by when I 
                 ride an escalator. I'll never see most of them 
                 again, so I imagine a lot of things about their 
                 lives... about the day ahead of them.
                " />
                    <h5>Hideo Kojima</h5>
            </div>

        

        <div className='boxing'>
        <div className="text">
            <TitleGroup 
            
        cildern={
          <>
            <h2>Join the game!</h2>

            <h5>Go inside the best gamers social network!</h5>
           
          </>
        }
            
            />
          </div>

          <div>
            <Icon />
          </div>

          <div>
            <Login />
          </div>

            </div>
        
         
        </section>
        <div className='superscene'></div>
        </Container>
    </div>
  )
}
