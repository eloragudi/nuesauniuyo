import React from "react";
import { Link } from "react-router-dom";
export default function EventsCard({data}) {
    console.log(data)
    return (
        <div className="">
            <div className="events-card flex flex-col sm:flex-row my-4">
                <div className="card-img w-full sm:w-5/12">
                    <img src={`/assets/images/${data.image}.jpg`} alt="" className="" />
                </div>
                <div className="card-body w-full sm:w-6/12 px-4 py-5">
                    <Link to={`/events/${data.id}`}>
                        <h3 className="event-title font-semibold text-3xl mb-5">
                            {data.title}
                        </h3>
                    </Link>
                    <p className="text-lg">
                        {data.description}
                    </p>
                </div>
            </div>
        </div>
    )
}