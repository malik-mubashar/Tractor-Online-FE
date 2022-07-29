import React from 'react'

const myRides = () => {
  return (
    <div className="post-ad">
        <div className="well mt10">
          <h3 className="text-center">You have not posted any rides</h3>
          <hr/>
          <p><strong>What are Rides?</strong> </p>
          <p>Do you own an exotic, classic, vintage, modified or unique ride you would like to show to the world? <br /> <a href="/rides/new/" onclick="trackEvents('Rides', 'Add Car Ride', 'From - MyRides');">Click here</a> to post your ride. </p>
        </div>
    </div>
  )
}

export default myRides;