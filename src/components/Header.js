/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { HiViewGrid, HiLogout, HiUser, HiHome, HiCog } from 'react-icons/hi';
import { Dropdown, Navbar } from 'flowbite-react';
import { loadCurrentUser, logout } from '../features/auth/actions';
import SettingsModal from './SettingsModal';

const AuthButtons = () => {
  return (
    <div className='flex items-center md:order-2'>
      <a
        href='/login'
        className='text-white focus:ring-4 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 hover:bg-gray-700 focus:outline-none focus:ring-gray-800'>
        Login
      </a>
      <a
        href='/register'
        className='text-white focus:ring-4  font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800'>
        Sign up
      </a>
      <Navbar.Toggle />
    </div>
  );
};

const UserMenu = ({ user }) => {
  const dispatch = useDispatch();
  const signOut = () => {
    dispatch(logout());
  };
  useEffect(() => {
    dispatch(loadCurrentUser());
  }, [dispatch]);
  const { profilePicture, email, fullName, login } = user;
  return (
    <div className='flex md:order-2'>
      <Dropdown
        style={{
          padding: 0,
          color: 'transparent',
        }}
        color='transparent'
        arrowIcon={false}
        inline={true}
        label={
          <img
            className='w-12 h-12 rounded-full'
            crossOrigin='anonymous'
            src={profilePicture}
            alt='user photo'
          />
        }>
        <Dropdown.Header>
          <span className='block text-sm'>{fullName || login}</span>
          <span className='block text-sm font-medium truncate'>{email}</span>
        </Dropdown.Header>
        <a href='/profile'>
          <Dropdown.Item icon={HiUser}>Profile</Dropdown.Item>
        </a>
        <a href={`/posts/users/${user.id}`}>
          <Dropdown.Item icon={HiViewGrid}>My Posts</Dropdown.Item>
        </a>
        <Dropdown.Divider />
        <Dropdown.Item icon={HiCog}>
          <SettingsModal user={user} />
        </Dropdown.Item>
        <a href='/login'>
          <Dropdown.Item onClick={signOut} icon={HiLogout}>
            Sign out
          </Dropdown.Item>
        </a>
      </Dropdown>
      <Navbar.Toggle />
    </div>
  );
};

const Header = () => {
  // eslint-disable-next-line no-unused-vars, object-curly-newline
  const { loading, error, isAuthenticated, user } = useSelector((state) => {
    return state.auth;
  });
  return (
    <Navbar fluid={true}>
      <Navbar.Brand href='/'>
        <img
          src='https://ik.imagekit.io/g39hqj8mc/logo_1__bJtQz4Zyp.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666396394021'
          className='mr-3 h-6 sm:h-10'
          alt='Use Of Logo'
        />
      </Navbar.Brand>
      {isAuthenticated && !error ? <UserMenu user={user} /> : <AuthButtons />}
      <Navbar.Collapse>
        <Navbar.Link href='/' active={true}>
          <HiHome className='text-3xl' />
        </Navbar.Link>
        <Navbar.Link href='/posts'>
          <span className='text-xl'>Posts</span>
        </Navbar.Link>
        <Navbar.Link href='/users'>
          <span className='text-xl'>Users</span>
        </Navbar.Link>
        <Navbar.Link href='/categories'>
          <span className='text-xl'>Categories</span>
        </Navbar.Link>
        <Navbar.Link href='/posts/create'>
          <span className='text-xl'>Ask Question</span>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
