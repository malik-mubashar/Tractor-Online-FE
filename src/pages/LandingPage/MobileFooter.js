import React from "react";
import HomeSelected from "../../assets/img/home-selected.svg";
import ChatSelected from "../../assets/img/chat-selected.svg";
import MoreSelected from "../../assets/img/more-selected.svg";
import MyAdsSelected from "../../assets/img/my-ads-selected.svg";
import AddSell from "../../assets/img/add-sell.svg";
import { Image } from "react-bootstrap";

const MobileFooter = () => {
  return (
    <div className="overflow-x-hidden">
      <div class="bottom-nav css-de1c49">
        <button class="generic-link Mui-selected css-4g4bsj">
          <Image src={HomeSelected} alt="" width="100%" height="18px" />
          <span class="generic-link Mui-selected css-1lnpzxd">Home</span>
        </button>
        <button class="css-4g4bsj">
          <Image src={MyAdsSelected} alt="" width="100%" height="18px" />
          <span class="css-1lnpzxd">My Ads</span>
        </button>
        <div>
          <button class="bottom-nav-sell-blue">
            <Image src={AddSell} alt="" width="100%" height="18px" />
          </button>
          <div class="sell-text">Sell</div>
        </div>
        <button class="css-4g4bsj">
          <Image src={ChatSelected} alt="" width="100%" height="18px" />
          <span class="css-1lnpzxd">Chat</span>
        </button>
        <button class="css-4g4bsj">
          <Image src={MoreSelected} alt="" width="100%" height="18px" />
          <span class="css-1lnpzxd">More</span>
        </button>
      </div>
    </div>
  );
};

export default MobileFooter;
