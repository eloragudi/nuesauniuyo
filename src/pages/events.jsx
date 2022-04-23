import React from "react"
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
                        <div className="events-card flex flex-col sm:flex-row my-4">
                            <div className="card-img w-full sm:w-5/12">
                                <img src="/assets/images/faculty.jpg" alt="" className="" />
                            </div>
                            <div className="card-body w-full sm:w-6/12 px-4 py-5">
                                <h3 className="event-title font-semibold text-3xl mb-5">
                                    Events title here
                                </h3>
                                <p className="text-lg">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    Magni veniam delectus soluta placeat neque facere quo,
                                    facilis temporibus iusto nulla enim incidunt excepturi eum dolor possimus, velit error!
                                    Consequuntur beatae debitis quas nesciunt eaque ratione veritatis. Maxime accusamus voluptates sequi.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}