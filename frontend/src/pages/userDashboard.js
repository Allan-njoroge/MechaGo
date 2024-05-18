import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import '../styles.css';

const userDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="container">
      <h1>Mechago User Dashboard</h1>
      <div>
        <button>Auto repair</button>
        <button>Fuel</button>
        <button>Garage</button>
        <button>Mechanics</button>
      </div>
      <div>
        <h2>Popular services</h2>
        <div>
          <div className="service">
            <img src="car-repair.jpg" alt="Car Repair" />
            <p>Car Repair</p>
            <p>Open Now</p>
          </div>
          <div className="service">
            <img src="fuel.jpg" alt="Fuel" />
            <p>Fuel</p>
            <p>Open Now</p>
          </div>
          <div className="service">
            <img src="car-repair.jpg" alt="Car Repair" />
            <p>Car Repair</p>
            <p>Open Now</p>
          </div>
        </div>
      </div>
      <nav className="nav">
        <button>Home</button>
        <button>Search</button>
        <button>Orders</button>
        <button>Profile</button>
      </nav>
    </div>
  );
};

export default userDashboard;