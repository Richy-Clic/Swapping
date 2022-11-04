import React from 'react'
import NewSwapping from '../components/NewSwapping'
import Swappings from '../components/Swappings'

const Home = () => {

  return (
    <div className="container">
      {/* <BegginerUser /> */}
      <div className="row">
        <div className="col-6 px-4 py-2">
          <Swappings />
        </div>
        <div className="col-6 px-4 py-2">
          <NewSwapping />
        </div>
      </div>
    </div>
  );
}

export default Home;
