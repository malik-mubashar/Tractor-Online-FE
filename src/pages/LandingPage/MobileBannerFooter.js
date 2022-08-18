import React from "react";
import { Link } from "react-router-dom";
export default function MobileBannerFooter() {
  return (
    <div>
      <div className="mobile-footer">
        <div className="footer-bottom">
          <div className="footer-links">
            <Link to="/browse-us">About</Link>
            <Link to="/">Products</Link>
            <Link to="/browse-us">Contact</Link>
            <Link to="/privacy-policy">Privacy</Link>
            <Link to="/terms">Terms</Link>
          </div>
          <p className="copy">
            Copyright Ⓒ 2003 - 2022 TractorOnline (Pvt) Ltd. - All Rights
            Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
