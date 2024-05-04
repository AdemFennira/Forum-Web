import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import MessageForm from './MessageForm';
import MessageList from './MessageList';
import Logout from './Logout';
import SearchBar from './SearchBar';
import UserGreeting from './UserGreeting';
import ProfilePage from './ProfilePage';
import PollComponent from './PollComponent';
import PollCreator from './PollCreator';

function MainPage() {
  const [isConnected, setIsConnected] = useState(false);
  const [currentUser, setCurrentUser] = useState({ email: '' });
  const [userProfile, setUserProfile] = useState({
    bannerUrl: '/path/to/default/banner.jpg',
    profilePicUrl: '/path/to/default/profilePic.jpg',
    joinedDate: new Date().toISOString()
  });
  const [messages, setMessages] = useState([]);
  const [showProfile, setShowProfile] = useState(false);
  const [pollData, setPollData] = useState(null);

  const handleLogin = (email, password) => {
    if (email.includes('@')) {
      console.log("Login attempt with:", email, password);
      setIsConnected(true);
      setCurrentUser({ email: email });
    } else {
      console.log("Invalid email format");
    }
  };

  const handleLogout = () => {
    setIsConnected(false);
    setCurrentUser({ email: '' });
    setShowProfile(false);
  };

  const addMessage = (newMessage) => {
    setMessages([...messages, { ...newMessage, id: messages.length, author: currentUser.email }]);
  };

  const toggleProfileView = () => {
    setShowProfile(!showProfile);
  };

  const handleSavePoll = (poll) => {
    setPollData(poll);
  };

  const updateUserProfile = (updates) => {
    setUserProfile(prevState => ({ ...prevState, ...updates }));
  };

  if (!isConnected) {
    return (
      <div className="form-container">
        <Login onLogin={handleLogin} />
        <Signup />
      </div>
    );
  }

  if (showProfile) {
    const userMessages = messages.filter(message => message.author === currentUser.email);
    return <ProfilePage 
             currentUser={currentUser.email} 
             userProfile={userProfile} 
             messages={userMessages} 
             updateUserProfile={updateUserProfile} 
             onBackToMain={toggleProfileView} />;
  }

  return (
    <div className="messages-container">
      <UserGreeting user={currentUser.email} onProfileClick={toggleProfileView} />
      <h1>Welcome, {currentUser.email.split('@')[0]}</h1>
      {!pollData ? (
        <PollCreator onSave={handleSavePoll} />
      ) : (
        <PollComponent pollData={pollData} />
      )}
      <Logout onLogout={handleLogout} />
      <MessageForm addMessage={addMessage} />
      <MessageList messages={messages} />
      <SearchBar onSearch={() => {}} />
    </div>
  );
}

export default MainPage;
