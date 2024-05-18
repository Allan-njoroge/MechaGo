import React from 'react';
import './Dashboard.css';
import CustomCalendar from './Calendar';

const providerDashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="availability-section">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
        <p>Availability</p>
      </div>

      <div className="profile-completion">
        <p>Profile completion</p>
        <div className="progress-bar">
          <div className="progress" style={{ width: '50%' }}></div>
        </div>
      </div>

      <div className="stats">
        <div className="stat-item">
          <p>Total bookings</p>
          <p>4</p>
        </div>
        <div className="stat-item">
          <p>Total earnings</p>
          <p>$2,000</p>
        </div>
        <div className="stat-item">
          <p>Average rating</p>
          <p>5</p>
        </div>
      </div>

      <div className="manage-services">
        <h2>Manage your services</h2>
        <button className="add-service">Add a new service</button>
        <p>Service</p>
        <p>You have 1 pending approval</p>
        <p>Vehicle</p>
        <p>You have 1 pending approval</p>
        <p>Equipment</p>
        <p>You have 1 pending approval</p>
      </div>

      <div className="booking-requests">
        <h2>Booking Requests</h2>
        <p>Booking</p>
        <p>New booking for 2020 Tesla Model S</p>
        <p>Booking</p>
        <p>Your vehicle has been booked by David</p>
      </div>

      <button className="view-bookings">View all booking requests</button>

      <CustomCalendar /> {/* Add the Calendar component here */}
    </div>
  );
};

export default providerDashboard;