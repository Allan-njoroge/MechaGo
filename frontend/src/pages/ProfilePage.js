import React, { useState, useEffect } from 'react';

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    username: '',
    name: '',
    location: '',
  });

  useEffect(() => {
    fetch('http://localhost:3001/api/profile')
      .then(response => response.json())
      .then(data => setProfile(data));
  }, []);

  return (
    <div style={styles.profileSettings}>
      <div style={styles.profileHeader}>
        <img src="/profile-pic.jpg" alt="Profile" style={styles.profilePic} />
        <div style={styles.profileInfo}>
          <h2>{profile.name}</h2>
          <p>@{profile.username}</p>
          <p>{profile.location}</p>
        </div>
      </div>
      <button style={styles.editProfileBtn}>Edit Profile</button>
      <div>
        <button style={styles.settingsOption}>Link Social Media</button>
        <button style={styles.settingsOption}>Notification Preferences</button>
        <button style={styles.settingsOption}>Linked Banks</button>
        <button style={styles.settingsOption}>Privacy & Security</button>
        <button style={styles.settingsOption}>Support</button>
      </div>
      <button style={styles.signOutBtn}>Sign out</button>
    </div>
  );
};

const styles = {
  profileSettings: {
    width: '300px',
    margin: 'auto',
    fontFamily: 'Arial, sans-serif',
  },
  profileHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
    borderBottom: '1px solid #ccc',
  },
  profilePic: {
    borderRadius: '50%',
    width: '60px',
    height: '60px',
  },
  profileInfo: {
    marginLeft: '20px',
  },
  editProfileBtn: {
    display: 'block',
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    border: 'none',
    backgroundColor: '#f1f1f1',
    cursor: 'pointer',
    textAlign: 'left',
  },
  settingsOption: {
    display: 'block',
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    border: 'none',
    backgroundColor: '#f1f1f1',
    cursor: 'pointer',
    textAlign: 'left',
  },
  signOutBtn: {
    display: 'block',
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    border: 'none',
    backgroundColor: '#ff4c4c',
    color: 'white',
    cursor: 'pointer',
    textAlign: 'left',
  }
};

export default ProfilePage;
