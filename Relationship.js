function findRelationship(personA, personB) {
    let genDiff = abs(personA.findGeneration() - personB.findGeneration()); // Will be used for 1st, 2nd cousins once, twice removed, etc.
    let greatness = genDiff - 2; // Calculates how many times great is needed for grandparents and great grandparents.
    //  If genDiff is 2, then greatness is 0 and we don't need to add "great" to the relationship.
    //  If genDiff is 3, then greatness is 1 and we need to add "great" once to the relationship and so on.

    // These are relationships with a generation different of 0 or 1.
    // If personA is personB, they are the same person.
    if (personA === personB) {
        relationshipofAB = "same person as";
    } // If personA is the parent of personB, then personA is the parent of personB.
    else if (personB.parent === personA) {
        relationshipofAB = "parent of";
    } // If personB is the parent of personA, then personA is the child of personB.
    else if (personA.parent === personB) {
        relationshipofAB = "child of";
    } // If personA and personB have the same parent, they are siblings.
    else if (personA.parent !== null && personA.parent === personB.parent) {
        relationshipofAB = "sibling of";
    } // If personA and personB have the same grandparent, they are cousins.
    else if (personA.parent !== null && personB.parent !== null && personA.parent.parent === personB.parent.parent) {
        relationshipofAB = "cousin of";
    } // If personA is the sibling of personB's parent, then personA is the aunt/uncle of personB.
    else if (personA.parent !== null && personB.parent !== null && personA.parent === personB.parent.parent) {
        relationshipofAB = "aunt/uncle of";
    } // If personB is the sibling of personA's parent, then personA is the niece/nephew of personB.
    else if (personA.parent !== null && personB.parent !== null && personB.parent === personA.parent.parent) {
        relationshipofAB = "niece/nephew of";
    } 

    // These are relationships with a generation difference of 2 or more.
    // If personA is the grandparent of personB, then personA is the grandparent of personB.
    if (personB.parent !== null && personB.parent.parent === personA) {
        relationshipofAB = "grandparent of";
    } // If personB is the grandparent of personA, then personA is the grandchild of personB.
    else if (personA.parent !== null && personA.parent.parent === personB) {
        relationshipofAB = "grandchild of";
    }

    print(`${personA.name} is the ${relationshipofAB} ${personB.name}`);
}   

