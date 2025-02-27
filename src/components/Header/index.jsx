import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectIsAuth } from '../../redux/slices/auth';
import styles from './Header.module.scss';

export const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const onClickLogout = () => {
    if (window.confirm('Ви дійсно зібрались піти?')) {
      dispatch(logout());
      window.localStorage.removeItem('token');
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <Link className={styles.logo} to="/">
            <img src="/1.png" alt="Fishing Blog" className={styles.logoImage} />
          </Link>
          <div className={styles.buttons}>
            {isAuth ? (
              <>
                <Link to="/add-post">
                  <button className={styles.createPost}>Add Post</button>
                </Link>
                <button className={styles.signOut} onClick={onClickLogout}>Sign Out</button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className={styles.login}>Log in</button>
                </Link>
                <Link to="/register">
                  <button className={styles.signUp}>Sign in</button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
