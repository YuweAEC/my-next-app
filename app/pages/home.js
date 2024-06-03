import { useEffect, useState } from 'react';
import { auth } from '../utils/firebaseConfig';

const Home = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
        setUser(user);
    });
    return () => unsubscribe();
}, []);

const handleLogout = async () => {
    try {
        await auth.signOut();
      // Redirect to login page after logout
      // You can use Next.js router for navigation
    } catch (error) {
        console.error(error);
    }
};

return (
    <div>
        <h2>Home</h2>
        {user ? (
        <>
            <p>Welcome, {user.email}</p>
            <button onClick={handleLogout}>Logout</button>
        </>
        ) : (
        <p>Please login to access the home page</p>
        )}
    </div>
    );
};

export default Home;

