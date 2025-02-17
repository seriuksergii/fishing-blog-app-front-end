import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import Container from '@mui/material/Container';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectIsAuth } from '../../redux/slices/auth';

export const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const onClickLogout = () => {
    if (window.confirm('Ви дійсно зібрались пдти?'));
    dispatch(logout());
    window.localStorage.removeItem('token');
  };

  return (
    <div className={styles.root}>
      <Container maxWidth="lg">
        <div className={styles.inner}>
          <Link className={styles.logo} to="/">
            <img
              src="/logo.png"
              alt="Fishing Blog"
              className={styles.logoImage}
            />
          </Link>

          <div className={styles.buttons}>
            {isAuth ? (
              <>
                <Link to="/add-post">
                  <Button style={{ borderRadius: 25 }} variant="contained">
                    Create Post
                  </Button>
                </Link>
                <Button
                  style={{ borderRadius: 25 }}
                  onClick={onClickLogout}
                  variant="contained"
                  color="error"
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button style={{ borderRadius: 25 }} variant="outlined">
                    Log in
                  </Button>
                </Link>
                <Link to="/register">
                  <Button style={{ borderRadius: 25 }} variant="contained">
                    Sign in
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};
