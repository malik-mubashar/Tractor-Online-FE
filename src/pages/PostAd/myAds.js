import React from 'react'

const myAds = () => {
  return (
    <div className="post-ad">
        <div className="row search-page-new">
        <div className="col-md-3">
          <ul className="nav nav-tabs nav-stacked dashboard-subnav">
            <li className="active">
              <a href="/users/my-ads">Active (0)</a>
            </li>
            <li className="">
              <a href="/users/my-ads/st_pending">Pending (0)</a>
            </li>
            <li className="">
              <a href="/users/my-ads/st_removed">Removed (0)</a>
            </li>


          </ul>
        </div>
        <div className="col-md-9">
            <div className="tab-content well">
              <h4 className="text-center">
                No Active Ads
              </h4>
            </div>
        </div>
      </div>
    </div>
  )
}

export default myAds;