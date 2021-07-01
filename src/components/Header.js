import React from 'react';
import { RESET } from '../store/actionTypes';
import { useSelector, useDispatch } from 'react-redux';
import { 
    Navbar, 
    NavItem, 
    NavbarBrand,
    Button
} from 'reactstrap';
import ColorPicker from './ColorPicker';

const Header = () => {
    const nodes = useSelector((state) => state.nodes);
    const currentColor = useSelector((state) => state.currentColor);
    const dispatch = useDispatch();

    const reloadPage = () => {
        window.location.reload();
    }
    
    return (
        <Navbar className="Navbar" dark>
            <NavbarBrand className="title">
                Light-Bright
            </NavbarBrand>
            <NavItem>
                <Button 
                    id="reset-button" 
                    onClick={() => {
                        dispatch({ type: RESET});
                        reloadPage();
                    }
                }>Reset</Button>
            </NavItem>
            <NavItem className="show-color">
                <Button className="node" style={{ backgroundColor: `${currentColor}`}} disabled />
            </NavItem>
            <ColorPicker />
        </Navbar>
    );
};

export default Header;