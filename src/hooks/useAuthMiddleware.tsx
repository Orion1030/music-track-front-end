import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '~/store';
import { message } from 'antd';
import { useState } from 'react';

export const useAuthMiddleware = (isAuthenticated: boolean) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [hasLoggedOut, setHasLoggedOut] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem('auth');

    if (!auth) {
      if (!hasLoggedOut) {
        setHasLoggedOut(true);
        dispatch(logout());
        navigate('/login');
        message.error('You are not logged in');
      }
    } else {
      setHasLoggedOut(false);
    }
  }, [navigate]);
};
