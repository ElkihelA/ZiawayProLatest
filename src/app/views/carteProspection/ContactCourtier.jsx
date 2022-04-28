import React, { useState } from "react";
import { Button } from "react-bootstrap";
import InboxComposeDialog from "./InboxComposeDialog";

const ContactCourtier = ({ open, toggleSidenav }) => {
  let [composeDialogOpen, setComposeDialogOpen] = useState(false);
  const closeDialog = () => {
    setComposeDialogOpen(false);
  };

  return (
    <div
    >
      <div className="pt-3 pr-3 pb-3">
         <button
          onClick={() => setComposeDialogOpen(true)}
          className="btn btn-rounded btn-primary btn-block mb-4"
        >
          Contacter
        </button>
       
       
      </div>
      <InboxComposeDialog
        open={composeDialogOpen}
        handleClose={closeDialog}
      ></InboxComposeDialog>
    </div>
  );
};

export default ContactCourtier;

{
  /* <Button
        onClick={() => setOpen(true)}
        variant="danger"
        className="py-8 w-100"
      >
        Compose
      </Button>
      <ListItem button>
        <ListItemIcon>
          <Icon>inbox</Icon>
        </ListItemIcon>
        <ListItemText primary="Inbox" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Icon>folder_special</Icon>
        </ListItemIcon>
        <ListItemText primary="Starred" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Icon>send</Icon>
        </ListItemIcon>
        <ListItemText primary="Sent" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Icon>inbox</Icon>
        </ListItemIcon>
        <ListItemText primary="Inbox" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Icon>error</Icon>
        </ListItemIcon>
        <ListItemText primary="Spam" />
      </ListItem>

      <Divider />

      <ListItem button>
        <ListItemIcon>
          <Icon color="primary">people</Icon>
        </ListItemIcon>
        <ListItemText primary="Social" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Icon color="secondary">local_offer</Icon>
        </ListItemIcon>
        <ListItemText primary="Promotions" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Icon color="secondary">forums</Icon>
        </ListItemIcon>
        <ListItemText primary="Forums" />
      </ListItem>

      <InboxComposeDialog open={open} handleClose={handleClose} /> */
}
