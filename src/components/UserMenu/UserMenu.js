import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import LogoutIcon from '@mui/icons-material/Logout';
import { Box, Button, Typography } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography
        mr={1}
        component="h3"
        variant="subtitle1"
        align="center"
        color="primary"
        sx={{ display: 'inline-block' }}
      >
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
    </Box>
  );
};
