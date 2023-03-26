/*onEvent('recipes', (event) => {
    materialsToUnify.forEach((material) => {
        typesToUnify.forEach((type) => {
            if (!entryIsBlacklisted(material, type)) {
                let tagString = `#forge:${type}s/${material}`;
                let tag = Ingredient.of(tagString);
                if (tag.stacks.size() > 1) {
                    let prefItem = getPreferredItemInTag(tag);
                    event.replaceOutput({}, tagString, prefItem);
                }
            }
        });
    });
});
*/