import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUsers } from '../features/users/actions';
import CardLoader from '../components/CardLoader';
import UsersTable from '../components/usersPage/UsersTable';

const UsersPage = () => {
  const dispatch = useDispatch();
  const { loading, users } = useSelector((state) => {
    return state.users;
  });
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <>
      {loading ? (
        <CardLoader />
      ) : (
        <div>
          <UsersTable
            users={users}
            loading={loading}
          />
        </div>
      )}
    </>
  );
};

export default UsersPage;
