import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <div>
      <p>{user.email}</p>
      {/* <LogOutButton type="button">
        <LogoutIcon color="primary" fontSize="medium" />
        Logout
      </LogOutButton> */}
      <Button
        onClick={() => {
          dispatch(logOut());
        }}
        variant="outlined"
        endIcon={<LogoutIcon />}
      >
        LogOut
      </Button>
    </div>
  );
};
