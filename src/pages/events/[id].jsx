import React from "react";
import { useParams } from 'react-router-dom';
export default function EventDetails() {
    let { id } = useParams();
    return (
        <div className="">
            <section className="section">
                    <div className="container mx-auto px-4 py-6">
                <div className="max-w-4xl mx-auto px-4">
                        <div className="">
                            <div className="card-img">
                                <img src="/assets/images/faculty.jpg" alt="" className=" w-full" />
                            </div>
                            <div className="card-body my-5 px-4">
                                <h3 className="event-title font-semibold text-4xl mb-5">
                                    Events title here
                                </h3>
                                <p className="text-lg mb-5">
                                    February 2020
                                </p>
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