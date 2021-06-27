import React from 'react';
import { 
    Navbar, 
    NavItem, 
    NavbarBrand
} from 'reactstrap';
import ColorPicker from './ColorPicker';

const Header = () => {
    return (
        <Navbar className="Navbar" dark>
            <NavbarBrand className="title">
                Light-Bright
            </NavbarBrand>
            {/* reset button */}
            <NavItem>
                <ColorPicker />
            </NavItem>
        </Navbar>
    );
};

export default Header;