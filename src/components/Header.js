import React from 'react';
import { 
    Navbar, 
    NavItem, 
    NavbarBrand,
    Button
} from 'reactstrap';
import ColorPicker from './ColorPicker';

const Header = () => {
    return (
        <Navbar className="Navbar" dark>
            <NavbarBrand className="title">
                Light-Bright
            </NavbarBrand>
            <NavItem>
                <Button className="reset-button">Reset</Button>
            </NavItem>
            <NavItem id="show-color">
                <Button className="node" disabled />
            </NavItem>
            <ColorPicker />
        </Navbar>
    );
};

export default Header;