import React, { useState } from "react";
import { Button } from "react-bootstrap";
import InboxComposeDialog from "./InboxComposeDialog";

const InboxSidenav = ({ open, toggleSidenav, t }) => {
  let [composeDialogOpen, setComposeDialogOpen] = useState(false);
  const closeDialog = () => {
    setComposeDialogOpen(false);
  };

  return (
    <div
      className="inbox-main-sidebar sidebar"
      style={{ left: open ? 0 : "-180px", top: 70 }}
    >
      <div className="pt-3 pr-3 pb-3">
        <i
          className="sidebar-close i-Close cursor-pointer"
          onClick={() => toggleSidenav("mainSidenavOpen")}
        ></i>
        <button
          onClick={() => setComposeDialogOpen(true)}
          className="btn btn-rounded btn-primary btn-block mb-4"
        >
          {t("Report_res.32")}
        </button>

        <div className="pl-3">
          <p className="text-muted mb-2">{t("Report_res.33")}</p>
          <ul className="inbox-main-nav">
            <li>
              <span className="active">
                <a href="#estimation">1- {t("Report_res.34")}</a>
              </span>
            </li>
            <li>
              <span>
                <a href="#caracteristiques">2- {t("Report_res.35")}</a>
              </span>
            </li>
            {/* <li>
              <span><a href="#environs" >3- Les environs</a></span>
            </li> */}

            <li>
              <span>
                <a href="#comparables">3- {t("Report_res.36")}</a>
              </span>
            </li>
            {/* <li>
              <span>
                <a href="#courtiers">4- {t("Report_res.37")}</a>
              </span>
            </li> */}
          </ul>
        </div>
      </div>
      <InboxComposeDialog
        open={composeDialogOpen}
        handleClose={closeDialog}
      ></InboxComposeDialog>
    </div>
  );
};

export default InboxSidenav;

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
