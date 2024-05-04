import React from 'react';

function ProfilePage({ currentUser, userProfile, messages, onBackToMain, updateUserProfile }) {
  const handleFileChange = (file, type) => {
    const reader = new FileReader();
    reader.onload = function(e) {
      updateUserProfile({ [type]: e.target.result });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <div style={{ width: '100%', height: '200px', backgroundImage: `url(${userProfile.bannerUrl})`, backgroundSize: 'cover' }}>
        <input type="file" onChange={(e) => handleFileChange(e.target.files[0], 'bannerUrl')} style={{ display: 'block' }} />
      </div>
      <div style={{ textAlign: 'center', marginTop: '-50px', paddingBottom: '20px' }}>
        <img src={userProfile.profilePicUrl} alt="Profile Pic" style={{ width: '100px', height: '100px', borderRadius: '50%', border: '3px solid white' }} />
        <input type="file" onChange={(e) => handleFileChange(e.target.files[0], 'profilePicUrl')} style={{ display: 'block' }} />
        <h1>Profil de {currentUser}</h1>
        <button onClick={onBackToMain}>Retour</button>
      </div>
      <div>
        <h3>Messages:</h3>
        {messages.map((message, index) => (
          <div key={index} style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
            <h4>{message.topic}</h4>
            <p>{message.content}</p>
            <p>Posted on: {new Date(message.date).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfilePage;