import React from "react";
import "./style.css";
import foodFinder from "../../assets/img/FoodFinder.png";
import animalCrossing from "../../assets/img/AnimalCrossingLoginScreenshot.38049827.png";
import avatarScreen from "../../assets/img/quiz-screenshot3.png";
import weatherScreen from "../../assets/img/weather-screenshot.png";
import resumeScreen from "../../assets/img/resume-screenshot.png";
import passwordScreen from "../../assets/img/pass-generator.png";

const Portfolio = () => {
    return (
<div className="row">

  <div className="col-lg-4 col-md-6">
    <div className="portfolio-item">
      <row>
        <a target="_blank" rel="noreferrer" className="github-link col-12" href="https://github.com/B-Audette/animal_crossing_dream_island" data-toggle="tooltip" data-placement="top" title data-original-title="Open GitHub repository">
          <p className="title miami-nights">Tim &amp; Eric and Tea's Awesome Food Finder, Great Job!</p>
        </a>
        <a target="_blank" rel="noreferrer" href="https://floating-earth-07738.herokuapp.com/login" data-toggle="tooltip" data-placement="top" title data-original-title="Click to go to deployed project">
          <img src={animalCrossing} className="portfolio-picture" />
        </a>
        <br />
        <p>
          Learn about Animal Crossing Villagers and add to your Dream Island
        </p>
      </row>
    </div>
  </div>
  <div className="col-lg-4 col-md-6">
    <div className="portfolio-item">
      <row>
        <a className="github-link col-12" href="https://github.com/EricJamesOsowski/js-timed-quiz" data-toggle="tooltip" data-placement="top" title data-original-title="Open GitHub repository">
          <p className="title miami-nights">Avatar Quiz </p>
        </a>
        <a href="https://ericjamesosowski.github.io/js-timed-quiz/" data-toggle="tooltip" data-placement="top" title data-original-title="Click to go to deployed project">
          <img src={avatarScreen} className="portfolio-picture" />
        </a>
        <br />
        <p>
          A 60 second JavaScript based quiz on Avatar The Last Airbender.
        </p>
      </row>
    </div>
  </div>
  <div className="col-lg-4 col-md-6">
    <div className="portfolio-item">
      <row>
        <a target="_blank" rel="noreferrer" className="github-link col-12" href="https://github.com/EricJamesOsowski/city-based-forecast-search" data-toggle="tooltip" data-placement="top" title data-original-title="Open GitHub repository!">
          <p className="title miami-nights">Weather Forecast</p><br /><br />
        </a>
        <a target="_blank" rel="noreferrer" href="https://ericjamesosowski.github.io/city-based-forecast-search/" data-toggle="tooltip" data-placement="top" title data-original-title="Click to go to deployed project">
          <img src={weatherScreen} className="portfolio-picture" />
        </a>
        <br />
        <p>
          Five day weather forecast for user searched city, with user search history.
        </p>
      </row>
    </div>
  </div>
  <div className="col-lg-4 col-md-6">
    <div className="portfolio-item">
      <row>
        <a target="_blank" rel="noreferrer" className="github-link col-12" href="https://github.com/EricJamesOsowski/PasswordGenerator" data-toggle="tooltip" data-placement="top" title data-original-title="Open GitHub repository">
          <p className="title miami-nights">Password Generator</p>
        </a>
        <a target="_blank" rel="noreferrer" href="https://ericjamesosowski.github.io/PasswordGenerator/" data-toggle="tooltip" data-placement="top" title data-original-title="Click to go to deployed project">
          <img src={passwordScreen} className="portfolio-picture" />
        </a>
        <br />
        <p>
          Takes user parameters and generates a unique, custom, randomized password.
        </p>
      </row>
    </div>
  </div>
  <div className="col-lg-4 col-md-6">
    <div className="portfolio-item">
      <row>
        <a target="_blank" rel="noreferrer" className="github-link col-12" href="https://github.com/dfkestner/Food-Finder" data-toggle="tooltip" data-placement="top" title data-original-title="Open GitHub repository">
          <p className="title miami-nights">Tim &amp; Eric and Tea's Awesome Food Finder, Great Job!</p>
        </a>
        <a target="_blank" rel="noreferrer" href="https://dfkestner.github.io/Food-Finder/" data-toggle="tooltip" data-placement="top" title data-original-title="Click to go to deployed project">
          <img src={foodFinder} className="portfolio-picture" />
        </a>
        <br />
        <p>
          Search for local restaurants, or recipes!
        </p>
      </row>
    </div>
  </div>
  <div className="col-lg-4 col-md-6">
    <div className="portfolio-item">
      <row>
        <a target="_blank" rel="noreferrer" className="github-link col-12" href="./assets/resume-screenshot.png">
          <p className="title miami-nights">My Resume</p>
        </a>
        <a href="/resume">
          <img src={resumeScreen} className="portfolio-picture" />
        </a>
        <br />
        <p>
          Eric Osowski's Resume
        </p>
      </row>
    </div>
  </div>
  <row>
    <p></p> <br></br><br></br>
  </row>
</div>

    );
};

export default Portfolio;