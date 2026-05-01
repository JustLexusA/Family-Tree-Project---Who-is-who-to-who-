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
        let y = (FamilyMember.findGeneration() * GenerationGap) + OriginalY;
        if (FamilyMember.parent == null) {
            rect(x, y, 50, 25)
            text(FamilyMember.name, x, y)
        }

        if (FamilyMember.parent !== null) {
            rect(x / 2, y, 50, 25)
            text(FamilyMember.name, x / 2, y)
        }
    });
}