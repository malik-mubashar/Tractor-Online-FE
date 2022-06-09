import React from "react";
import Footer from "../LandingPage/Footer";
import SearchListing from "./SearchListing";
import SideSearch from "./SideSearch";
import { Image } from "react-bootstrap";
import tractorSVG from "../../assets/svg/tractor-1.svg";
import { isMobile } from "react-device-detect";

export default function usedTractor() {
  return (
    <>
      <section>
        <div className="container">
          <img
            style={{ width: "100%" }}
            alt="add"
            src={"https://tpc.googlesyndication.com/simgad/5923361064753698031"}
          />
          <h3 className="pageHeading">Used Tractor for sale</h3>
          <div className="searchCounterWrapper">
            <ul className="breadcrumb bread">
              <li>
                <a href="/">
                  <span itemprop="name">Home /</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span itemprop="name">Used Tractor /</span>
                </a>
              </li>
              <li>
                <span itemprop="name">Used Tractor For Sale In Pakistan</span>
              </li>
            </ul>
            <div class="search-pagi-info">
              <b>1&nbsp;-&nbsp;25</b> of <b>69412</b> Results
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <SideSearch />
            </div>
            <div className="col-md-9">
              <SearchListing />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <h2>Used Tractors Price in Pakistan</h2>
          <table className="table table-bordered bg-white mb-0">
            <tbody>
              <tr>
                <th>Model</th>
                <th>Price*</th>
              </tr>
              <tr>
                <td className="text-info font-weight-bold">Toyota Corolla</td>
                <td className="text-success">PKR 1.4 lacs - PKR 86.0 lacs</td>
              </tr>
              <tr>
                <td className="text-info font-weight-bold">Honda Civic</td>
                <td className="text-success">PKR 0.0 lacs - PKR 78.0 lacs</td>
              </tr>
              <tr>
                <td className="text-info font-weight-bold">Suzuki Mehran</td>
                <td className="text-success">PKR 1.3 lacs - PKR 14.3 lacs</td>
              </tr>
              <tr>
                <td className="text-info font-weight-bold">Suzuki Cultus</td>
                <td className="text-success">PKR 2.3 lacs - PKR 30.5 lacs</td>
              </tr>
              <tr>
                <td className="text-info font-weight-bold">Honda City</td>
                <td className="text-success">PKR 1.7 lacs - PKR 44.0 lacs</td>
              </tr>
            </tbody>
          </table>

          <small>
            * Used Tractors Prices in Pakistan vary based on the model, variant
            and the condition of the car.
          </small>

          <div class="search-detail-text primary-lang">
            <h2>Tractors for Sale in Pakistan</h2>

            <p>
              PakWheels is Pakistan’s leading and most trustworthy website when
              it comes to Used Tractors for sale in Pakistan. We have tens and
              hundreds of Tractors for Sale listed in each city. Pakwheels makes
              it easy for you to find the best Tractors for sale in Pakistan at
              best prices.
            </p>

            <h2>Used Tractors for Sale in Pakistan</h2>

            <p>
              There are currently 70,355 available used Tractors for sale in
              Pakistan. Based on the current listings, Used car prices in
              Pakistan start from PKR 1,220 and go up to PKR 120,000,000.
            </p>

            <p>
              These used Tractors for sale in Pakistan are uploaded by
              Individuals and Dealers users.
            </p>

            <p>
              There are also 168 Certified used Tractors for sale in Pakistan
              available on PakWheels, PakWheels Certified Tractors are
              pre-inspected and approved by our automobile experts. You can find
              used Tractors based on your desired location, price range, car
              type, model and much more.
            </p>
          </div>
        </div>
      </section>
      <section style={{ backgroundColor: "white" }}>
        <div className="container">
          <h2>Browse More Used Tractors</h2>
          <h3>View Tractors By City</h3>
          <ul class="list-unstyled nomargin row generic-light-grey fs12">
            <li class="col-md-3">
              <a
                href="/used-Tractors/karachi/24857?registration_city=sindh"
                itemprop="relatedLink"
                title="Tractors for sale in Karachi"
              >
                Tractors Karachi
              </a>{" "}
              (11200+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/lahore/24858?registration_city=sindh"
                itemprop="relatedLink"
                title="Tractors for sale in Lahore"
              >
                Tractors Lahore
              </a>{" "}
              (750+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/islamabad/24856?registration_city=sindh"
                itemprop="relatedLink"
                title="Tractors for sale in Islamabad"
              >
                Tractors Islamabad
              </a>{" "}
              (720+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/hyderabad/24771?registration_city=sindh"
                itemprop="relatedLink"
                title="Tractors for sale in Hyderabad"
              >
                Tractors Hyderabad
              </a>{" "}
              (600+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/quetta/24826?registration_city=sindh"
                itemprop="relatedLink"
                title="Tractors for sale in Quetta"
              >
                Tractors Quetta
              </a>{" "}
              (400+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/multan/24810?registration_city=sindh"
                itemprop="relatedLink"
                title="Tractors for sale in Multan"
              >
                Tractors Multan
              </a>{" "}
              (370+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/rawalpindi/24831?registration_city=sindh"
                itemprop="relatedLink"
                title="Tractors for sale in Rawalpindi"
              >
                Tractors Rawalpindi
              </a>{" "}
              (280+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/bahawalpur/24732?registration_city=sindh"
                itemprop="relatedLink"
                title="Tractors for sale in Bahawalpur"
              >
                Tractors Bahawalpur
              </a>{" "}
              (270+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/rahim-yar-khan/68120?registration_city=sindh"
                itemprop="relatedLink"
                title="Tractors for sale in Rahim Yar Khan"
              >
                Tractors Rahim Yar Khan
              </a>{" "}
              (250+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/peshawar/24821?registration_city=sindh"
                itemprop="relatedLink"
                title="Tractors for sale in Peshawar"
              >
                Tractors Peshawar
              </a>{" "}
              (250+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/faisalabad/24753?registration_city=sindh"
                itemprop="relatedLink"
                title="Tractors for sale in Faisalabad"
              >
                Tractors Faisalabad
              </a>{" "}
              (170+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/abbottabad/727521?registration_city=sindh"
                itemprop="relatedLink"
                title="Tractors for sale in Abbottabad"
              >
                Tractors Abbottabad
              </a>{" "}
              (120+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/d-g-khan/68114?registration_city=sindh"
                itemprop="relatedLink"
                title="Tractors for sale in D.G.Khan"
              >
                Tractors D.G.Khan
              </a>{" "}
              (100+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/sukkur/24843?registration_city=sindh"
                itemprop="relatedLink"
                title="Tractors for sale in Sukkur"
              >
                Tractors Sukkur
              </a>{" "}
              (100+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/mansehra/752719?registration_city=sindh"
                itemprop="relatedLink"
                title="Tractors for sale in Mansehra"
              >
                Tractors Mansehra
              </a>{" "}
              (90+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/dera-ismail-khan/24749?registration_city=sindh"
                itemprop="relatedLink"
                title="Tractors for sale in Dera ismail khan"
              >
                Tractors Dera ismail khan
              </a>{" "}
              (60+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/sadiqabad/24833?registration_city=sindh"
                itemprop="relatedLink"
                title="Tractors for sale in Sadiqabad"
              >
                Tractors Sadiqabad
              </a>{" "}
              (50+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/mirpur-khas/24809?registration_city=sindh"
                itemprop="relatedLink"
                title="Tractors for sale in Mirpur khas"
              >
                Tractors Mirpur khas
              </a>{" "}
              (40+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/nawabshah/69292?registration_city=sindh"
                itemprop="relatedLink"
                title="Tractors for sale in Nawabshah"
              >
                Tractors Nawabshah
              </a>{" "}
              (40+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/khanpur--2/677247?registration_city=sindh"
                itemprop="relatedLink"
                title="Tractors for sale in Khanpur"
              >
                Tractors Khanpur
              </a>{" "}
              (40+)
            </li>
          </ul>
          <hr className="mt10 mb10 " />
          <h3>View car by Manufacturer</h3>
          <ul class="list-unstyled nomargin row generic-light-grey fs12">
            <li class="col-md-3">
              <a
                href="/used-Tractors/toyota/33"
                itemprop="relatedLink"
                title="Toyota Tractors for sale in Pakistan"
              >
                Toyota Tractors
              </a>{" "}
              (23000+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/suzuki/32"
                itemprop="relatedLink"
                title="Suzuki Tractors for sale in Pakistan"
              >
                Suzuki Tractors
              </a>{" "}
              (20100+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/honda/14"
                itemprop="relatedLink"
                title="Honda Tractors for sale in Pakistan"
              >
                Honda Tractors
              </a>{" "}
              (14000+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/daihatsu/12"
                itemprop="relatedLink"
                title="Daihatsu Tractors for sale in Pakistan"
              >
                Daihatsu Tractors
              </a>{" "}
              (2700+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/kia/19"
                itemprop="relatedLink"
                title="KIA Tractors for sale in Pakistan"
              >
                KIA Tractors
              </a>{" "}
              (1600+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/nissan/26"
                itemprop="relatedLink"
                title="Nissan Tractors for sale in Pakistan"
              >
                Nissan Tractors
              </a>{" "}
              (1500+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/hyundai/15"
                itemprop="relatedLink"
                title="Hyundai Tractors for sale in Pakistan"
              >
                Hyundai Tractors
              </a>{" "}
              (1100+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/mitsubishi/25"
                itemprop="relatedLink"
                title="Mitsubishi Tractors for sale in Pakistan"
              >
                Mitsubishi Tractors
              </a>{" "}
              (1000+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/changan/47"
                itemprop="relatedLink"
                title="Changan Tractors for sale in Pakistan"
              >
                Changan Tractors
              </a>{" "}
              (810+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/mercedes-benz/23"
                itemprop="relatedLink"
                title="Mercedes Benz Tractors for sale in Pakistan"
              >
                Mercedes Benz Tractors
              </a>{" "}
              (790+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/mg/121559"
                itemprop="relatedLink"
                title="MG Tractors for sale in Pakistan"
              >
                MG Tractors
              </a>{" "}
              (680+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/audi/41"
                itemprop="relatedLink"
                title="Audi for sale in Pakistan - Used Audi Tractors"
              >
                Audi Tractors
              </a>{" "}
              (290+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/faw/56"
                itemprop="relatedLink"
                title="FAW Tractors for sale in Pakistan"
              >
                FAW Tractors
              </a>{" "}
              (230+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/bmw/8"
                itemprop="relatedLink"
                title="BMW Tractors for sale in Pakistan"
              >
                BMW Tractors
              </a>{" "}
              (230+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/dfsk/59"
                itemprop="relatedLink"
                title="DFSK Tractors for sale in Pakistan"
              >
                DFSK Tractors
              </a>{" "}
              (220+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/prince/385797"
                itemprop="relatedLink"
                title="Prince Tractors for sale in Pakistan"
              >
                Prince Tractors
              </a>{" "}
              (200+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/mazda/22"
                itemprop="relatedLink"
                title="Mazda Tractors for sale in Pakistan"
              >
                Mazda Tractors
              </a>{" "}
              (170+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/proton/27977"
                itemprop="relatedLink"
                title="Proton Tractors for sale in Pakistan"
              >
                Proton Tractors
              </a>{" "}
              (130+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/lexus/21"
                itemprop="relatedLink"
                title="Lexus Tractors for sale in Pakistan"
              >
                Lexus Tractors
              </a>{" "}
              (120+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/chevrolet/10"
                itemprop="relatedLink"
                title="Chevrolet Tractors for sale in Pakistan"
              >
                Chevrolet Tractors
              </a>{" "}
              (100+)
            </li>
          </ul>
          <hr className="mt10 mb10 " />
          <h3>View Tractors by Model</h3>

          <ul class="list-unstyled nomargin row generic-light-grey fs12">
            <li class="col-md-3">
              <a
                href="/used-Tractors/toyota-corolla/688"
                itemprop="relatedLink"
                title="Toyota Corolla Tractors for sale in Pakistan"
              >
                Toyota Corolla for sale
              </a>{" "}
              (11100+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/honda-civic/642"
                itemprop="relatedLink"
                title="Honda Civic Tractors for sale in Pakistan"
              >
                Honda Civic for sale
              </a>{" "}
              (7300+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/suzuki-mehran/661"
                itemprop="relatedLink"
                title="Suzuki Mehran for sale in Pakistan"
              >
                Suzuki Mehran for sale
              </a>{" "}
              (4500+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/honda-city/664"
                itemprop="relatedLink"
                title="Honda City for sale in Pakistan"
              >
                Honda City for sale
              </a>{" "}
              (4300+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/suzuki-cultus/660"
                itemprop="relatedLink"
                title="Cultus for sale in Pakistan"
              >
                Suzuki Cultus for sale
              </a>{" "}
              (4300+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/suzuki-alto/658"
                itemprop="relatedLink"
                title="Suzuki Alto for Sale in Pakistan"
              >
                Suzuki Alto for sale
              </a>{" "}
              (3400+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/toyota-vitz/781"
                itemprop="relatedLink"
                title="Toyota Vitz for sale in Pakistan"
              >
                Toyota Vitz for sale
              </a>{" "}
              (2000+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/suzuki-wagon-r/801"
                itemprop="relatedLink"
                title="Suzuki Wagon R for sale in Pakistan"
              >
                Suzuki Wagon R for sale
              </a>{" "}
              (1600+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/suzuki-bolan/693"
                itemprop="relatedLink"
                title="Suzuki Bolan for sale in Pakistan"
              >
                Suzuki Bolan for sale
              </a>{" "}
              (1200+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/toyota-prado/38678"
                itemprop="relatedLink"
                title="Toyota Prado for sale in Pakistan - Parado"
              >
                Toyota Prado for sale
              </a>{" "}
              (1200+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/suzuki-swift/778"
                itemprop="relatedLink"
                title="Suzuki Swift Tractors for sale in Pakistan"
              >
                Suzuki Swift for sale
              </a>{" "}
              (1200+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/toyota-hilux/789"
                itemprop="relatedLink"
                title="Toyota Hilux for sale in Pakistan - Hilux Tractors"
              >
                Toyota Hilux for sale
              </a>{" "}
              (1100+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/toyota-land-cruiser/651"
                itemprop="relatedLink"
                title="Land Cruiser for sale in Pakistan"
              >
                Toyota Land Cruiser for sale
              </a>{" "}
              (970+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/daihatsu-cuore/665"
                itemprop="relatedLink"
                title="Daihatsu Cuore for sale in Pakistan"
              >
                Daihatsu Cuore for sale
              </a>{" "}
              (820+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/honda-vezel/57545"
                itemprop="relatedLink"
                title="Honda Vezel Tractors for sale in Pakistan"
              >
                Honda Vezel for sale
              </a>{" "}
              (780+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/toyota-passo/803"
                itemprop="relatedLink"
                title="Toyota Passo Tractors for sale in Pakistan"
              >
                Toyota Passo for sale
              </a>{" "}
              (780+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/kia-sportage/715"
                itemprop="relatedLink"
                title="KIA Sportage Tractors for sale in Pakistan"
              >
                KIA Sportage for sale
              </a>{" "}
              (720+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/toyota-fortuner/833"
                itemprop="relatedLink"
                title="Toyota Fortuner Tractors for sale in Pakistan"
              >
                Toyota Fortuner for sale
              </a>{" "}
              (710+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/daihatsu-mira/788"
                itemprop="relatedLink"
                title="Daihatsu Mira for sale in Pakistan"
              >
                Daihatsu Mira for sale
              </a>{" "}
              (640+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/suzuki-khyber/698"
                itemprop="relatedLink"
                title="Khyber for sale in Pakistan"
              >
                Suzuki Khyber for sale
              </a>{" "}
              (620+)
            </li>
          </ul>

          <hr className="mt10 mb10 " />
          <h3>View Tractors by Version</h3>

          <ul class="list-unstyled nomargin row generic-light-grey fs12">
            <li class="col-md-3">
              <a
                href="/used-Tractors/suzuki-alto-vxr/73649"
                itemprop="relatedLink"
                title="Suzuki Alto VXR for sale in Pakistan"
              >
                Suzuki Alto VXR
              </a>{" "}
              (4200+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/toyota-corolla-gli/11052"
                itemprop="relatedLink"
                title="GLi for sale in Pakistan"
              >
                GLi
              </a>{" "}
              (3900+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/honda-civic-vti-oriel/11049"
                itemprop="relatedLink"
                title="Used Civic VTi Oriel Tractors for sale in Pakistan"
              >
                Civic VTi Oriel
              </a>{" "}
              (3600+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/suzuki-mehran-vx/73466"
                itemprop="relatedLink"
                title="Mehran VX for sale in Pakistan"
              >
                Mehran VX
              </a>{" "}
              (3500+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/toyota-corolla-altis/57921"
                itemprop="relatedLink"
                title="Altis for sale in Pakistan"
              >
                Altis
              </a>{" "}
              (3100+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/honda-civic-vti/11047"
                itemprop="relatedLink"
                title="Civic VTi for sale in Pakistan"
              >
                Civic VTi
              </a>{" "}
              (2900+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/toyota-corolla-xli/10936"
                itemprop="relatedLink"
                title="Xli Tractors for sale in Pakistan"
              >
                XLi
              </a>{" "}
              (1800+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/toyota-vitz-f/233972"
                itemprop="relatedLink"
                title="Vitz F for sale in Pakistan"
              >
                Vitz F
              </a>{" "}
              (1600+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/honda-civic-exi/73549"
                itemprop="relatedLink"
                title="Civic EXi for sale in Pakistan"
              >
                Civic EXi
              </a>{" "}
              (1300+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/toyota-passo-x/73421"
                itemprop="relatedLink"
                title="Toyota Passo X for sale in Pakistan"
              >
                Toyota Passo X
              </a>{" "}
              (1100+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/honda-city-aspire/10993"
                itemprop="relatedLink"
                title="Used Honda City Aspire i-VTEC For Sale In Pakistan"
              >
                Honda City Aspire i-VTEC
              </a>{" "}
              (910+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/honda-city-prosmatec/846738"
                itemprop="relatedLink"
                title="Honda City Prosmatec Tractors for sale in Pakistan"
              >
                Honda City Prosmatec
              </a>{" "}
              (890+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/toyota-hilux-double-cabin/1194974"
                itemprop="relatedLink"
                title="Toyota Hilux Double Cabin Tractors for sale in Pakistan"
              >
                Toyota Hilux Double Cabin
              </a>{" "}
              (840+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/suzuki-swift-dlx/108812"
                itemprop="relatedLink"
                title="Swift DLX for sale in Pakistan"
              >
                Swift DLX
              </a>{" "}
              (750+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/honda-city-idsi/480516"
                itemprop="relatedLink"
                title="Honda City idsi for Sale in Pakistan"
              >
                Honda City iDSI
              </a>{" "}
              (750+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/suzuki-cultus-vxri/73452"
                itemprop="relatedLink"
                title="Suzuki Cultus VXRi for sale in Pakistan"
              >
                Suzuki Cultus VXRi
              </a>{" "}
              (700+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/toyota-corolla-altis-x/679937"
                itemprop="relatedLink"
                title="Toyota Corolla Altis X Tractors for sale in Pakistan"
              >
                Toyota Corolla Altis X
              </a>{" "}
              (620+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/daihatsu-cuore-cx/10816"
                itemprop="relatedLink"
                title="Used Cuore CX For Sale In Pakistan"
              >
                Daihatsu Cuore CX
              </a>{" "}
              (570+)
            </li>
          </ul>

          <hr className="mt10 mb10 " />
          <h3>View Tractors by Engine Capacity</h3>
          <ul class="list-unstyled nomargin row generic-light-grey fs12">
            <li class="col-md-3">
              <a
                href="/used-Tractors/family-Tractors/587667"
                itemprop="relatedLink"
                title="Family Tractors for sale in Pakistan"
              >
                Family Tractors
              </a>{" "}
              (37600+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/small/266374"
                itemprop="relatedLink"
                title="Small Tractors for sale in Pakistan"
              >
                Small Tractors for Sale
              </a>{" "}
              (24700+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/old/430603"
                itemprop="relatedLink"
                title="Old Tractors for sale in Pakistan"
              >
                Old Tractors
              </a>{" "}
              (22100+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/big/266260"
                itemprop="relatedLink"
                title="Big Tractors for sale in Pakistan"
              >
                Big Tractors
              </a>{" "}
              (13400+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/low-priced/328875"
                itemprop="relatedLink"
                title="Low Price Tractors in Pakistan for Sale"
              >
                Low Price Tractors for Sale
              </a>{" "}
              (13000+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/low-mileage/485505"
                itemprop="relatedLink"
                title="Low Mileage Tractors for sale in Pakistan"
              >
                Low Mileage Tractors
              </a>{" "}
              (11600+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/luxury/72787"
                itemprop="relatedLink"
                title="Luxury Tractors for sale in Pakistan"
              >
                Luxury Tractors in Pakistan
              </a>{" "}
              (5900+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/cheap/329024"
                itemprop="relatedLink"
                title="Cheap Tractors for sale in Pakistan"
              >
                Cheap Tractors
              </a>{" "}
              (3800+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/carry-daba/270569"
                itemprop="relatedLink"
                title="Carry Daba in Pakistan"
              >
                Carry Daba in Pakistan
              </a>{" "}
              (1900+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/sports/72786"
                itemprop="relatedLink"
                title="Sports Tractors - Price in Pakistan, Tractors for sale"
              >
                Sports Tractors
              </a>{" "}
              (220+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/modified/389984"
                itemprop="relatedLink"
                title="Modified Tractors for sale in Pakistan"
              >
                Modified Tractors
              </a>{" "}
              (210+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/custom-auction/716218"
                itemprop="relatedLink"
                title="Custom Auction Tractors for sale in Pakistan"
              >
                Custom Auction Tractors
              </a>{" "}
              (110+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/duplicate-book/389980"
                itemprop="relatedLink"
                title="Duplicate Book Tractors for sale in Pakistan"
              >
                Duplicate Book Tractors
              </a>{" "}
              (100+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/exotic/73686"
                itemprop="relatedLink"
                title="Exotic Tractors for sale in Pakistan"
              >
                Exotic Tractors
              </a>{" "}
              (100+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/duplicate-file/716615"
                itemprop="relatedLink"
                title="Duplicate File Tractors for sale in Pakistan"
              >
                Duplicate File Tractors
              </a>{" "}
              (70+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/electric/389926"
                itemprop="relatedLink"
                title="Electric Tractors in Pakistan"
              >
                Electric Tractors for Sale in Pakistan
              </a>{" "}
              (60+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/amnesty-scheme/716454"
                itemprop="relatedLink"
                title="Amnesty Scheme Tractors for sale in Pakistan"
              >
                Amnesty Scheme Tractors
              </a>{" "}
              (50+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/army-auction-jeep/430586"
                itemprop="relatedLink"
                title="Army Jeeps, Army Auction Jeeps for sale in Pakistan"
              >
                Army Jeeps for Sale
              </a>{" "}
              (50+)
            </li>
          </ul>

          <hr className="mt10 mb10 " />
          <h3>View Tractors by Category</h3>

          <ul class="list-unstyled nomargin row generic-light-grey fs12">
            <li class="col-md-3">
              <a
                href="/used-Tractors/family-Tractors/587667"
                itemprop="relatedLink"
                title="Family Tractors for sale in Pakistan"
              >
                Family Tractors
              </a>{" "}
              (37600+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/small/266374"
                itemprop="relatedLink"
                title="Small Tractors for sale in Pakistan"
              >
                Small Tractors for Sale
              </a>{" "}
              (24700+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/old/430603"
                itemprop="relatedLink"
                title="Old Tractors for sale in Pakistan"
              >
                Old Tractors
              </a>{" "}
              (22100+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/big/266260"
                itemprop="relatedLink"
                title="Big Tractors for sale in Pakistan"
              >
                Big Tractors
              </a>{" "}
              (13400+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/low-priced/328875"
                itemprop="relatedLink"
                title="Low Price Tractors in Pakistan for Sale"
              >
                Low Price Tractors for Sale
              </a>{" "}
              (13000+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/low-mileage/485505"
                itemprop="relatedLink"
                title="Low Mileage Tractors for sale in Pakistan"
              >
                Low Mileage Tractors
              </a>{" "}
              (11600+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/luxury/72787"
                itemprop="relatedLink"
                title="Luxury Tractors for sale in Pakistan"
              >
                Luxury Tractors in Pakistan
              </a>{" "}
              (5900+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/cheap/329024"
                itemprop="relatedLink"
                title="Cheap Tractors for sale in Pakistan"
              >
                Cheap Tractors
              </a>{" "}
              (3800+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/carry-daba/270569"
                itemprop="relatedLink"
                title="Carry Daba in Pakistan"
              >
                Carry Daba in Pakistan
              </a>{" "}
              (1900+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/sports/72786"
                itemprop="relatedLink"
                title="Sports Tractors - Price in Pakistan, Tractors for sale"
              >
                Sports Tractors
              </a>{" "}
              (220+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/modified/389984"
                itemprop="relatedLink"
                title="Modified Tractors for sale in Pakistan"
              >
                Modified Tractors
              </a>{" "}
              (210+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/custom-auction/716218"
                itemprop="relatedLink"
                title="Custom Auction Tractors for sale in Pakistan"
              >
                Custom Auction Tractors
              </a>{" "}
              (110+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/duplicate-book/389980"
                itemprop="relatedLink"
                title="Duplicate Book Tractors for sale in Pakistan"
              >
                Duplicate Book Tractors
              </a>{" "}
              (100+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/exotic/73686"
                itemprop="relatedLink"
                title="Exotic Tractors for sale in Pakistan"
              >
                Exotic Tractors
              </a>{" "}
              (100+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/duplicate-file/716615"
                itemprop="relatedLink"
                title="Duplicate File Tractors for sale in Pakistan"
              >
                Duplicate File Tractors
              </a>{" "}
              (70+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/electric/389926"
                itemprop="relatedLink"
                title="Electric Tractors in Pakistan"
              >
                Electric Tractors for Sale in Pakistan
              </a>{" "}
              (60+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/amnesty-scheme/716454"
                itemprop="relatedLink"
                title="Amnesty Scheme Tractors for sale in Pakistan"
              >
                Amnesty Scheme Tractors
              </a>{" "}
              (50+)
            </li>

            <li class="col-md-3">
              <a
                href="/used-Tractors/army-auction-jeep/430586"
                itemprop="relatedLink"
                title="Army Jeeps, Army Auction Jeeps for sale in Pakistan"
              >
                Army Jeeps for Sale
              </a>{" "}
              (50+)
            </li>
          </ul>
        </div>
      </section>
      <div className="bloodyButton">
        {isMobile ? (
          <a
            href="/used-cars/sell"
            className="sell-bar-fixed sell-floating-btn sign-in-comp"
            target="_blank"
            onclick="trackEvents('UsedCars','Sellform','From - Search');"
            style={{ width: "50px" }}
          >
            <p class="mt-3 text-white"> Sell</p>
          </a>
        ) : (
          <a
            href="/used-cars/sell"
            class="sell-bar-fixed sell-floating-btn sign-in-comp"
            target="_blank"
            onclick="trackEvents('UsedCars','Sellform','From - Search');"
          >
            <span class="sell-icons">
              <Image
                src={tractorSVG}
                height="40px"
                width="60px"
                alt="Profile Image"
                className="d-flex justify-content-center m-auto"
              />{" "}
            </span>
            <p class="mt-3 text-white"> Sell My Tractor</p>
          </a>
        )}
      </div>
      <Footer />
    </>
  );
}
