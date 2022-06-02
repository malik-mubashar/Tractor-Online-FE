import React from 'react';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';

class CalendarContainer extends React.Component {
    render(){
        let today = new Date();
        let lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);    
        return (
            <div className="card mb-4">
                <div className="card-body">
                    <div className="card-header">
                        <h5 className="card-title">Calendar</h5>
                    </div>
                    <InfiniteCalendar
                        selected={today}
                        minDate={lastWeek} 
                        className="calendar-content"
                    />
                </div>
            </div>
        );
    }
}

export default CalendarContainer;