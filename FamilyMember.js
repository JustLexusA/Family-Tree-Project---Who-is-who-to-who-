// This is gonna be the class for each family member. It will include their name and their parent, gender
//  any other relevant information. It will also include a draw function to draw the family member on the canvas
//  and a function to add a child to the family member. The draw function will also draw lines connecting the family member to their parent and children.
class FamilyMember {
    constructor(name = 'No Name', parent = null, gender = 'neither') {
        this.name = name;
        this.parent = parent;
        this.gender = gender;
    }
    draw() {
        rectMode(CENTER);
        textAlign(CENTER);
        

    }
}