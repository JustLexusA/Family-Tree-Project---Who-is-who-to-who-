function findRelationship(personA, personB) {
    // If personA and personB are the same person, return "Same person"
    if (personA === personB) {
        relationshipofAB = "Same person";
        return relationshipofAB;
    } else if (personA.parent === personB) { // If personA's parent is personB, return "Parent"
        relationshipofAB = "Parent";
        return relationshipofAB;
    } else if (personB.parent === personA) { // If personB's parent is personA, return "Child"
        relationshipofAB = "Child";
        return relationshipofAB;
    } else if (personA.parent !== null && personA.parent === personB.parent) { // If personA and personB have the same parent, return "Sibling"
        relationshipofAB = "Sibling";
        return relationshipofAB;
    } else { // If personA and personB are not the same person, do not have the same parent, and are not parent/child, check if they are cousins. If they are cousins, return "Cousin". If they are not cousins, return "No direct relationship".
        let personALineage = personA.findLineage();
        let personBLineage = personB.findLineage();
        let commonAncestor = null;
        for (let ancestorA of personALineage) {
            for (let ancestorB of personBLineage) {
                if (ancestorA === ancestorB) {
                    commonAncestor = ancestorA;
                    break;
                }
            }
            if (commonAncestor) {
                break;
            }
        }
        if (commonAncestor) {
            relationshipofAB = "Cousin";
        } else {
            relationshipofAB = "No direct relationship";
        }
        return relationshipofAB;
    }

    // Display the relationship in the console
    print(`${personA.name} is a ${relationshipofAB} of ${personB.name}`);
}