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
        <small className="uppercase font-bold text-sm text-white">small text</small>
        <h1 className="text-5xl md:text-7xl text-white font-semibold">NUESA UNIUYO</h1>
        <i className="text-2xl text-white">
          Nuesa slogan here
        </i>
      </div>
    </section>
    <section className="section flex items-center">
      <div className="container mx-auto px-4 py-10 text-center">
        <h2 className="text-2xl md:text-4xl font-semibold mb-5">ABOUT NUESA UNIUYO</h2>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Quas assumenda quisquam, odit aliquam perspiciatis rerum, sint commodi veniam ducimus alias deserunt ad iste eaque. 
          Dolor, cupiditate magni beatae dolores vel nisi, nesciunt corporis eveniet hic omnis qui ut ipsum numquam voluptate, 
          quasi culpa magnam ullam. Nemo, voluptas tempore modi temporibus illo, 
          nam suscipit cupiditate ipsam error animi maxime laboriosam blanditiis vitae inventore. 
          Quo perferendis veniam voluptatibus laboriosam ut voluptatum molestiae nemo 
          cumque eligendi quos deleniti similique eius vel quibusdam provident sint, sunt culpa. 
          Quos nostrum consequatur qui hic, ex quidem, cum optio quam soluta magnam porro quas dolore earum, 
          officia voluptatum delectus modi vitae debitis reprehenderit corrupti quae. 
          Voluptas accusamus maxime asperiores nostrum ipsa, voluptates nam commodi, 
          quos eius, recusandae tenetur quam assumenda quo quibusdam. 
          Architecto omnis voluptates molestiae voluptatibus, aliquid eaque saepe ab, 
          ut repudiandae veniam dignissimos quaerat amet aspernatur! 
          Error qui necessitatibus saepe dolore iusto. Nesciunt voluptates iure nisi?
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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Quas assumenda quisquam, odit aliquam perspiciatis rerum, sint commodi veniam ducimus alias deserunt ad iste eaque. 
          Dolor, cupiditate magni beatae dolores vel nisi, nesciunt corporis eveniet hic omnis qui ut ipsum numquam voluptate,
          nam suscipit cupiditate ipsam error animi maxime laboriosam blanditiis vitae inventore. 
          Quo perferendis veniam voluptatibus laboriosam ut voluptatum molestiae nemo sunt culpa. 
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