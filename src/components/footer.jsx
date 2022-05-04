import React from "react";
import { Link } from "react-router-dom";


export default function Footer() {
    return (
        <footer className="bg-yellow-600 text-white">
            <div className="container mx-auto py-5 px-4">
                <div className="flex items-center gap-1 sm:gap-2">
                    <img src="/assets/images/logo.png" alt="" className="w-14 sm:w-16" />
                    <span className="font-semibold text-lg sm:text-xl">NUESA UNIUYO</span>
                </div>
                <div className="flex flex-col sm:flex-row items-start justify-between gap-10 w-full">
                    <div className="">
                        <p className="my-4 text-lg max-w-sm">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque facere fugit neque vero repellendus eligendi, eius corrupti quos ullam blanditiis.
                        </p>
                    </div>
                    <ul className="flex flex-col gap-3 sm:gap-5 text-xl font-medium">
                        <li className="">
                            <Link to='/'>Home</Link>
                        </li>
                        <li className="">
                            <Link to='/history'>History</Link>
                        </li>
                        <li className="">
                            <Link to='/events'>Events</Link>
                        </li>
                    </ul>
                    <div className="">
                        <ul className="flex items-center gap-8">
                            <li className="">
                                <a href="http://" className="" target="_blank" rel="noopener noreferrer">
                                    <i class="fab fa-facebook text-2xl text-[#00ff00]"></i>
                                </a>
                            </li>
                            <li className="">
                                <a href="http://" className="" target="_blank" rel="noopener noreferrer">
                                    <i class="fab fa-twitter text-2xl"></i>
                                </a>
                            </li>
                            <li className="">
                                <a href="http://" className="" target="_blank" rel="noopener noreferrer">
                                    <i class="fab fa-instagram text-2xl"></i>
                                </a>
                            </li>
                        </ul>
                        <ul className="my-5 text-lg">
                            <li className="">
                                <a href="mailto:" className="">
                                    nuesauniuyo@gmail.com
                                </a>
                            </li>
                            <li className="my-2">
                                <a href="tel:+" className="">
                                    070989087903
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}