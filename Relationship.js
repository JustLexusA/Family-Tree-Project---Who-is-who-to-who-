function findRelationshipBetween(personA, personB) {
    getOrdinalNumber();
    genA = personA.findGeneration();
    genB = personB.findGeneration();
    genDiff = abs(genA - genB); // Will be used for 1st, 2nd cousins once, twice removed, etc.
    let uncleauntgreatness = genDiff - 1; // Calculates how many times great is needed for uncles/aunts and great uncles/aunts.
    let parentgreatness = genDiff - 2; // Calculates how many times great is needed for grandparents and great grandparents.
    //  If genDiff is 2, then greatness is 0 and we don't need to add "great" to the relationship.
    //  If genDiff is 3, then greatness is 1 and we need to add "great" once to the relationship and so on.
    let orderOfCousin = getOrdinalNumber() // Calculates if they are 1st, 2nd, 3rd, etc. cousins.
    let timesRemoved = abs(genA - genB); // Will be used for cousins once, twice removed, etc.

    // Print the difference in generations between personA and personB to the console.
    print(`The difference in generations between ${personA.name} and ${personB.name} is ${genDiff}`);

    // Check if personA and personB are the same person.
    if (personA === personB) {
        return "the same person as ";
    } 

    // Calculate depth of personA to personB then print to console.
    let depthAtoB = personA.depthToCommonAncestor(personB);
    let depthBtoA = personB.depthToCommonAncestor(personA);
    let mainDepthValue = 0;

    // If both depths are -1, they are not directly related, but if only one is -1, then they are related.
    if (depthAtoB == -1 && depthBtoA != -1) {
        mainDepthValue = depthBtoA;
    } else if (depthBtoA == -1 && depthAtoB != -1) {
        mainDepthValue = depthAtoB;
    } else if (depthAtoB == -1 && depthBtoA == -1) {
        mainDepthValue = depthAtoB // or depthBtoA, they are both -1 (Not DIRECTLY related)
    }
    print(`The depth of ${personA.name} to ${personB.name} is ${mainDepthValue}`);


    // If both are -1, check if they have a common ancestor through their lineage. If they do,
    // then one of them is an uncle/aunt or nephew/niece of the other
    // If they don't have a common ancestor, then they are just cousins, at least in this family tree.
    let commonAncestor = null; 
    let count = 0;
    if (mainDepthValue == -1) {
        count = 0;
        // Check whose the younger generationally then go up the lineage by how many generations they are apart
        // Then check, if commonAncestor == the other person's parent, then they are (great) uncle/aunt and (great) nephew/niece. If not, then they are cousins.
        if (genA >= genB) {
            commonAncestor = personA;
            while (count !== genDiff + 1) {
                commonAncestor = commonAncestor.parent;
                count++;
            } 
            if (commonAncestor == personB.parent) { // If the ancestor of personA is personB's parent then personB is an uncle/aunt of personA
                relationshipofAB = `${"great ".repeat(uncleauntgreatness)}uncle/aunt of `;  
            } else {
                relationshipofAB = `cousin${timesRemoved == 0 ? " of " : " " + timesRemoved + " times removed of "}`;
            }
        } else if (genB >= genA) { 
            commonAncestor = personB;
            while (count !== genDiff + 1) {
                commonAncestor = commonAncestor.parent;
                count++;
            } 
                if (commonAncestor == personA.parent) {
                  relationshipofAB = `${"great ".repeat(uncleauntgreatness)}uncle/aunt of `;
                } else {
                relationshipofAB = `cousin${timesRemoved == 0 ? " of " : " " + timesRemoved + " times removed of "}`;
            }
        }
        let olderPerson = personA
        print(count)
        if (genA > genB) {
            olderPerson = personB
        }
        print(commonAncestor.name + " " + olderPerson.name)
    }
    // Print the relationship between personA and personB to the console.
    print(`${personA.name} is the ${relationshipofAB}${personB.name}`);
    
}

function getOriginalPerson(relatives) {
    for (let i = 0; i < relatives.length; i++) {
    let currentPerson = relatives[i];
        while (currentPerson.parent !== null) {
            currentPerson = currentPerson.parent;
        }
        return currentPerson;
    }
    return null; // No original person found???
}

function getOrdinalNumber() {
    let generationA = personA.findGeneration()
    let generationB = personB.findGeneration()

}