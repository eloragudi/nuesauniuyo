import React, { useEffect, useState } from "react"
import EventsCard from "../components/EventsCard";


export default function Eventspage() {
    const [events, setEvents] = useState([])
    useEffect(() => {        
        fetch(`https://nuesauniuyo-api.herokuapp.com`)
        .then(res => res.json())
        .then(data => setEvents(data))
    }, [])
    return (
        <div className="">
            <section className="">
                <div className="container mx-auto px-4">
                    <div className="text-center my-5">
                        <h2 className="font-bold text-3xl md:text-4xl">
                            Our Events
                        </h2>
                        <p className="text-xl">
                            Check out all our events
                        </p>
                    </div>
                    <div className="my-10">
                        {
                            events.map((item, i) => {
                                return (<EventsCard data={item} key={i} />)
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}