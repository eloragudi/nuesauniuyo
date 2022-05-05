import React from "react"
import { Link } from "react-router-dom"
export default function Homepage() {
  return (
    //     <div className="">
    //         home page
    //         <h1 className="text-3xl font-bold underline">
    //   Hello world!
    // </h1>
    //         </div>
    <div className="">
      <section className="section hero-bg min-h-[80vh] flex items-center">
        <div className="container mx-auto px-4">
          {/* <small className="uppercase font-bold text-sm text-white"></small> */}
          <h1 className="text-5xl md:text-7xl text-white font-semibold">NUESA UNIUYO</h1>
          <i className="text-2xl text-white">
            TOWARDS INDIGENOUS TECHNOLOGICAL ADVANCEMENT
          </i>
        </div>
      </section>
      <section className="section flex items-center">
        <div className="container mx-auto px-4 py-10 text-center">
          <h2 className="text-2xl md:text-4xl font-semibold mb-5">ABOUT NUESA UNIUYO</h2>
          <p className="text-lg">
            NUESA is aimed at creating a platform where engineering students can learn from practicing Engineers from diverse fields of Engineering. So as to help in shaping the course of technological development of Nigeria by encouraging and carrying out industrial projects, offering useful and constructive suggestions to the government and the bodies responsible for the making of the nation's technological policies.
          </p>
          <Link to="/history" className="underline text-lg text-medium">Learn more</Link>
        </div>
      </section>
      <section className="section flex items-center">
        <div className="container mx-auto px-4 py-10">
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-full md:w-5/12">
              <h2 className="text-2xl md:text-4xl font-semibold mb-5">OUR EVENTS</h2>
              <p className="text-lg">
               The Nigerian Universities Engineering Students' Association (NUESA) National Body uniuyo chapter, hold many interesting events every years.
               These events include dinner nights, inaugrations....
           
              </p>
              <Link to="/events" className="underline text-lg text-medium">Learn more</Link>
            </div>
            <div className="img-container w-full md:w-6/12">
              <img src="/assets/images/faculty.jpg" alt="" className="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}