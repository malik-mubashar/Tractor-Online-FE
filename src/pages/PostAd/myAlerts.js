import React from 'react'

const myAlerts = () => {
  return (
    <div className="post-ad">
        <div className="user-alerts mb40">
      <div className="clearfix text-right mb20">
        <a href="/alerts/new?type=car" onclick="trackEvents('UsedCars', 'Create Alert', 'From - User Panel');" className="mt10"><i className="fa fa-plus-sign"></i> Add Alert</a>
      </div>
      <div className="row">
        <div className="col-md-3">
          <ul className="nav nav-tabs nav-stacked dashboard-subnav">
            <li className="active">
              <a href="/alerts?type=car">My Car Alerts</a>
            </li>
            <li className="">
              <a href="/alerts?type=bike">My Bike Alerts</a>
            </li>
            <li className="">
              <a href="/alerts?type=accessory">My Accessory Alerts</a>
            </li>
          </ul>
        </div>
        <div className="col-md-9">
          <div className="tab-content well">
            <h3 className="text-center">You have not set any Car alerts</h3>
            <p><strong>What are Alerts? </strong> </p>
            <p>Alerts are email updates about latest ads that match your need or criteria. They can really save your time! Just tell us what you're looking for and we'll email you when matching ads are posted.</p>

            <p><strong>How do I set an alert?</strong> </p>
            <p>Two Simple Ways:</p>
            <ul>
              <li>Click <a href="/alerts/new?type=car">Add Alert</a> and tell us your criteria.</li>
              <li>While searching, simply click the <strong>'Create Email Alert'</strong> link on the search results page.</li>
            </ul>
          </div>
          <div className="clearfix"></div>
        </div>
        
      </div>
    </div>
    </div>
  )
}

export default myAlerts;