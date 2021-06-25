import React from 'react';
import { 
    Container, 
    Button 
} from 'reactstrap'; 

const Nodes = () => {
    const mapNodes = () => {
        let numNodes = 100;
        let i = 0;
        while (i <= numNodes) {
            let nodeID = "node" + i;
            i++
            return (
                <Button id={nodeID} className="node" />
            );
        }
    }

    return (
        <Container className="Nodes" fluid>
            {mapNodes}
            {/* <Button id="node1" className="node" /> */}
        </Container>
    );
};

export default Nodes;
