import React from 'react';
import { Navbar, NavbarText } from 'reactstrap';

const Header = () => {
    // reset button
    // color button group
    return (
        <Navbar className="Navbar" dark>
            <NavbarText className="title">
                Light-Bright
            </NavbarText>
        </Navbar>
    );
};

export default Header;