import React from 'react';
import * as Icon from 'react-feather';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';

class Tickets extends React.Component {
    render() {
        return (
            <div className="card mb-4">
                <div className="card-body">
                    <div className="card-header">
                        <h5 className="card-title">{this.props.title}</h5>
                    </div>

                    <ul className="tickets-lists">
                        {this.props.users.map((user, idx) => (
                            <li key={idx}>
                                <Link to={user.url}>
                                    <Image src={user.image} alt={user.name} rounded />
                                </Link>

                                <Link to={user.url} className="product-title">{user.name}</Link>

                                <div className="d-block fs-12">
                                    <div className="date d-inline mr-10">
                                        <Icon.Calendar 
                                            className="icon mt-minus-3 mr-5"
                                        />
                                        {user.date}
                                    </div> 

                                    <div className="time d-inline">
                                        <Icon.Clock 
                                            className="icon mt-minus-3 mr-5"
                                        />  
                                        {user.time}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

Tickets.propTypes = {
    /**  
     * The component's title.
    */
    title: PropTypes.string,
}

Tickets.defaultProps = {
    title: "Tickets",
    users: [
        {
            id: 1,
            name: "Aaron Rossi",
            date: "02.04.2019",
            time: "05:00 PM",
            image: require('../../assets/img/user/user1.jpg'),
            url: "#"
        },
        {
            id: 2,
            name: "Marco Gomez",
            date: "02.04.2019",
            time: "06:00 PM",
            image: require('../../assets/img/user/user2.jpg'),
            url: "#"
        },
        {
            id: 3,
            name: "Brad Joe",
            date: "02.04.2019",
            time: "07:00 PM",
            image: require('../../assets/img/user/user3.jpg'),
            url: "#"
        },
        {
            id: 4,
            name: "Mitch Petty",
            date: "02.04.2019",
            time: "08:00 PM",
            image: require('../../assets/img/user/user4.jpg'),
            url: "#"
        },
        {
            id: 5,
            name: "George Petty",
            date: "02.04.2019",
            time: "09:00 PM",
            image: require('../../assets/img/user/user5.jpg'),
            url: "#"
        },
        {
            id: 6,
            name: "George Petty",
            date: "02.04.2019",
            time: "10:00 PM",
            image: require('../../assets/img/user/user1.jpg'),
            url: "#"
        },
        {
            id: 7,
            name: "Brad Joe",
            date: "02.04.2019",
            time: "11:00 PM",
            image: require('../../assets/img/user/user2.jpg'),
            url: "#"
        },
        {
            id: 8,
            name: "Mitch Petty",
            date: "02.04.2019",
            time: "06:00 AM",
            image: require('../../assets/img/user/user3.jpg'),
            url: "#"
        },
        {
            id: 9,
            name: "George Petty",
            date: "02.04.2019",
            time: "12:00 PM",
            image: require('../../assets/img/user/user4.jpg'),
            url: "#"
        }
    ]
};

export default Tickets;