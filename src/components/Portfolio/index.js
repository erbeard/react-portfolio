import React from "react";
import fitnessTrackerImage from "../../assets/small/fitness-tracker.PNG";
import passwordGeneratorImage from "../../assets/small/password-generator.PNG";
import weatherDashboardImage from "../../assets/small/weather-dashboard.PNG";
import dayPlannerImage from "../../assets/small/day-planner.PNG";


function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Work</h2>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href=" https://fast-sands-93958.herokuapp.com/">
                {" "}
                <img
                  src={fitnessTrackerImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="fitness-tracker"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Fitness Tracker</h4>
              <p>
              This application will allow people to track their fitness goals through their phones. Give users the ability to track their Heart Rate, Steps, Distance, Weight and Sleep. A visual tool for users to be able to see when they achieve their fitness goals.

              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://erbeard.github.io/day-planner/">
                {" "}
                <img
                  src={dayPlannerImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="day-planner"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Day Planner</h4>
              <p>
                A HTMl, CSS, and Javascript application that gives users the ability to plan your workday by the hour. This application displays the standard business hours (9 a.m. to 5 p.m.). Each time slot represents one hour and contains: Time, Field for User Input, & Save Button. {" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://erbeard.github.io/weather-dashboard/">
                {" "}
                <img
                  src={weatherDashboardImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Weather_Dashboard"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Weather Dashboard</h4>
              <p>
                A website that allows the user see the weather outlook for
                multiple cities. The user can enter a city and see a 5-Day
                Forecast. The user can see the temperature, humidity levels,
                wind speed as well as the UV index.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://erbeard.github.io/password-generator/">
                {" "}
                <img
                  src={passwordGeneratorImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="PasswordGenerator"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Password Generator</h4>
              <p>
              This website will provide a randomly generated password based on a selected number of characters betweeen 8 and 128 characters. User will be prompted on whether they would like to include Numbers, Special Characters, Lowercase & Uppercase letter{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;