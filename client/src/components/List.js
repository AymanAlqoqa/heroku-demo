import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
    margin: "0 auto",
    marginTop: "150px",
    direction: "rtl",
  },
  inline: {
    display: "inline",
  },
  description: {
   textAlign:"right"
  },
}));

export default function AlignItemsList({ products }) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {products.length ? (
        products.map((product) => (
          <div key={product._id}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp">{product.short}</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={product.title}
                secondary={
                  <React.Fragment className={classes.description}>
                    {product.description}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </div>
        ))
      ) : (
        <ListItem alignItems="center">.........No Data........</ListItem>
      )}
    </List>
  );
}
