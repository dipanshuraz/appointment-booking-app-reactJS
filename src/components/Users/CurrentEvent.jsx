import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
class CurrentEvent extends React.Component {


    constructor(props) {
        super(props);
    }





    render() {
        const event = this.props.event;
        const date = this.props.date;

        // console.log(this.props.event);
        // console.log(this.props.date);

        let today_events = event.filter((ele) => {

            // yyyy-mm-dd
            let arr = ele.date.trim().split("-").map(ele => Number(ele));
            //chrome ->  dd/mm/yyyy  firefox --> mm/dd/yyyy
            let today_date = date.trim().split("/").map(ele => Number(ele));

            if (arr[0] === today_date[2] && arr[1] === today_date[1] && arr[2] === today_date[0])
                return ele;
        })

        let content = today_events.map((ele) => (
            <div className="card col-sm-12 col-md-6 col-lg-4 " key={ele.eid}>
                <div className="card-body">
                    <h3 className="card-title text-danger text-center">
                        {ele.name}
                    </h3>
                    <h4 className="card-title text-center">{ele.type}</h4>
                    <h5 className="card-title text-center">{(ele.date)}</h5>
                    <h6 className="card-title text-center">{ele.venue}</h6>
                </div>
                <div className="card-footer bg-white">
                    <Link className="btn btn-outline-info btn-block" to={`/dash/book/${ele.eid}`} >
                        Book Now
                    </Link>
                </div>
            </div>

        ))

        // console.log("contents", content);

        return (
            <>
                <h2 className="text-center">Current Event</h2>


                <div className="card-group row m-0 p-0">
                    {content}
                </div>
            </>
        )
    }
}


export default CurrentEvent