let nodesArray = [];
for (let i = 1; i <= 1300; i++) {
    nodesArray.push(i);
}
let initialNodeColors = {};
initialNodeColors.currentColor = "#343a40";
nodesArray.forEach(element => {
    let nodeID = element;
    let nodeColor = "#343a40"; // $gray-800
    initialNodeColors[nodeID] = nodeColor;
})

export const initialData = initialNodeColors;