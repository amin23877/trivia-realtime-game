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

export default function App() {
  // #routerConfig step2
  return <RouterConfig />;
}

// const classes = useStyles();

// const useStyles = makeStyles((theme) => ({
//   link: {
//     textDecoration: 'none',
//     color: theme.palette.text.primary,
//   },
//   page: {
//     paddingTop: '3.8rem',
//   },
// }));

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
