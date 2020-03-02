import React from "react";
import ImgBlock from "../components/AboutPage/ImgBlock";
import TextBlock from "../components/AboutPage/TextBlock";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container my-5">
          <div className={styles.bgHome}>
            <div className="row justify-content-center align-items-center h-100 ">
              <div className="col-md-6 text-center mt-3 text-dark ">
                <h1>
                  <i className="fa-2x fas fa-mug-hot " />
                </h1>
                <h1 className=""> Appointment APP</h1>
                <p className="lead">
                  Created with <i className="fas fa-heart" />
                </p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <ImgBlock img="./images/clock.png" />
              <TextBlock text={"Never ask 'What time works for you?' again"} />

              <TextBlock
                text="Individual Appointment"
                text1="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, qui."
              />
              <ImgBlock img="./images/meet1.png" />

              <ImgBlock img="./images/meet2.png" />
              <TextBlock
                text="Appointment for Someone else"
                text1="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, qui."
              />

              <TextBlock
                text="MeetUp Booking"
                text1="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, qui."
              />
              <ImgBlock img="./images/meet3.png" />
            </div>
            <div className="row justify-content-center">
              <div className="col-md-8 text-center">
                <p className="lead m-5">Simple Steps</p>
              </div>
              <div className="col-md-12 m-5">
                <div className="row text-center">
                  <div className="col-md-4">
                    <img
                      src="./images/step1.png"
                      className="img-fluid"
                      width="200px"
                      alt=""
                    />
                    <div className="my-4">
                      <h1>Open App</h1>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <img
                      src="./images/step2.png"
                      className="img-fluid"
                      width="200px"
                      alt=""
                    />
                    <div className="my-4">
                      <h1>Select Slots</h1>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <img
                      src="./images/step3.png"
                      className="img-fluid"
                      width="200px"
                      alt=""
                    />
                    <div className="my-4">
                      <h1>Enjoy</h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row text-center" />
            </div>
          </div>
        </div>
        <div className="container text-center py-3">
          <h1 className="m-5"> Use for </h1>
          <div className="row bg-white rounded justify-content-around">
            <div className="p-3">
              <i className="fa-3x m-3 fas fa-syringe " />
              <p>Doctor</p>
            </div>
            <div className="p-3">
              <i className="fa-3x m-3 fas fa-wrench" />
              <p>Mechanic</p>
            </div>
            <div className="p-3">
              <i className="fa-3x m-3 fas fa-chalkboard-teacher" />
              <p>Tutor</p>
            </div>
            <div className="p-3">
              <i className="fa-3x m-3 fas fa-address-book" />
              <p>Book Reading</p>
            </div>
            <div className="p-3">
              <i className="fa-3x m-3 fas fa-chess" />
              <p>Game Slots</p>
            </div>
            <div className="p-3">
              <i className="fa-3x m-3 fas fa-handshake" />
              <p>Meet Friends</p>
            </div>
            <div className="p-3">
              <i className="fa-3x m-3 fas fa-hiking" />
              <p>Events</p>
            </div>
            <div className="p-3">
              <i className="fa-3x m-3 fas fa-user-friends" />
              <p>Appointment</p>
            </div>
            <div className="p-3">
              <i className="fa-3x m-3 fas fa-users" />
              <p>Meetups</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
