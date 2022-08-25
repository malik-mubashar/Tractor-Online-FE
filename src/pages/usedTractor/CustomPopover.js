import React from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";
import * as Icon from "react-feather";

export default function CustomPopover({ phoneNo }) {
  return (
    <>
      <OverlayTrigger
        trigger="click"
        key={"bottom"}
        placement={"bottom"}
        rootClose
        overlay={
          <Popover
            id={`popover-positioned-${"bottom"}`}
            title={`Popover ${"bottom"}`}
          >
            <Popover.Header as="h3">{`Phone Number`}</Popover.Header>
            <Popover.Body>
              <strong>{phoneNo}</strong>
            </Popover.Body>
          </Popover>
        }
      >
        <button className="btn btn-success px-1" type="submit">
          <Icon.PhoneCall style={{ height: "14px" }} className="icon" />
          Show Phone Number
        </button>
      </OverlayTrigger>
    </>
  );
}
