let OriginalY = 50
let GenerationGap = 50


function drawFamilyTree () {
    Family.forEach(FamilyMember => {
        FamilyMember.findGeneration();
    });
    
    // Draw each box where the members name is.
    drawFamilyMembers();
}

function drawFamilyMembers () {
    rectMode(CENTER)
    textAlign(CENTER, CENTER)

    Family.forEach(FamilyMember => {
        // If the member being checked does not have a parent, it's the original generation and should be drawn at the top of the tree. 
        let x = windowWidth / 2;
        // The y coordinate is the generation number multiplied by the gap between generations.
        let y = (FamilyMember.findGeneration() * GenerationGap) + OriginalY;
        if (FamilyMember.parent == null) {
            
            rect(x, y, 50, 25)
            text(FamilyMember.name, x, y)
        }   else { // If the member does have a parent, draw below the parent. 
            let parent = FamilyMember.parent;

            let siblings = parent.findChildren();

            let offset = siblings.indexOf(FamilyMember) * 200 - (siblings.length - 1) * 100; // Calculate the offset based on the index of the sibling and the total number of siblings.
            
            x = windowWidth / 2 + offset; // Set the x coordinate based on the parent's x coordinate and the offset.


            // The x offset is determined by the number of children the parent has.
            rect(x, y, 50, 25)
            text(FamilyMember.name, x, y)
        }
    });
}