import React from 'react';

import Header from '../parts/Header';
import Navbar from '../parts/Navbar';
import Couple from '../parts/Couple';
import Events from '../parts/Events';
import Moment from '../parts/Moment';
import Location from '../parts/Location';

const Home = ({ data }) => {
  return (
    <div className="home">
      <Header data={data.header} />
      <Navbar data={data.navbar} />
      <Couple data={data.couple} />
      <Events data={data.events} />
      <Moment data={data.moment} />
      <Location data={data.location} />
    </div>
  );
};

export default Home;
