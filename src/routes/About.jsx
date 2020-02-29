import React from "react";
import ImgBlock from '../components/AboutPage/ImgBlock'
import TextBlock from '../components/AboutPage/TextBlock'

const About = () => {
  return <>
    <div className="container text-center">
      <div className="py-5">
        <h1><i className="fa-2x fas fa-mug-hot" /></h1>
        <h1 className=' px-sm-4'> Appointment APP</h1>
      </div>
      <div className="row">
        <ImgBlock img={"./images/pic2.png"} />
        <TextBlock text={"Check Appointments"} text1={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda minima aliquam quis dolorem et maxime. Quasi cumque magni dolorem! Repudiandae.'} />
        <TextBlock text={"Choose the best"} text1={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda minima aliquam quis dolorem et maxime. Quasi cumque magni dolorem! Repudiandae.'} />
        <ImgBlock img={"./images/pic1.png"} />
        <ImgBlock img={"./images/pic4.png"} />
        <TextBlock text={"Book Them"} text1={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda minima aliquam quis dolorem et maxime. Quasi cumque magni dolorem! Repudiandae.'} />
        <TextBlock text={"Enjoy"} text1={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda minima aliquam quis dolorem et maxime. Quasi cumque magni dolorem! Repudiandae.'} />
        <ImgBlock img={"./images/pic3.png"} />
      </div>
    </div>
  </>
};

export default About;
