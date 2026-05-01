// This is gonna be the class for each family member. It will include their name and their parent, gender
//  any other relevant information. It will also include a draw function to draw the family member on the canvas
//  and a function to add a child to the family member. The draw function will also draw lines connecting the family member to their parent and children.
class FamilyMember {
    constructor(name, parent = null) {
        this.name = name;
        this.parent = parent;
    }

    findGeneration() {
        let generation = 0;
        // 'this' is the family member, if personA was Grace then 'this' would be Grace
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
}