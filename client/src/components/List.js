import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { Typography, Card, Paper } from "@material-ui/core";
import theme from "../theme";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "70ch",
    backgroundColor: theme.palette.background.paper,
    margin: "0 auto",
    marginTop: "50px",
    direction: "rtl",
  },
  inline: {
    display: "inline",
  },
  title: {
    padding: 20,
    textAlign: "center",
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    fontSize:theme.spacing(4),
    fontFamily: 'Montserrat'
  },
}));

const DescriptionCSS = withStyles({
  "@global": {
    // You should target [class*="MuiButton-root"] instead if you nest themes.
    ".MuiListItemText-secondary": {
      textAlign: "right",
      lineHeight: "200%",
    },
    ".MuiListItemText-primary": {
      textAlign: "right",
      color: theme.palette.secondary.main,
      fontSize: theme.spacing(3),
    },
  },
})(() => null);

export default function AlignItemsList({ products }) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <Paper className={classes.title}>ﺍﻟﻤﻌﺴﻜﺮﺍﺕ ﺍﻟﺘﺪﺭﻳﺒﻴﺔ الاحترافية</Paper>
      {products.length ? (
        products.map((product) => (
          <div key={product._id}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" color="primary">
                  {product.short}
                </Avatar>
              </ListItemAvatar>
              <DescriptionCSS />
              <ListItemText
                primary={product.title}
                secondary={product.description}
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </div>
        ))
      ) : (
        <div style={{ width: "100%", textAlign: "center" }}>
          .........No Data........
        </div>
      )}
    </List>
  );
}
