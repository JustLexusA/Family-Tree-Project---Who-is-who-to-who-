// This is gonna be the class for each family member. It will include their name and their parent, gender
//  any other relevant information. It will also include a draw function to draw the family member on the canvas
//  and a function to add a child to the family member. The draw function will also draw lines connecting the family member to their parent and children.
class FamilyMember {
    constructor(name, parent = null) {
        this.name = name;
        this.parent = parent;
        this.drawPos = null
    }

    findGeneration() {
        let generation = 0;
        // 'this' is the family member, if personA was Grace then 'this' would be Grace (remember this)
        let currentPerson = this;

        // If currentPerson does have a parent, go up the family tree and add to generation.
        // If it checks currentPerson and it doesn't have a parent (parent == null) then we stop
        // Should end up at John, the common ancestor.
        while (currentPerson.parent !== null) {
            generation++;
            currentPerson = currentPerson.parent
        }
        return generation
    }

    findChildren(relatives = []) {
        // let children of this family member would be any family member in the Family array that has this family member as their parent.
        let children = [];
        relatives.forEach(FamilyMember => {
            if (FamilyMember.parent === this) {
                children.push(FamilyMember);
            }
        });
        return children;
    }

    findLineage() {
        let lineage = [];
        let currentPerson = this;
        while (currentPerson.parent !== null) {
            lineage.push(currentPerson.parent);
            currentPerson = currentPerson.parent;
        }
        return lineage;
    }

    draw(x, y) {
        if (x !== undefined && y !== undefined) {
            this.drawPos = createVector(x, y);
        }

        if (this.drawPos === null) {
            return;
        }

        push();
        textAlign(CENTER, CENTER);
        rectMode(CENTER);
        fill(255);
        stroke(0);
        rect(this.drawPos.x, this.drawPos.y, 50, 20);
        fill(0);
        noStroke();
        textStyle(BOLD);
        textSize(10);
        text(this.name, this.drawPos.x, this.drawPos.y);
        pop();
    }
}