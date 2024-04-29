import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../utils/userSlice';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  const signOutUser = async () => {
    try {
      await signOut(auth);
      navigate('/')
    } catch (error) {
      console.log('Failed to logout user:' + error);
    }
  };

  return (
    <div className="absolute bg-gradient-to-b from-black	 h-14 w-full z-20 flex justify-between items-center px-4">
      <img src="/images/logos/Netflix_Logo_PMS.png" alt="logo" className="h-14" />
      <div>
        {user !== null && (
          <button onClick={signOutUser}>
            <img src="/images/User_Profile.png" alt="user_profile" className="h-8" />
            Sign out
          </button>
        )}
      </div>
    </div>
  );
};

export const withHeader = (Component) => {
  return () => {
    return (
      <div>
        <Header />
        <Component />
      </div>
    );
  };
};

export default Header;
