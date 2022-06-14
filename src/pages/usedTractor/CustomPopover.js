import React from 'react'
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';
import * as Icon from "react-feather";


export default function CustomPopover() {
  
	return (
		<>
				<OverlayTrigger
						trigger="click"
						key={'bottom'}
						placement={'bottom'}
						overlay={
							<Popover id={`popover-positioned-${'bottom'}`} title={`Popover ${'bottom'}`}>
								<strong>Holy guacamole!</strong> Check this info.
                </Popover>
						}
					>
					 <button
                                className="btn-success"
                                type="submit"
                              >
                                <Icon.PhoneCall
                                  style={{ height: "14px" }}
                                  className="icon"
                                />
                                Show Phone Number
																</button>
					</OverlayTrigger>
		</>
	)
}
