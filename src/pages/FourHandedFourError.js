import React from 'react';
import { Link } from "react-router-dom";
import * as Icon from 'react-feather';

class FourHandedFourError extends React.Component {
    render() {
        return (
            <div className="page-wrapper"> 
                <div className="error-content">
                    <div className="d-table">
                        <div className="d-tablecell">
                            <Icon.Frown 
                                className="icon"
                            />
                            <h1>404</h1>
                            <h4>Page not found</h4>
                            <p>The page you are looking for was moved, removed, renamed or might never exist!</p>
                            <Link to="/dashboard" className="back-link">
                                Back to Home Page
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FourHandedFourError;