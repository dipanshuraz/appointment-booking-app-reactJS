import React from "react";

const UserDashboard = () => {
  return (
    <div className="container">
      <h1 className="text-center">User Dashboard</h1>
      <div className="d-md-flex justify-content-between bg-light my-5">
        <div>
          <button className=" btn btn-outline-secondary" type="button">
            Sort By <i className="fas fa-long-arrow-alt-up" />
          </button>
        </div>
        <div>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2 "
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0 "
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      <div className="row">
        <div className="card-group">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h3 className="card-title text-danger">JavaScript Meetup</h3>
                <div>
                  <i className="far fa-bookmark" />
                </div>
              </div>

              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div className="card-footer bg-white">
              <button className="btn btn-outline-info btn-block" type="button">
                Details
              </button>
              <button
                className="btn btn-outline-success btn-block"
                type="button"
              >
                Book
              </button>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h3 className="card-title text-danger">JavaScript Meetup</h3>
                <div>
                  <i className="far fa-bookmark" />
                </div>
              </div>

              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div className="card-footer bg-white">
              <button className="btn btn-outline-info btn-block" type="button">
                Details
              </button>
              <button
                className="btn btn-outline-success btn-block"
                type="button"
              >
                Book
              </button>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h3 className="card-title text-danger">JavaScript Meetup</h3>
                <div>
                  <i className="far fa-bookmark" />
                </div>
              </div>

              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div className="card-footer bg-white">
              <button className="btn btn-outline-info btn-block" type="button">
                Details
              </button>
              <button
                className="btn btn-outline-success btn-block"
                type="button"
              >
                Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
