import {
  Box,
  Container,
  CssBaseline,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from '@material-ui/core';
import PageRoutes from './Router/PageRoutes';
import './App.css';
import { SideDrawer, Header, Login } from './components';
import RouterConfig from 'common/services/Router';

import 'bootstrap/dist/css/bootstrap.min.css';

//

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
  },
  page: {
    paddingTop: '3.8rem',
  },
}));

export default function App() {
  const classes = useStyles();

  return <RouterConfig />;
}

// <div>
//     <Login/>
//     {/* <CssBaseline />
//     <header className="header">
//         <Header/>
//     </header>
//     <div style={{display : 'flex'}}>
//         <SideDrawer />
//         <Container className={classes.page} position="static">
//             <PageRoutes />
//         </Container>
//     </div> */}
// </div>
