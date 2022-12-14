/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
import { useSelector } from 'react-redux';
import { HiHome } from 'react-icons/hi';
import { Navbar } from 'flowbite-react';
import AuthButtons from './AuthButtons';
import UserMenu from './UserMenu';

const Header = () => {
  // eslint-disable-next-line no-unused-vars, object-curly-newline
  const { error, isAuthenticated, user } = useSelector((state) => {
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
          <HiHome className='text-2xl' />
        </Navbar.Link>
        <Navbar.Link href='/posts'>
          <span className='text-base'>Posts</span>
        </Navbar.Link>
        <Navbar.Link href='/users'>
          <span className='text-base'>Users</span>
        </Navbar.Link>
        <Navbar.Link href='/categories'>
          <span className='text-base'>Categories</span>
        </Navbar.Link>
        <Navbar.Link href='/posts/create'>
          <span className='text-base'>Ask Question</span>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
