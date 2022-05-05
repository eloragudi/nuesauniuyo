import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
export default function EventDetails() {
    let { id } = useParams();
    const [event, setEvent] = useState({
        id: 0,
        title: "",
        image: "",
        description: "",
        note: ""
    })
    useEffect(() => {        
        fetch(`https://nuesauniuyo-api.herokuapp.com/events/${id}`)
        .then(res => res.json())
        .then(data => setEvent(data))
    }, [])
    // .then(data => console.log(data))
    return (
        <div className="">
            <section className="section">
                <div className="container mx-auto px-4 py-6">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="">
                            <div className="card-img">
                                <img src={`/assets/images/${event.image}.jpg`} alt="" className=" w-full" />
                            </div>
                            <div className="card-body my-5 px-4">
                                <h3 className="event-title font-semibold text-4xl mb-5">
                                    {event.title}
                                </h3>
                                <p className="text-lg mb-5">
                                    February 2020
                                </p>
                                <div className="desc-container">
                                    {event.description}
                                    </div>
                                <div className="note-container" dangerouslySetInnerHTML={{__html: event.note}}>
                                    {/* {event.note} */}
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}