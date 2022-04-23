import React from "react"
import { Link } from "react-router-dom"
export default function Header() {
    return (

        <header className="">
            <div className="container mx-auto py-3 px-4">
                <nav className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-1 sm:gap-2">
                        <img src="/assets/images/logo.jpg" alt="" className="w-14 sm:w-16" />
                        <span className="font-semibold text-base sm:text-xl">NUESA UNIUYO</span>
                    </div>
                    <ul className="flex items-center gap-3 sm:gap-5">
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
                </nav>
            </div>
        </header>
    )
}