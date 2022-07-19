import React from "react";
import postAdLogo from "../../assets/img/postAd.png"
import postInspect from "../../assets/img/postInspection.png"
import Icofont from 'react-icofont';

const postAd = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="well p40">
            <div className="size">
              <h1 className="text-center">Sell Your Tractor at the Best Price</h1>
              <ul className="pitching-widgets pre-sell-select">
                <li>
                  <div className="pull-right">
                    <img
                      alt="Post-ad-art"
                      src={postAdLogo}
                      width="220"
                    />
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
      <div>
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
              <p className="fs14 mb0">Featured Ads get Tractors sold quickly.</p>
            </div>
          </div>
        </div>
        
      </section>
      </div>
      <section>
        <div className="container">
          <h2>5 Simple Steps to Sell Your Tractor</h2>
          <div className="row inspection-work-points sell-it-work-points mt30 fs16">
            <div className="col-sm-6">
              <span className="point">1</span> Sign up on TractorOnline &amp; Post
              an Ad
            </div>
            <div className="col-sm-6">
              <span className="point">2</span> Provide necessary details about
              your used Tractor
            </div>
            <div className="col-sm-6">
              <span className="point">3</span> Upload clear photos of your Tractor
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
      </section>
      <section>
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
                    Get your Tractor repaired and fix any minor defects to increase
                    its resale value
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
                    Get your Tractor inspected by TractorOnline to get premium rates
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <script type="application/ld+json">
            {/* {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Post Ad on PakWheels | Sell Your Car | Sell Used Car",
  "description": "How to post an Ad on pakwheels",
  "author": "PakWheels",
  "uploadDate": "14 May 2020",
  "thumbnailUrl": "https://img.youtube.com/vi/cXS9eq-Wb4w/hqdefault.jpg",
  "url": "https://www.youtube.com/watch?v=cXS9eq-Wb4w",
  "contentUrl": "https://www.youtube.com/embed/cXS9eq-Wb4w",
  "datePublished": "14 May 2020",
  "dateModified": "14 May 2020",
  "publisher": {
    "@context": "http://schema.org",
    "@type": "Organization",
    "url": "https://www.pakwheels.com/",
    "logo": {
      "@context": "http://schema.org",
      "@type": "ImageObject",
      "url": "https://wsa3.pakwheels.com/assets/post-an-ad-on-pakwheels-29b01817fee959357e6cad88ebe0570e.png"
    },
    "description": "Watch our guide on how to post an add on PakWheels to sell your car online. Sell used car by posting free ad. Click on Sell, add description of your car. Add your car images from different angles, and add features like make, model, variant, mileage, color etc. Select a price and add an active phone number. Your ad is ready to be published for free",
    "name": "PakWheels.com",
    "sameAs": [
      "https://www.facebook.com/pakwheels",
      "https://twitter.com/pakwheels",
      "https://instagram.com/pakwheels",
      "https://plus.google.com/+pakwheels"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+92-042-111-943-357",
        "contactType": "customer service",
        "contactOption": "TollFree",
        "areaServed": "PK"
      }
    ]
  }
} */}
          </script>
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
      </section>
      <section>
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
                Selling a used Tractor is not an easy job these days. When you
                consult a dealership, they suggest you a less comparative price
                than the market, which is less than you expected. It can easily
                disappoint you to a great extent. Don't get into any trap of
                selling your Tractor...
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
                Tractor. But let's talk about things you should do before selling
                Tractor in pakistan. If you are selling it on the basis of 'as it
                is' and have mentioned it in the ad as well, then no point doing
                anything to...
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
                Tractor stand out from the crowd. Setting up a good ad for your Tractor
                requires a lot of time and effort, but that time and effort will
                be worth it, as, in the end, you can earn quite a good price for
                your Tractor.
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
      </section>
      <section>
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
                  Millions of users visit the TractorOnline website daily which
                  makes it easy for you to sell your Tractors. Based on our data,
                  used Tractors either get sold within days and sometimes within
                  hours. The key to selling your Tractor quickly is to set a
                  reasonable price, add comprehensive details &amp; provide
                  clear pictures. Check out TractorOnline{" "}
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
                  Go to TractorOnline.com &amp; post a free ad to sell your Tractor
                  online. TractorOnline connects you to millions of buyers easily
                  and quickly from the comfort of your home. All you have to do
                  is post a free ad to sell your Tractor, put up a reasonable price
                  and that’s it! You will get genuine offers from verified
                  buyers.
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
                  condition of the Tractor, mileage, service history, documents and
                  ownership details etc and set a reasonable price. Our data
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
                  easier. TractorOnline.com is the best website where you can sell
                  your Tractor without any hassle! With millions of verified buyers,
                  TractorOnline makes it easier for you to sell your Tractors quickly.
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
                  It is easier to get a better price for your Tractor if you repair
                  it before selling. Identifying major and minor damages to the
                  Tractor and getting them repaired can restore and increase the
                  value of your Tractor. This will allow you to get a much better
                  price for your Tractor than you could get before repairing it.
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
                  In TractorOnline Sell It For Me, TractorOnline takes over and sells
                  your Tractor on your behalf with a money back guarantee. We will
                  inspect the Tractor, put up an Ad with pictures, make a deal
                  within 45 days and handle the paperwork for you. Moreover,
                  under this service, the Ad is featured and will remain at the
                  top of search lists, which attracts more buyers.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div
            class="gen_desc_large active "
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
                Selling a used Tractor in Pakistan can be time-taking, tiring and
                challenging, especially if you have to do it alone. TractorOnline is
                here to help you sell your Tractor in Pakistan easily and quickly.
                You can follow this simple guide while selling your Tractor:
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

            <p dir="ltr" >
              <span id="docs-internal-guid-efe7015f-7fff-9b04-27e0-6d80c1b9a79a">
                It is important to know what your Tractor is actually worth, and for
                that, you need to inspect your vehicle in detail. From the
                condition of its external body to its engine, you need to do a
                thorough check-up of your Tractor and estimate its price. We
                acknowledge the necessity of this task and that it can be
                time-consuming, so we provide{" "}
              </span>
              <a href="https://www.pakwheels.com/products/pakwheels-inspection">
                Tractor Inspection
              </a>{" "}
              Services. Our Tractor inspection team will arrive at your location,
              examine your Tractor to the smallest detail and provide an inspection
              report with complete details of your Tractor.&nbsp;
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
                After your Tractor has been evaluated, you can determine at what
                price you want to sell it. The price you set must not be too
                low, or you will not get what your Tractor is actually worth.
                Similarly, your price should not be too high, or it will be
                challenging to find buyers.&nbsp;
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
                To find buyers for your used Tractor in Pakistan, you need to
                advertise your Tractor. There are several platforms on print and
                electronic media. The most efficient way would be to advertise
                on an online platform where buyers can explore their options,
                such as TractorOnline. Using TractorOnline can make the process of
                selling your Tractor in Pakistan convenient and quick.
              </span>
            </p>

            <h2 dir="ltr">
              <span id="docs-internal-guid-efe7015f-7fff-9b04-27e0-6d80c1b9a79a">
              TractorOnline.com - The Best Online Tractor Selling Site
              </span>
            </h2>

            <p dir="ltr">
              <span id="docs-internal-guid-df9647e7-7fff-0f16-cd8c-e73d70c3241c">
              TractorOnline is a platform that connects Tractor sellers and buyers
                online for free! Sellers can post ads of their Tractors where buyers
                can easily see information on their Tractors and then contact them.
                Advertising your Tractor on TractorOnline can get your Tractor sold for the
                best deal within a few weeks. It is convenient, quick and
                reliable.{" "}
              </span>
            </p>

            <p dir="ltr">
              <span>
                Here are two ways you can sell your Tractor via TractorOnline:
              </span>
            </p>

            <ol >
              <li aria-level="1" dir="ltr">
                <h3 dir="ltr" role="presentation">
                  <span id="docs-internal-guid-df9647e7-7fff-0f16-cd8c-e73d70c3241c">
                    Post an Ad for Free to Sell a Tractor
                  </span>
                </h3>
              </li>
            </ol>

            <p dir="ltr" >
              <span id="docs-internal-guid-df9647e7-7fff-0f16-cd8c-e73d70c3241c">
                Sell a&nbsp;Tractor is PakWheel's free service where you can easily
                advertise your Tractor on our website or app. All you have to do is
                post an ad with the pictures of your Tractor and set a price- all
                from the comfort of your own home. Your ad will be seen by
                thousands of TractorOnline users and you will be quickly contacted
                by buyers. After that, all you have to do is settle on a good
                deal and say goodbye to your old Tractor. Yes, it's that simple!
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

            <p dir="ltr" >
              <span id="docs-internal-guid-df9647e7-7fff-0f16-cd8c-e73d70c3241c">
                If you are on a tight schedule and can't even find time for
                taking pictures of your Tractor and putting up an ad, then this
                service is for you! Sell It For Me is TractorOnline premium service
                where all you have to do is fill out a form and let our team
                take Tractore of the rest. Our team will inspect your Tractor, create a
                report of your Tractor's condition, determine a price, take pictures
                of your Tractor and put up a featured ad on our website. Our team
                will be in contact with the buyers and will secure the best deal
                for you with your approval. And just like that, your Tractor will be
                sold within 40 days without you doing anything!
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default postAd;
