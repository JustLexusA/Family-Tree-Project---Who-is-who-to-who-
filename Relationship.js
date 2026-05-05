function findRelationship(personA, personB) {
    let sameGeneration = false;
    let genDiff = abs(personA.findGeneration() - personB.findGeneration()); // Will be used for 1st, 2nd cousins once, twice removed, etc.
    let greatness = genDiff - 2; // Calculates how many times great is needed for grandparents and great grandparents.
    //  If genDiff is 2, then greatness is 0 and we don't need to add "great" to the relationship.
    //  If genDiff is 3, then greatness is 1 and we need to add "great" once to the relationship and so on.

    // Check if personA and personB are the same person.
    if (personA === personB) {
        relationshipofAB = "the same person as";
    }

    // If personA and personB are from the same generation
    if (personA.findGeneration() === personB.findGeneration()) {
        sameGeneration = true;

        // If they are in the same generation, check if they are from the same lineage
    }


    // print(`${personA.name} is the ${relationshipofAB} ${personB.name}`);
}   

