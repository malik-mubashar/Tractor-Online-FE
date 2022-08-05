import React from "react";
import postAdLogo from "../../assets/img/postAd.png";
import postInspect from "../../assets/img/postInspection.png";
import Icofont from "react-icofont";
import { useHistory } from "react-router-dom";

const SellTractor = () => {
	const history =useHistory()
  return (
    <div className="sell-tractor mt-4">
      <section>
        <div className="container">
          <div className="well p40">
            <div className="size">
              <h1 className="text-center">
                Sell Your Tractor at the Best Price
              </h1>
              <ul className="pitching-widgets pre-sell-select">
                <li>
                  <div className="pull-right">
                    <img alt="Post-ad-art" src={postAdLogo} width="220" />
                  </div>
                  <div className="generic-gray">
                    <label className="item styled-control styled-control-radio">
                      <input
                        checked="checked"
                        className="package-input input-align pull-left"
                        data-parsley-trigger="change"
                        id="sell_option____used-cars_sell_post-ad_____UsedCars_____AddCar_____From_-_ToggleScreen_"
                        name="sell_option"
                        type="radio"
                        value="/used-cars/sell/post-ad ,UsedCars ,AddCar ,From - ToggleScreen"
                      />
                      <div className="styled-control-indicator"></div>
                      <h3 className="fs22 generic-grey fwl">
                        Post your Ad on TractorOnline
                      </h3>
                      <ul className="list-unstyled fs14">
                        <li>
                          <Icofont
                            icon="tick-mark text-success"
                            className="icofont-2x"
                          />
                          Free Ad Posting in 3 Simple Steps
                        </li>
                        <li>
                          <Icofont
                            icon="tick-mark text-success"
                            className="icofont-2x"
                          />
                          Receive sincere bids from confirmed buyers.
                        </li>
                        <li>
                          <Icofont
                            icon="tick-mark text-success"
                            className="icofont-2x"
                          />
                          Sell Your Tractor Quickly and for the Highest Price
                        </li>
                      </ul>
                    </label>
                  </div>
                </li>
                <li>
                  <div className="pull-right">
                    <img
                      alt="Pitching-sifm-widget"
                      src={postInspect}
                      width="220"
                    />
                  </div>
                  <div className="generic-gray">
                    <label className="item styled-control styled-control-radio">
                      <input
                        className="package-input input-align pull-left"
                        data-parsley-trigger="change"
                        id="sell_option____products_pakwheels-sell-it-for-me_new_____SellItForMe_____RequestStarted_____From_-_ToggleScreen_"
                        name="sell_option"
                        type="radio"
                        value="/products/pakwheels-sell-it-for-me/new ,SellItForMe ,RequestStarted ,From - ToggleScreen"
                      />
                      <div className="styled-control-indicator"></div>
                      <h3 className="fs22 generic-grey fwl">
                        Try TractorOnline Sell It For Me
                      </h3>
                      <ul className="list-unstyled fs14">
                        <li>
                          <Icofont
                            icon="tick-mark text-success"
                            className="icofont-2x"
                          />
                          Dedicated Sales Expert to Sell Your Tractor
                        </li>
                        <li>
                          <Icofont
                            icon="tick-mark text-success"
                            className="icofont-2x"
                          />
                          We Bargain on Your Behalf and Share the Best Offer
                        </li>
                        <li>
                          <Icofont
                            icon="tick-mark text-success"
                            className="icofont-2x"
                          />
                          We ensure Safe &amp; Secure Transaction
                        </li>
                      </ul>
                      <p className="generic-red mt10 fs12">
                        * Service available only in Karachi, Lahore, Islamabad
                        and Rawalpindi
                      </p>
                      <p className="text-info">Coming Soon...</p>
                    </label>
                  </div>
                </li>
              </ul>
              <div className="text-center mt20">
                <input
                  id="select-sell-option"
                  name="Submit"
                  value="Continue"
                  className="btn btn-success btn-lg"
									type="submit"
									onClick={()=>{history.push('/used-tractor/sell/post-ad')}}
                />
                <p className="generic-red mt10 fs12">
                  * By clicking "Continue" you are agreeing to the{" "}
                  <a
                    className="generic-red"
                    href="https://www.pakwheels.com/main/terms"
                  >
                    terms of service
                  </a>
                  ,{" "}
                  <a
                    className="generic-red"
                    href="https://www.pakwheels.com/privacy-policy"
                  >
                    privacy policy
                  </a>
                  , and{" "}
                  <a
                    className="generic-red"
                    href="https://docs.google.com/document/d/1wBTbfAm0Fwfy2DwPbBgSFDOderOeIusijBgzc_huiBQ/edit#heading=h.fpcp0kfg3pby"
                  >
                    disclaimer of academic research.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div>
        <section>
          <div className="container">
            <h2>Why Sell Your Tractor on TractorOnline?</h2>
            <div className="row why-pw-cards-container">
              <div className="col-md-3 card pw-card">
                <div className="img-cont">
                  <img
                    alt="Post Your Ad for Free"
                    src="https://wsa2.pakwheels.com/assets/product/why-pw-icons/post-ad-icon-4cae31b8670bf33c6dc559081e90641a.svg"
                  />
                </div>
                <h5 className="fs18">Post Your Ad for Free</h5>
                <p className="fs14 mb0">
                  Post your ad on Pakistan's largest automotive marketplace.
                </p>
              </div>
              <div className="col-md-3 card pw-card">
                <div className="img-cont">
                  <img
                    alt="Used Cars Get Sold in No Time"
                    src="https://wsa3.pakwheels.com/assets/product/why-pw-icons/authenticity-9cb150848599d0244900db4a8f90022f.svg"
                  />
                </div>
                <h5 className="fs18">Used Cars Get Sold in No Time</h5>
                <p className="fs14 mb0">
                  100,000+ buyers visit the website daily.
                </p>
              </div>
              <div className="col-md-3 card pw-card">
                <div className="img-cont">
                  <img
                    alt="Best Rates for Used Cars"
                    src="https://wsa4.pakwheels.com/assets/product/why-pw-icons/best-rate-icon-6759604f64e0740d77736a0ab913699f.svg"
                  />
                </div>
                <h5 className="fs18">Best Rates for Used Tractors</h5>
                <p className="fs14 mb0">
                  Buyers willing to pay more for Pre-Inspected &amp; Certified
                  Cars.
                </p>
              </div>
              <div className="col-md-3 card pw-card">
                <div className="img-cont">
                  <img
                    alt="Feature Your Ad"
                    src="https://wsa4.pakwheels.com/assets/product/why-pw-icons/feature-your-ad-845803be6d28522284311870f288ec43.svg"
                  />
                </div>
                <h5 className="fs18">Feature Your Ad</h5>
                <p className="fs14 mb0">
                  Featured Ads get Tractors sold quickly.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div> */}
      {/* <section>
        <div className="container">
          <h2>5 Simple Steps to Sell Your Tractor</h2>
          <div className="row inspection-work-points sell-it-work-points mt30 fs16">
            <div className="col-sm-6">
              <span className="point">1</span> Sign up on TractorOnline &amp;
              Post an Ad
            </div>
            <div className="col-sm-6">
              <span className="point">2</span> Provide necessary details about
              your used Tractor
            </div>
            <div className="col-sm-6">
              <span className="point">3</span> Upload clear photos of your
              Tractor
            </div>
            <div className="col-sm-6">
              <span className="point">4</span> Provide your contact information
            </div>
            <div className="col-sm-6">
              <span className="point">5</span> Relax &amp; get instant offers
              from genuine buyers
            </div>
          </div>
        </div>
      </section> */}

      
      {/* <section>
        <div className="container">
          <h2>Interesting Tips</h2>
          <div
            id="interesting-tips-carousel"
            className="carousel slide lazy-slider"
            data-interval="false"
            data-ride="carousel"
          >
            <div div="" className="carousel-inner" role="listbox">
              <div className="item clearfix active">
                <div className="row why-pw-cards-container interesting-tips-wrapper">
                  <div className="col-md-3 card pw-card">
                    <div className="img-cont">
                      <img
                        alt="Tip-icon"
                        src="https://wsa3.pakwheels.com/assets/product/why-pw-icons/tip-icon-4e7948fce88f053b4617071b89e3fff2.svg"
                      />
                    </div>
                    Get your Tractor repaired and fix any minor defects to
                    increase its resale value
                  </div>
                  <div className="col-md-3 card pw-card">
                    <div className="img-cont">
                      <img
                        alt="Tip-icon"
                        src="https://wsa3.pakwheels.com/assets/product/why-pw-icons/tip-icon-4e7948fce88f053b4617071b89e3fff2.svg"
                      />
                    </div>
                    Set up a reasonable price as it will determine how long it
                    will take for your Tractor to sell
                  </div>
                  <div className="col-md-3 card pw-card">
                    <div className="img-cont">
                      <img
                        alt="Tip-icon"
                        src="https://wsa3.pakwheels.com/assets/product/why-pw-icons/tip-icon-4e7948fce88f053b4617071b89e3fff2.svg"
                      />
                    </div>
                    Beware of unrealistic offers and carry out safe transactions
                    to avoid being defrauded
                  </div>
                  <div className="col-md-3 card pw-card">
                    <div className="img-cont">
                      <img
                        alt="Tip-icon"
                        src="https://wsa3.pakwheels.com/assets/product/why-pw-icons/tip-icon-4e7948fce88f053b4617071b89e3fff2.svg"
                      />
                    </div>
                    Get your Tractor inspected by TractorOnline to get premium
                    rates
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section>
        <div className="container">
          
          <h2>Watch Our Seller Guide</h2>
          <iframe
            width="1000"
            height="480"
            src="https://www.youtube.com/embed/cXS9eq-Wb4w"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen=""
          ></iframe>
        </div>
      </section> */}
      {/* <section>
        <div className="container">
          <h2>Used Tractor Selling Tips and Advices</h2>
          <div className="row">
            <div className="col-md-4 ">
              <a href="/blog/selling-used-car/" target="_blank" rel="nofollow">
                <img
                  alt="Advice-tips-4"
                  height="186"
                  src="https://wsa2.pakwheels.com/assets/blog/advice-tips-4-e35da5a257377bd58718fc24da6fab16.png"
                  width="320"
                />
                <h3 className="mt15 mb5">
                  How To Sell a Used Tractor Quickly- A Complete Guide!
                </h3>
              </a>
              <div>
                It can be time-consuming, exhausting, and difficult to sell a
                secondhand tractor in Pakistan, especially if you have to go it
                alone. You can easily and quickly sell your tractor in Pakistan
                with the aid of TractorOnline. You can adhere to the easy
                instructions below while selling your tractor:
              </div>
              <a href="/blog/selling-used-car/" rel="nofollow">
                more »
              </a>
            </div>
            <div className="col-md-4 ">
              <a
                href="/blog/5-things-you-should-take-care-of-before-selling-your-car/"
                target="_blank"
                rel="nofollow"
              >
                <img
                  alt="Advice-tips-2"
                  height="186"
                  src="https://wsa4.pakwheels.com/assets/blog/advice-tips-2-57ac5901581434690ea7530076e678bd.png"
                  width="320"
                />
                <h3 className="mt15 mb5">
                  5 Things You Should Take Care Of Before Selling Your Tractor
                </h3>
              </a>
              <div>
                We all talk about the things you must check before buying a used
                Tractor. But let's talk about things you should do before
                selling Tractor in pakistan. If you are selling it on the basis
                of 'as it is' and have mentioned it in the ad as well, then no
                point doing anything to...
              </div>
              <a
                href="/blog/5-things-you-should-take-care-of-before-selling-your-car/"
                rel="nofollow"
              >
                more »
              </a>
            </div>
            <div className="col-md-4 ">
              <a
                href="/blog/heres-how-you-can-contact-pakwheels-services/"
                target="_blank"
                rel="nofollow"
              >
                <img
                  alt="Advice-tips-5"
                  height="186"
                  src="https://wsa3.pakwheels.com/assets/blog/advice-tips-5-8d33beb1925b750f4a8e4b906721b4db.png"
                  width="320"
                />
                <h3 className="mt15 mb5">
                  Here's How You Can Contact TractorOnline Services
                </h3>
              </a>
              <div>
                So you have decided to sell your Tractor online, but you are
                thinking about how to create an effective ad that will make your
                Tractor stand out from the crowd. Setting up a good ad for your
                Tractor requires a lot of time and effort, but that time and
                effort will be worth it, as, in the end, you can earn quite a
                good price for your Tractor.
              </div>
              <a
                href="/blog/heres-how-you-can-contact-pakwheels-services/"
                rel="nofollow"
              >
                more »
              </a>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section>
        <div
          className="container faqs"
          itemscope=""
          itemtype="https://schema.org/FAQPage"
        >
          <h2>Frequently Asked Questions</h2>
          <div className="accordion" id="accordion2">
            <div
              className="accordion-group"
              itemprop="mainEntity"
              itemscope=""
              itemtype="https://schema.org/Question"
            >
              <div className="accordion-heading">
                <div
                  className="accordion-toggle collapsed pointer"
                  data-toggle="collapse"
                  data-parent="#accordion2"
                  href="#collapse0"
                  itemprop="name"
                >
                  How long will it take to sell my Tractor on TractorOnline?
                </div>
              </div>
              <div
                id="collapse0"
                className="accordion-body collapse"
                itemprop="acceptedAnswer"
                itemscope=""
                itemtype="https://schema.org/Answer"
              >
                <div className="accordion-inner" itemprop="text">
                  The TractorOnline website receives millions of daily visitors,
                  making it simple for you to sell your tractors. According to
                  our research, used tractors are frequently sold within hours
                  or only a few days. Set a fair asking price, include all
                  relevant information, and include crisp images if you want to
                  sell your tractor soon. Visit TractorOnline.{" "}
                  <a href="https://www.pakwheels.com/blog/selling-used-car/">
                    Used Car Selling Guide
                  </a>{" "}
                  for more information.
                </div>
              </div>
            </div>
            <div
              className="accordion-group"
              itemprop="mainEntity"
              itemscope=""
              itemtype="https://schema.org/Question"
            >
              <div className="accordion-heading">
                <div
                  className="accordion-toggle collapsed pointer"
                  data-toggle="collapse"
                  data-parent="#accordion2"
                  href="#collapse1"
                  itemprop="name"
                >
                  How can I sell my Tractor online in Pakistan?
                </div>
              </div>
              <div
                id="collapse1"
                className="accordion-body collapse"
                itemprop="acceptedAnswer"
                itemscope=""
                itemtype="https://schema.org/Answer"
              >
                <div className="accordion-inner" itemprop="text">
                  Go to TractorOnline.com &amp; To sell your tractor online,
                  place a free ad. From the convenience of your home,
                  TractorOnline links you with millions of buyers. All you have
                  to do to sell your tractor is post a free ad, set a fair
                  asking price, and that's it! You'll receive sincere offers
                  from confirmed buyers.
                </div>
              </div>
            </div>
            <div
              className="accordion-group"
              itemprop="mainEntity"
              itemscope=""
              itemtype="https://schema.org/Question"
            >
              <div className="accordion-heading">
                <div
                  className="accordion-toggle collapsed pointer"
                  data-toggle="collapse"
                  data-parent="#accordion2"
                  href="#collapse2"
                  itemprop="name"
                >
                  How can I get the most money for selling my Tractor?
                </div>
              </div>
              <div
                id="collapse2"
                className="accordion-body collapse"
                itemprop="acceptedAnswer"
                itemscope=""
                itemtype="https://schema.org/Answer"
              >
                <div className="accordion-inner" itemprop="text">
                  To get the best offers, post detailed descriptions including
                  condition of the Tractor, mileage, service history, documents
                  and ownership details etc and set a reasonable price. Our data
                  shows that Used Tractors which are Pre-inspected get the best
                  offers. You can use TractorOnline's{" "}
                  <a href="https://www.pakwheels.com/products/pakwheels-inspection">
                    Tractor Inspection
                  </a>{" "}
                  Service to get your Tractor Inspected.
                </div>
              </div>
            </div>
            <div
              className="accordion-group"
              itemprop="mainEntity"
              itemscope=""
              itemtype="https://schema.org/Question"
            >
              <div className="accordion-heading">
                <div
                  className="accordion-toggle collapsed pointer"
                  data-toggle="collapse"
                  data-parent="#accordion2"
                  href="#collapse3"
                  itemprop="name"
                >
                  Which site is best to sell my Tractor in Pakistan?
                </div>
              </div>
              <div
                id="collapse3"
                className="accordion-body collapse"
                itemprop="acceptedAnswer"
                itemscope=""
                itemtype="https://schema.org/Answer"
              >
                <div className="accordion-inner" itemprop="text">
                  Selling your new or used Tractor in Pakistan requires time and
                  effort but selling it online can make the process a lot
                  easier. TractorOnline.com is the best website where you can
                  sell your Tractor without any hassle! With millions of
                  verified buyers, TractorOnline makes it easier for you to sell
                  your Tractors quickly.
                </div>
              </div>
            </div>
            <div
              className="accordion-group"
              itemprop="mainEntity"
              itemscope=""
              itemtype="https://schema.org/Question"
            >
              <div className="accordion-heading">
                <div
                  className="accordion-toggle collapsed pointer"
                  data-toggle="collapse"
                  data-parent="#accordion2"
                  href="#collapse4"
                  itemprop="name"
                >
                  Is it worth repairing my Used Tractor before Selling?
                </div>
              </div>
              <div
                id="collapse4"
                className="accordion-body collapse"
                itemprop="acceptedAnswer"
                itemscope=""
                itemtype="https://schema.org/Answer"
              >
                <div className="accordion-inner" itemprop="text">
                  It is easier to get a better price for your Tractor if you
                  repair it before selling. Identifying major and minor damages
                  to the Tractor and getting them repaired can restore and
                  increase the value of your Tractor. This will allow you to get
                  a much better price for your Tractor than you could get before
                  repairing it.
                </div>
              </div>
            </div>
            <div
              className="accordion-group"
              itemprop="mainEntity"
              itemscope=""
              itemtype="https://schema.org/Question"
            >
              <div className="accordion-heading">
                <div
                  className="accordion-toggle collapsed pointer"
                  data-toggle="collapse"
                  data-parent="#accordion2"
                  href="#collapse5"
                  itemprop="name"
                >
                  What is TractorOnline Sell it For Me Service?
                </div>
              </div>
              <div
                id="collapse5"
                className="accordion-body collapse"
                itemprop="acceptedAnswer"
                itemscope=""
                itemtype="https://schema.org/Answer"
              >
                <div className="accordion-inner" itemprop="text">
                  In TractorOnline Sell It For Me, TractorOnline takes over and
                  sells your Tractor on your behalf with a money back guarantee.
                  We will inspect the Tractor, put up an Ad with pictures, make
                  a deal within 45 days and handle the paperwork for you.
                  Moreover, under this service, the Ad is featured and will
                  remain at the top of search lists, which attracts more buyers.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div
            className="gen_desc_large active "
            id="introduction"
            itemprop="description"
          >
            <h2 dir="ltr">
              <span id="docs-internal-guid-efe7015f-7fff-9b04-27e0-6d80c1b9a79a">
                Sell Used Tractor&nbsp;Online&nbsp;in Pakistan
              </span>
            </h2>

            <p dir="ltr">
              <span id="docs-internal-guid-efe7015f-7fff-9b04-27e0-6d80c1b9a79a">
                Selling a used Tractor in Pakistan can be time-taking, tiring
                and challenging, especially if you have to do it alone.
                TractorOnline is here to help you sell your Tractor in Pakistan
                easily and quickly. You can follow this simple guide while
                selling your Tractor:
              </span>
            </p>

            <ol>
              <li aria-level="1" dir="ltr">
                <h3 dir="ltr" role="presentation">
                  <span id="docs-internal-guid-efe7015f-7fff-9b04-27e0-6d80c1b9a79a">
                    Evaluate Your Tractor:&nbsp;
                  </span>
                </h3>
              </li>
            </ol>

            <p dir="ltr">
              <span id="docs-internal-guid-efe7015f-7fff-9b04-27e0-6d80c1b9a79a">
                It's critical to understand the true value of your tractor, and
                the only way to do that is to conduct a thorough inspection. You
                must perform a complete inspection of your tractor and determine
                its cost, taking into account everything from the state of its
                exterior body to its engine. We provide these resources because
                we understand how important this task is and how time-consuming
                it can be.{" "}
              </span>
              <a href="https://www.pakwheels.com/products/pakwheels-inspection">
                Tractor Inspection
              </a>{" "}
              Services. Our tractor inspection crew will visit your location,
              thoroughly inspect your tractor, and then deliver an inspection
              report that includes all of your tractor's specifics..&nbsp;
            </p>

            <ol>
              <li aria-level="1" dir="ltr" value="2">
                <h3 dir="ltr" role="presentation">
                  <span id="docs-internal-guid-efe7015f-7fff-9b04-27e0-6d80c1b9a79a">
                    Setting the Right Price:&nbsp;
                  </span>
                </h3>
              </li>
            </ol>

            <p dir="ltr">
              <span id="docs-internal-guid-efe7015f-7fff-9b04-27e0-6d80c1b9a79a">
                You can choose the selling price for your Tractor once it has
                been appraised. You must not make your price too low, else you
                won't obtain what your tractor is really worth. Likewise, if
                your pricing is too high, it will be difficult to locate
                purchasers..&nbsp;
              </span>
            </p>

            <ol>
              <li aria-level="1" dir="ltr" value="3">
                <h3 dir="ltr" role="presentation">
                  <span id="docs-internal-guid-efe7015f-7fff-9b04-27e0-6d80c1b9a79a">
                    Advertise Your Tractor:&nbsp;
                  </span>
                </h3>
              </li>
            </ol>

            <p dir="ltr">
              <span id="docs-internal-guid-efe7015f-7fff-9b04-27e0-6d80c1b9a79a">
                You must publicise your used tractor if you want to find
                customers in Pakistan. There are numerous print and digital
                media sources. The most effective method would be to place an ad
                on a website like TractorOnline where purchasers may research
                their possibilities. Selling your tractor in Pakistan can be
                simple and quick when you use TractorOnline.
              </span>
            </p>

            <h2 dir="ltr">
              <span id="docs-internal-guid-efe7015f-7fff-9b04-27e0-6d80c1b9a79a">
                TractorOnline.com - The Best Online Tractor Selling Site
              </span>
            </h2>

            <p dir="ltr">
              <span id="docs-internal-guid-df9647e7-7fff-0f16-cd8c-e73d70c3241c">
                A platform called TractorOnline links tractor dealers and
                buyers. free online buyers! Tractor advertising can be posted by
                vendors. a place where purchasers may readily see details about
                their tractors and contact them then. Using TractorOnline to
                promote your tractor can within a few weeks, sell your tractor
                for the highest possible price. It is practical, speedy, and
                trustwort{" "}
              </span>
            </p>

            <p dir="ltr">
              <span>
                Here are two ways you can sell your Tractor via TractorOnline:
              </span>
            </p>

            <ol>
              <li aria-level="1" dir="ltr">
                <h3 dir="ltr" role="presentation">
                  <span id="docs-internal-guid-df9647e7-7fff-0f16-cd8c-e73d70c3241c">
                    Post an Ad for Free to Sell a Tractor
                  </span>
                </h3>
              </li>
            </ol>

            <p dir="ltr">
              <span id="docs-internal-guid-df9647e7-7fff-0f16-cd8c-e73d70c3241c">
                Sell a&nbsp;The free TractorOnline service allows you to quickly
                advertise your tractor on our website or mobile application. All
                you have to do, while remaining in the comfort of your home, is
                post an advertisement with images of your tractor and a price.
                Thousands of TractorOnline users will see your advertisement,
                and you will receive quick contact from potential buyers. All
                there's left to do is choose an excellent deal and bid your old
                Tractor farewell after that. It really is that easy!
              </span>
            </p>

            <ol>
              <li aria-level="1" dir="ltr" value="2">
                <h3 dir="ltr" role="presentation">
                  <span id="docs-internal-guid-df9647e7-7fff-0f16-cd8c-e73d70c3241c">
                    Use TractorOnline “Sell It For Me” Service
                  </span>
                </h3>
              </li>
            </ol>

            <p dir="ltr">
              <span id="docs-internal-guid-df9647e7-7fff-0f16-cd8c-e73d70c3241c">
                This service is for you if you don't even have time to
                photograph your tractor and post an advertisement because of
                your busy schedule. With TractorOnline's premium service, Sell
                It For Me, all you have to do is complete a form; the rest will
                be handled by our experts. The members of our team will evaluate
                your tractor, write a report on its condition, set a price, take
                images of it, and post a prominent ad on our website. With your
                permission, our team will communicate with the purchasers to
                negotiate the best price for you. Instantaneously, without your
                involvement, your tractor will be sold within 40 days!
              </span>
            </p>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default SellTractor;
