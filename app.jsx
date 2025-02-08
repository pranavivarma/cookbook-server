import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./styles.css";

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/recipes">Recipes</Link></li>
      <li><Link to="/communities">Communities</Link></li>
      <li><Link to="/profile">Profile</Link></li>
    </ul>
  </nav>
);

const Home = () => (
  <div>
    <header>
      <h1>Cookbook</h1>
      <Navbar />
    </header>
    <main>
      <section className="hero">
        <h2>Discover Authentic Recipes</h2>
        <Link to="/recipes" className="btn">Explore Recipes</Link>
      </section>
    </main>
    <footer>
      <p>&copy; 2025 Cookbook. All rights reserved.</p>
    </footer>
  </div>
);

const Recipes = () => (
  <div>
    <h2>Recipes List</h2>
    <ul>
      <li>Recipe 1</li>
      <li>Recipe 2</li>
      <li>Recipe 3</li>
    </ul>
  </div>
);

const Communities = () => (
  <div>
    <h2>Communities</h2>
    <p>Join food lovers and share your recipes.</p>
  </div>
);

const Profile = () => (
  <div>
    <header>
      <h1>Profile</h1>
      <Navbar />
    </header>
    <main>
      <h2>Welcome to Your Profile</h2>
      <p>Please <Link to="/login">Login</Link> or <Link to="/register">Register</Link> to access your profile.</p>
    </main>
    <footer>
      <p>&copy; 2025 Cookbook. All rights reserved.</p>
    </footer>
  </div>
);

const Login = () => {
  const handleLogin = () => {
    alert("Login functionality coming soon!");
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="button" onClick={handleLogin}>Login</button>
      </form>
      <p>Don't have an account? <Link to="/register">Register</Link></p>
    </div>
  );
};

const Register = () => {
  const handleRegister = () => {
    alert("Registration functionality coming soon!");
  };

  return (
    <div>
      <h2>Register</h2>
      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="button" onClick={handleRegister}>Sign Up</button>
      </form>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
};

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/communities" element={<Communities />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </Router>
);

export default App;
