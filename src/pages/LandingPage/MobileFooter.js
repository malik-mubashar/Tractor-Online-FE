import React, { useContext, useState } from "react";
import HomeSelected from "../../assets/img/home-selected.svg";
import ChatSelected from "../../assets/img/chat-selected.svg";
import MoreSelected from "../../assets/img/more-selected.svg";
import MyAdsSelected from "../../assets/img/my-ads-selected.svg";
import AddSell from "../../assets/img/add-sell.svg";
import MobileDropDown from "./MobileDropDown";
import { RootContext } from "../../context/RootContext";
import { Image } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import LoginModel from "../LoginModel";

const MobileFooter = () => {
  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  const [redirect, setRedirect] = useState("/users/my-ads");
  let history = useHistory();
  const {
    currentUser,
    setCurrentUser,
    signUpMessage,
    setSignUpMessage,
  } = useContext(RootContext);

  return (
    <div className="overflow-x-hidden">
      <div className="bottom-nav css-de1c49">
        <Link to="/" className="generic-link Mui-selected css-4g4bsj">
          <Image src={HomeSelected} alt="" width="100%" height="18px" />
          <span className="generic-link Mui-selected css-1lnpzxd">Home</span>
        </Link>
        {localStorage.currentUser === undefined ? (
          <>
            {" "}
            <LoginModel
              show={modalShow}
              onHide={() => setModalShow(false)}
              redirect={redirect}
            />
            <Link className="css-4g4bsj" onClick={() => setModalShow(true)}>
              <Image src={MyAdsSelected} alt="" width="100%" height="18px" />
              <span className="css-1lnpzxd">My Ads</span>
            </Link>
          </>
        ) : (
          <>
            <button
              className="css-4g4bsj"
              onClick={() => history.push("/users/my-ads")}
            >
              <Image src={MyAdsSelected} alt="" width="100%" height="18px" />
              <span className="css-1lnpzxd">My Ads</span>
            </button>
          </>
        )}

        <div>
          <button
            className="bottom-nav-sell-blue"
            onClick={() => {
              if (currentUser === undefined || currentUser === null) {
                setRedirect("/product/sell");
                setModalShow(true);
              } else {
                history.push("/product/sell");
              }
            }}
          >
            <Image src={AddSell} alt="" width="100%" height="18px" />
          </button>

          <div className="sell-text"> Sell</div>
        </div>
        <Link
          to="/"
          className="css-4g4bsj"
          onClick={() => history.push("/login/")}
        >
          <Image src={ChatSelected} alt="" width="100%" height="18px" />
          <span className="css-1lnpzxd">Chat</span>
        </Link>
        <button
          className="css-4g4bsj"
          onClick={() => {
            setShow(true);
          }}
        >
          <Image src={MoreSelected} alt="" width="100%" height="18px" />
          <span className="css-1lnpzxd">More </span>
        </button>
        <LoginModel
          show={modalShow}
          onHide={() => setModalShow(false)}
          redirect='/'
        />
        <MobileDropDown show={show} setShow={setShow} setModalShow={setModalShow} />
      </div>
    </div>
  );
};

export default MobileFooter;
