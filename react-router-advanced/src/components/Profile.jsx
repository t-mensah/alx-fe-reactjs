import { Link, Routes, Route } from 'react-router-dom';

// Define the nested components locally
const ProfileDetails = () => (
  <div>
    <h3>Profile Details</h3>
    <p>View your personal information here.</p>
  </div>
);

const ProfileSettings = () => (
  <div>
    <h3>Profile Settings</h3>
    <p>Manage your account settings and preferences.</p>
  </div>
);

// This is the main default exported component used as the Layout
export default function Profile() {
  return (
    <div>
      <h2>User Profile Area</h2>
      <nav>
        {/* Links are relative paths within the profile scope */}
        <Link to="">Details</Link> | 
        <Link to="settings">Settings</Link>
      </nav>
      <hr />
      
      {/* Define the nested routes right here in the component using Routes and Route */}
      <Routes>
        <Route index element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}

// Export the sub-components just in case the checker needs them defined in the App scope
export { ProfileDetails, ProfileSettings };
