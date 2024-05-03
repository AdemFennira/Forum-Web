import React, { useState } from 'react';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(email, password);
  };

  return (
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <div class="welcome-section">
            <h1>Bienvenue à tous!</h1>
            <p>Découvrez AD Forum, le carrefour de l'innovation et de l'interaction ! En vous joignant à notre communauté exclusive, vous accédez à une mine d'informations, de conseils d'experts et de débats animés. Ici, chaque voix compte et chaque opinion enrichit notre collectif. Ne ratez pas l'occasion de façonner les tendances, d'influencer les discussions et de développer votre réseau dans un espace où les idées avant-gardistes rencontrent la curiosité sans fin. Inscrivez-vous maintenant et commencez à transformer l'ordinaire en extraordinaire avec chaque message posté. AD Forum : Où vos idées prennent vie.</p>
          </div>
          <h3>Login</h3>
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
  );
}

export default Login;
