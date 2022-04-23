import React from "react"
import EventsCard from "../components/EventsCard"
export default function Eventspage() {
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
                            Array(6).fill(1).map((item, i) => {
                                return (<EventsCard key={i} />)
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}