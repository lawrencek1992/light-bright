let nodesArray = [];
for (let i = 0; i <= 1299; i++) {
    nodesArray.push(i);
}
let initialNodeColors = {
    currentColor: "#343a40",
    nodes: [],
};
nodesArray.forEach(node => {
    let nodeColor = "#343a40"; // $gray-800
    initialNodeColors.nodes[node] = nodeColor;
})

export const initialData = initialNodeColors;