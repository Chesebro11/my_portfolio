import React from 'react';
import styledComponents from 'styled-components';

const AboutStyles = styledComponents.about`
    display: flex;
    margin-top: 3rem;
    @media screen and (max-width: 1000px){
        flex-direction: column;
        img-content{
            margin-bottom: 2rem;
        }
    }
    .img-content{
        width: 100%;

        img{
            width: 90%;
            object-fit: cover;
        }
    }
    .about-content{
        .button{
            padding-top; 3rem;
            a{
                font-size: 1rem;
            }
        }
    }
    h4{
        font-size: 2.5rem;
        color: var(--font-dark);
    }
    .paragraph{
        padding: 1rem 0;
        color: var(--font-dark);
    }
    .basic-info{
        display: flex;
        .info-title{
            padding-right: .5rem;
            color: var(--font-dark);
            p{
                font-weight: bolder;
            }
        }
    }
    .info-title, .info{
        p{
            padding: .2rem 0;
            color: var(--font-dark);
            @media screen and (max-width: 375px){
            font-size: 7rem
            }
        }
    }
`

function About() {
    return (
        <AboutStyles>
            <div className='img-content'>
                <img alt=''></img>
            </div>
            <div className='about-content'>
                <h4>About Me</h4>
                <p className='about-paragraph'>
                    Hello, my name is Jared Chesebro and I am an aspriring game developer currently living in Portland, Oregon!
                    I grew up in Houston, Texas and moved to a small town west of Portland when I was fourteen years old and I have lived in the area ever since!
                    I have spent a lot of my free time throughout my life with computers and video games, because of this I have always dreamed of one day developing my own video games
                    and after spending about 6 years in the food industry I have spent the better part of a year learning javascript and web development to begin changing my career path!
                </p>
                <div className='basic-info'>
                    <div className='info-title'>
                        <p>Name</p>
                        <p>Age</p>
                        <p>Location</p>
                        <p>School</p>
                        <p>Current Employment</p>
                        <p>Favorite Hobby</p>
                    </div>
                    <div className='info'>
                    <p>:    Jared Chesebro'</p>
                    <p>:    22</p>
                    <p>:    Portland, Oregon</p>
                    <p>:    University Of Oregon</p>
                    <p>:    Cook / Freelance Programmer</p>
                    <p>:    Gaming</p>
                    </div>
                    {/* need to get materialui */}
                    {/* <div className='button'>
                        <button variant='contained' size='large'>
                            <a href='google.com' target='_blank' rel='noopener noreferrer'>Click to see my resume!</a>
                        </button>
                    </div> */}
                </div>
            </div>
        </AboutStyles>
    )
}

export default About;