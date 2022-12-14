import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import CommentSettingsDropDown from './CommentSettingsDropdown';

const Reply = ({ comment }) => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col bg-gray-900 rounded-xl w-11/12 p-2 text-gray-500 font-medium'>
      <div className='flex flex-row items-center justify-between'>
          <div onClick={() => { navigate(`/user/${comment.userId}`); }} className='cursor-pointer flex items-center space-x-3'>
            <img
              className='h-5 w-5 rounded-full bg-slate-400'
              crossOrigin='anonymous'
              src={comment.profilePicture}
            />
            <div className='text-sm font-bold text-gray-300'>
              {comment.login || 'deleted'}
            </div>
          </div>
        <div className='flex flex-row space-x-1'>
          <p className='text-xs text-gray-500'>
            {moment(comment.createdAt).fromNow()}
          </p>
          <CommentSettingsDropDown comment={comment} />
        </div>
      </div>
      <p className='ml-8 text-xs'>{comment.content}</p>
    </div>
  );
};

export default Reply;
