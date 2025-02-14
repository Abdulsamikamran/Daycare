import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./auth/Login";
import Signup from "./auth/signUp";
import ForgotPassword from "./auth/ForgotPassword";
import ResetPassword from "./auth/ResetPassword";
import Role from "./auth/Role";
import SetupProfile from "./auth/Setup-profile";
import PostJob from "./PostJob/PostJob";
import JobDetail from "./PostJob/JobDetail";
import Home from "./home/Home";
import Jobs from "./home/Jobs";
import SingleJob from "./home/SingleJob";
import Centers from "./home/Centers";
import SingleCenter from "./home/SingleCenter";
import About from "./home/About";
import Profile from "./Profile/Profile";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/login" replace />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/role" element={<Role />} />
        <Route path="/setup-profile" element={<SetupProfile />} />
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/job-detail" element={<JobDetail />} />
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/job" element={<SingleJob />} />
        <Route path="/centers" element={<Centers />} />
        <Route path="/centers/center" element={<SingleCenter />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
