import React, { useState, useRef } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function Account() {
  const ref = useRef();
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Avatar
        src="/images/avatars/avatarBelmiro.jpg"
        ref={ref}
        onClick={handleOpen}
      />
      <Menu
        anchorEl={ref.current}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={isOpen}
        onClose={handleClose}
        getContentAnchorEl={null}
      >
        <MenuItem>Perfil</MenuItem>

        <MenuItem>Meus Posts</MenuItem>
        <MenuItem>Minhas Conexões</MenuItem>
        <MenuItem>Sair</MenuItem>
      </Menu>
    </>
  );
}
