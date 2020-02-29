import React from "react";

const Contact = () => {
  return <div className="container text-center">
    <h1 className="display-4 p-5">
      Reach Us Here
        </h1>
    <div className="row ">
    </div>
    <div className="row">
      <div className="col-md-6">
        <img src="./images/mail.webp" className='img-fluid' alt="" />
        <p>We look forward to connecting! Just tell us a little about yourself.</p>
      </div>

      <div className="col-md-6">

        <form action="">
          <div className="form-group">
            <input
              className="form-control form-control-lg my-2"
              type="text"
              placeholder="Name"
            />
            <input
              className="form-control form-control-lg my-2"
              type="text"
              placeholder="Email"
            />
            <input
              className="form-control form-control-lg my-2"
              type="text"
              placeholder="Subject"
            />
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            <button
              type="button"
              className="btn btn-lg btn-primary border btn-block text-center my-1"
            >Submit</button>
          </div>
        </form>
      </div>
    </div>
    <p className="lead text-center">
      Or
    </p>
    <div className="row align-items-center text-left">
      <div className="col-md-6 d-flex justify-content-center"><img src="./images/mail.gif" className='img-fluid' width='150px' alt="" /></div>
      <div className="col-md-6 col-sm-12"><h4>Send Mail Directly here : </h4>
        <p className='lead'>demo@gmail.com</p></div>
    </div>
  </div>
};

export default Contact;
