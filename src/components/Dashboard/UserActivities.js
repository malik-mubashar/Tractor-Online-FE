import React from 'react';
import PropTypes from "prop-types";
import { Table } from 'react-bootstrap';

class UserActivities extends React.Component {

    kFormatter = (num) => {
        return num > 999 ? (num/1000).toFixed(1) + 'k' : num
    }

    render() { 
        return (
            <div className="card mb-4">
                <div className="card-body">
                    <div className="card-header">
                        <h5 className="card-title">{this.props.title}</h5>
                    </div>

                    <div className="height-310">
                        <Table className="m-0" responsive>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Pages / Visit</th>
                                    <th>New user</th>
                                    <th className="text-center">Last week</th>
                                </tr>
                            </thead>

                            <tbody>
                                {this.props.activities.map((activity, idx) => (
                                    <tr key={idx}>
                                        <td>{activity.date}</td>
                                        <td>{this.kFormatter(activity.visit)}</td>
                                        <td>{this.kFormatter(activity.newUser)}</td>
                                        <td className="text-center">{this.kFormatter(activity.lastWeek)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        );
    }
}

UserActivities.propTypes = {
    /**  
     * The component's title.
    */
    title: PropTypes.string,
}

UserActivities.defaultProps = { 
    title: "User Activities",
    activities: [
        {
            id: 1,
            date: "02.01.2019",
            visit: 5500,
            newUser: 700,
            lastWeek: 10977
        },
        {
            id: 2,
            date: "02.02.2019",
            visit: 5699,
            newUser: 750,
            lastWeek: 1246
        },
        {
            id: 3,
            date: "02.03.2019",
            visit: 5800,
            newUser: 643,
            lastWeek: 45322
        },
        {
            id: 4,
            date: "02.04.2019",
            visit: 43543,
            newUser: 452,
            lastWeek: 6568
        },
        {
            id: 5,
            date: "02.05.2019",
            visit: 4654,
            newUser: 564,
            lastWeek: 5764
        },
        {
            id: 6,
            date: "02.06.2019",
            visit: 4745,
            newUser: 233,
            lastWeek: 7769
        }
    ]
}

export default UserActivities;