import React from 'react';
import { UPDATE } from '../store/actionTypes';
import { useSelector, useDispatch } from 'react-redux';
import { 
    Container, 
    Button,
} from 'reactstrap'; 

const Nodes = () => {
    const currentColor = useSelector((state) => state.currentColor);
    const nodes = useSelector((state) => state.nodes);
    const dispatch = useDispatch();

    // Define an array with the total number of nodes (for large screens--small screens will cut nodes off);
    let nodesArray = [];
    for (let i = 0; i <= 1299; i++) {
        nodesArray.push(i);
    }

    const originalColor = "#343a40";

    // Handle single and double clicks:
    const handleClick = (e, num) => {
        switch(e.detail) {
            case 1: 
                dispatch({ type: UPDATE, payload: {node: num, newColor: currentColor}});
                e.target.style.backgroundColor = nodes[num];
                break;
            case 2: 
                dispatch({ type: UPDATE, payload: {node: num, newColor: originalColor }});
                e.target.style.backgroundColor = nodes[num];
                break;
            default: 
                dispatch({ type: UPDATE, payload: {node: num, newColor: originalColor }});
                e.target.style.backgroundColor = nodes[num];
                break;
        }
    }

    return (
        <Container className="Nodes" fluid>
            { nodesArray.map((num) => (
                    <Button 
                        className="node" 
                        key={num} 
                        id={num} 
                        style={{ backgroundColor: `${nodes[num]}`}}
                        onClick={(event, num) => {
                            handleClick(event, num);
                        }}
                    />
                ))}
        </Container>
    )
};

export default Nodes;
