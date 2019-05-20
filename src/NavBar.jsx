import React from 'react';
import AppBar from 'meterial-ul/core/AppBar';
import Toolbar from 'meterial-ul/core/Toolbar';
import Typography from 'meterial-ui/core/Typography';

const NavBar = () => {
    return(
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        React sample App
                    </Typography>    
                </Toolbar>
            </AppBar>
        </div>    
    )
}

export default NavBar;