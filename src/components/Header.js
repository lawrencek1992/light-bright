import React, { useState } from 'react';
import { RESET } from '../store/actionTypes';
import { useSelector, useDispatch } from 'react-redux';
import { 
    Navbar, 
    NavItem, 
    NavbarBrand,
    Button
} from 'reactstrap';
import ColorPicker from './ColorPicker';
import ResetWarning from './ResetWarning';

const Header = () => {
    const [showWarning, setShowWarning] = useState(false);
    const currentColor = useSelector((state) => state.currentColor);
    
    return (
        <Navbar className="Navbar" dark>
            <NavbarBrand id="title">
                Light-Bright
            </NavbarBrand>
            <NavItem>
                <Button 
                    id="reset-button" 
                    onClick={() => setShowWarning(true)}>Reset</Button>
            </NavItem>
            <NavItem className="show-color">
                <Button className="node" style={{ backgroundColor: `${currentColor}`}} disabled />
            </NavItem>
            <ColorPicker />
            <ResetWarning showWarning={showWarning} setShowWarning={setShowWarning} />
        </Navbar>
    );
};

export default Header;