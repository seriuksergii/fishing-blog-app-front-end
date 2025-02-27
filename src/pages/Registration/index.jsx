import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import { fetchRegister, selectIsAuth } from '../../redux/slices/auth';
import styles from './Registration.module.scss';

export const Registration = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchRegister(values));

    if (!data.payload) {
      return alert('Authorization failed');
    }

    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token);
    }
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div className={styles.root}>
      <h5 className={styles.title}>Registration</h5>
      <div className={styles.avatar}>
        <div className={styles.avatarPlaceholder} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.field}>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            {...register('fullName', { required: 'Add Full Name' })}
            className={errors.fullName ? styles.error : ''}
          />
          {errors.fullName && (
            <span className={styles.errorMessage}>
              {errors.fullName.message}
            </span>
          )}
        </div>
        <div className={styles.field}>
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            {...register('email', { required: 'Add email' })}
            className={errors.email ? styles.error : ''}
          />
          {errors.email && (
            <span className={styles.errorMessage}>{errors.email.message}</span>
          )}
        </div>
        <div className={styles.field}>
          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            id="password"
            {...register('password', { required: 'Add password' })}
            className={errors.password ? styles.error : ''}
          />
          {errors.password && (
            <span className={styles.errorMessage}>
              {errors.password.message}
            </span>
          )}
        </div>
        <button type="submit" className={styles.button}>
          Registration
        </button>
      </form>
    </div>
  );
};
