import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
// import MenuIcon from '@material-ui/icons/Menu';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import IconButton from '@material-ui/core/IconButton';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

function ButtonAppBar() {

  return (
    <div>
      <AppBar>
        <Toolbar>
          <DragIndicatorIcon/>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default ButtonAppBar
 