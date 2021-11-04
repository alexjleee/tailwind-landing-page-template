import React from 'react';

import Header from '../partials/Header';
import Footer from '../partials/Footer';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        <section className="relative"> 
        <div className="pt-32 pb-12 md:pt-40 md:pb-20 text-center">
        <h1 className="h1 pb-12">About Me</h1>
        <p>
        Hi, I’m Alex.<br/>
        I majored in Industrial Design at Korea University.<br/>
        I worked as a freelance graphic designer for couple of years.<br/>
        Currently I’m studying to become a front-end developer.<br/>
        <br/>
        To see my projects, you can check out my <a className="font-medium text-blue-600 hover:underline" href="https://github.com/alexjleee">github</a>.<br/>
        </p>
        </div>
        </section>
      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;