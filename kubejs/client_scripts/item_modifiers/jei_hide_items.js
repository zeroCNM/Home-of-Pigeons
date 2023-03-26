onEvent('jei.hide.items', (event) => {
    materials_add.forEach((material) => {
        materials_types.forEach((types) => {
            itemsToHide.push(
                'occultism:' + material + '_' + types,
                'immersiveengineering:' + material + '_' + types,
                'mekanism:' + material + '_' + types,
                'thermal:' + material + '_' + types,
                'create:' + material + '_' + types,
                'silentgems:' + material + '_' + types,
            );
        });
    });
    itemsToHide.forEach((disabledItem) => {
        if (!Item.of(disabledItem).isEmpty()) {
            event.hide(disabledItem);
        }
    });
    //ae2
    event.hide(Item.of('ae2:facade').ignoreNBT());
    //colors
    colors.forEach((color) => {
    });
});