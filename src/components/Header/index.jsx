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
                  <Button
                    sx={{
                      borderRadius: 25,
                      padding: '10px 20px',
                      backgroundColor: '#DDB77B',
                      color: 'white',
                      fontSize: 16,
                      fontWeight: 900,
                      width: 100,
                      height: 100,
                      textTransform: 'uppercase',
                      border: '5px solid white',
                      '&:hover': {
                        backgroundColor: '#fff',
                        border: '5px solid #DDB77B',
                        borderRadius: 25,
                        color: '#DDB77B',
                      },
                    }}
                    variant="contained"
                  >
                    Create Post
                  </Button>
                </Link>
                <Button
                  sx={{
                    borderRadius: 25,
                    padding: '10px 20px',
                    backgroundColor: '#fff',
                    color: '#DDB77B',
                    fontSize: 16,
                    fontWeight: 900,
                    width: 100,
                    height: 100,
                    textTransform: 'uppercase',
                    border: '5px solid #DDB77B',
                    '&:hover': {
                      backgroundColor: '#DDB77B',
                      border: '5px solid #fff',
                      borderRadius: 25,
                      color: '#fff',
                    },
                  }}
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
                  <Button
                    sx={{
                      borderRadius: 25,
                      padding: '10px 20px',
                      backgroundColor: '#DDB77B',
                      color: 'white',
                      fontSize: 16,
                      fontWeight: 900,
                      width: 100,
                      height: 100,
                      textTransform: 'uppercase',
                      border: '5px solid white',
                      '&:hover': {
                        backgroundColor: '#fff',
                        border: '5px solid #DDB77B',
                        borderRadius: 25,
                        color: '#DDB77B',
                      },
                    }}
                    variant="outlined"
                  >
                    Log in
                  </Button>
                </Link>
                <Link to="/register">
                  <Button
                    sx={{
                      borderRadius: 25,
                      padding: '10px 20px',
                      backgroundColor: '#fff',
                      color: '#DDB77B',
                      fontSize: 16,
                      fontWeight: 900,
                      width: 100,
                      height: 100,
                      textTransform: 'uppercase',
                      border: '5px solid #DDB77B',
                      '&:hover': {
                        backgroundColor: '#DDB77B',
                        border: '5px solid #fff',
                        borderRadius: 25,
                        color: '#fff',
                      },
                    }}
                    variant="contained"
                  >
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
