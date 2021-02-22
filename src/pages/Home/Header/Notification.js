import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from '@material-ui/core';
import SvgIcon from '@material-ui/core/SvgIcon';
import {
  Bell as BellIcon,
  Star as StarIcon,
  MessageCircle as MessageIcon,
  Heart as HeartIcon,
  Users as ConnectionIcon,
} from 'react-feather';
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';

const useStyles = makeStyles((theme) => ({
  icon: {
    background: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
}));
const iconsMap = {
  reviews: StarIcon,
  new_comment: MessageIcon,
  like: HeartIcon,
  connection: ConnectionIcon,
};

export default function Notifications() {
  const ref = useRef(null);

  const classes = useStyles();

  return (
    <>
      <IconButton ref={ref}>
        <SvgIcon>
          <BellIcon />
        </SvgIcon>
      </IconButton>
      {/* <Popover
        anchorEl={ref.current}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Box p={2}>
          <Typography variant="h6" color="textPrimary">
            Notificações
          </Typography>
        </Box>
      </Popover> */}
    </>
  );
}
