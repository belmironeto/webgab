import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Toolbar from '@material-ui/core/Toolbar';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ComputerIcon from '@material-ui/icons/Computer';
import LanguageIcon from '@material-ui/icons/Language';
import DomainIcon from '@material-ui/icons/Domain';
import Drawer from '@material-ui/core/Drawer';
import SvgIcon from '@material-ui/core/SvgIcon';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

const drawerWidth = 180;

const iconsMap = {
  sistemas: InboxIcon,
  servidores: ComputerIcon,
  dominios: DomainIcon,
  ips: LanguageIcon,
  certificados: VerifiedUserIcon,
};

const useStyles = makeStyles((theme) => ({
  root: {},
  drawer: {
    flexShrink: 0,
    backgroundColor: 'red',
  },
  drawerPaper: {
    width: '180px',
  },
  drawerContainer: {
    overflow: 'auto',
  },
  icon: {},
}));

export default function MenuLateral() {
  const classes = useStyles();
  const itens = [
    { name: 'sistemas', id: 0, desciption: 'Sistemas' },
    { name: 'servidores', id: 1, desciption: 'Servidores' },
    { name: 'dominios', id: 2, desciption: 'Domínios' },
    { name: 'ips', id: 3, desciption: 'IPs' },
    { name: 'certificados', id: 4, desciption: 'Certificados' },
  ];
  return (
    <>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {itens.map((item) => {
              const Icon = iconsMap[item.name];
              return (
                <ListItem button key={item.id}>
                  <ListItemIcon>
                    <SvgIcon className={classes.icon}>
                      <Icon />
                    </SvgIcon>
                  </ListItemIcon>
                  <ListItemText primary={item.desciption} />
                </ListItem>
              );
            })}
          </List>
          <Divider />
        </div>
      </Drawer>
    </>
  );
}
