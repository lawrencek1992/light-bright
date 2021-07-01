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

    const nodesGrid = () => {
        return (
            <>
                { nodesArray.map((num) => (
                    <Button 
                        className="node" 
                        key={num} 
                        id={num} 
                        style={{ backgroundColor: `${nodes[num]}`}}
                        onClick={(event) => {
                            dispatch({ type: UPDATE, payload: {node: num, newColor: currentColor}});
                            event.target.style.backgroundColor = nodes[num];
                        }}
                    />
                ))}
            </>
        )
    }
    return (
        <Container className="Nodes" fluid>
            {nodesGrid()}
        </Container>
    );
};

export default Nodes;
