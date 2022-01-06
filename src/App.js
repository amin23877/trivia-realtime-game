import { Box, Container, CssBaseline, Drawer, Grid, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles } from "@material-ui/core";
import PageRoutes from "./Router/PageRoutes";
import './App.css';
import { SideDrawer, Header } from "./components";





// 



const useStyles = makeStyles ( (theme ) => ({
    link : {
        textDecoration : 'none',
        color: theme.palette.text.primary
    }
}))


export default function App () {


    const classes = useStyles();

    return (
        <div>
            <CssBaseline />
            <header className="header">
                <Header/>
            </header>
            <div style={{display : 'flex'}}>
                <SideDrawer />
                <Container position="static">
                    <PageRoutes />
                </Container>
            </div>
        </div>
    )
}