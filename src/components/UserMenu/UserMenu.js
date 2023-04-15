import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import LogoutIcon from '@mui/icons-material/Logout';
import { Button, Typography } from '@mui/material';
import { UserBox } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <UserBox>
      <Typography component="h4" variant="h6" align="center" color="primary">
        {user.email}
      </Typography>

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
    </UserBox>
  );
};
