import {
  Dialog,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import React from 'react';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import BookIcon from '@mui/icons-material/Book';

const HeaderModal: React.FC<{ open: boolean; handleClose: () => void }> = ({
  open,
  handleClose,
}) => {
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Main site menu</DialogTitle>
      <DialogContent>
        <List sx={{ pt: 0 }}>
          <ListItem button sx={{ mb: 2 }}>
            <ListItemAvatar>
              <HomeRoundedIcon />
            </ListItemAvatar>
            <ListItemText primary="Home" />
          </ListItem>

          <ListItem button sx={{ mb: 2 }}>
            <ListItemAvatar>
              <BookIcon />
            </ListItemAvatar>
            <ListItemText primary="Blog Posts" />
          </ListItem>

          <ListItem autoFocus button>
            <ListItemAvatar>
              <AlternateEmailIcon />
            </ListItemAvatar>
            <ListItemText primary="Credits" />
          </ListItem>
        </List>
      </DialogContent>
    </Dialog>
  );
};

export default HeaderModal;
