# Family-Tree-Project---Who-is-who-to-who

## Who are you to this member of the family tree?

let person name = new FamilyMember('Person Name', parent/null <--- Oldest common ancestor)

let Family = [ALL FAMILY MEMBERS]
let personA, personB;

class FamilyMember {
    constructor(name, parent = null) {
        this.name = name;
        this.parent = parent;
        this.drawPos = null;
    }
}

let generation
let currentAncestor
Check if personA/personB's parent is null, false? {
    currentAncestor = personA/personB.parent
    generation++
} else if personA/personB's parent is null, true? {
    do nothing
} return generation

