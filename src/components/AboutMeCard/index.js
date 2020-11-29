import React from "react";
import "./style.css";
import myBabyEric from "../../assets/img/babyEric.JPG"
import Image from '../../assets/img/vaporwave-background.jpg'; 


const AboutMe = () => {
    return (
            <div className="container card backround" styles={{ backgroundImage: `url(${Image})` }} >
                <div className="content-padding">
                    <div className="row heading-underline">
                        <h2 id="about">Aboot meh</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col saxophone-solo-in-an-empty-street-at-night-under-a-full-moon">
                    <img src={myBabyEric} alt="Baby Eric" className="wrap left-text" /><span className="styled-text">I am a lifelong student, insatiably curious about what makes the world and its many facets tick. <br /><br />Currently I am going through the University of Minnesota's Full Stack Coding Bootcamp. I am excited to learn more about the software that runs our daily lives, and how to use those tools to empower myself and others. Having worked as a manager in food service, an automotive mechanic, and a licensed professional massage therapist, I draw on my wide range of experiences to relate to new concepts in novel ways. <br /><br />Through working with people in various fields and from diverse backgrounds I have been able to practice active listening and understanding the needs of others, and the importance of interpersonal relations, mutual understanding and managing expectations as well as leveraging a strong platform of communication to achieve these goals.</span>
                    </div>
                </div>
            </div>
    );
};

export default AboutMe;