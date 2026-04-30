function drawFamilyTree () {
    Family.forEach(FamilyMember => {
        FamilyMember.findChildren();
    });
}