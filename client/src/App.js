import { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import {  makeStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import axios from "axios";

import theme from "./theme";
import logo from "./logo.png";
import AlignItemsList from "./components/List";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    border: "5px solid weate",
  },
}));

function App() {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    axios
      .get("/api/v1/products")
      .then((response) => setProducts(response.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="App">
      <AppBar position="static" style={{ margin: 0 }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Avatar alt="Barmej Logo" className={classes.avatar}>
              <img
                src={logo}
                style={{
                  width: 70,
                  backgroundColor: "transparent",
                  borderRadius: "50%",
                }}
              />
            </Avatar>
          </IconButton>
          <Typography
            align="right"
            component="h2"
            variant="h5"
            color="secondary"
          >
            Heroku Demo
          </Typography>
        </Toolbar>
      </AppBar>
      
      <AlignItemsList products={products} />
    </div>
  );
}

export default App;
