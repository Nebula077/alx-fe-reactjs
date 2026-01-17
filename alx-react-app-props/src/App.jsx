import ProfilePage from './ProfilePage';
import React from 'react';
import UserContext from './UserContext';


const profile = UserContext.Provider;
function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;