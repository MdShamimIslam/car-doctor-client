import React from "react";
import person from '../../assets/about/person.jpg';
import parts from '../../assets/about/parts.jpg';

const About = () => {
  return (
    <div className="hero mb-32 mt-12">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
        <img
          src={person}
          className="w-3/4 rounded-lg shadow-2xl"
        />
        <img
          src={parts}
          className="w-1/2 rounded-lg absolute top-1/2 right-5 border-8 border-white shadow-2xl"
        />
        </div>
        <div className="lg:w-1/2 ml-8">
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;
