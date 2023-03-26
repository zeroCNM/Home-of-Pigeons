onEvent('recipes', (event) => {
    const id_prefix = 'ico:unification/unify_materials/';
    materials_add.forEach((material) => {
        var ingot = getPreferredItemInTag(Ingredient.of(`#forge:ingots/${material}`)).id;
        var nugget = getPreferredItemInTag(Ingredient.of(`#forge:nuggets/${material}`)).id;
        var block = getPreferredItemInTag(Ingredient.of(`#forge:storage_blocks/${material}`)).id;
        var gem = getPreferredItemInTag(Ingredient.of(`#forge:gems/${material}`)).id;
        emendatusenigmatica_base(event, material, ingot, nugget, block, gem)
    })
    function emendatusenigmatica_base(event, material, ingot, nugget, block, gem) {
        var output_block = block,
            output_ingot = ingot,
            output_nugget = nugget,
            output_gem = gem,
            //
            input_block = block,
            input_ingot = ingot,
            input_nugget = nugget,
            input_gem = gem;
        //
        if (ingot != air && block != air) {
            event.shapeless(output_block, [`9x ${input_ingot}`]).id(`ico:unification/unify_materials/emendatusenigmatica_base/${material}_block`);
            event.shapeless(`9x ${output_ingot}`, [input_block]).id(`ico:unification/unify_materials/emendatusenigmatica_base/${material}_ingot_from_block`);
        } else if (ingot != air && nugget != air) {
            event.shapeless(output_ingot, [`9x ${input_nugget}`]).id(`ico:unification/unify_materials/emendatusenigmatica_base/${material}_ingot_from_nugget`);
            event.shapeless(`9x ${output_nugget}`, [input_ingot]).id(`ico:unification/unify_materials/emendatusenigmatica_base/${material}_nugget`);
        } else if (gem != air && block != air) {
            event.shapeless(output_block, [`9x ${input_gem}`]).id(`ico:unification/unify_materials/emendatusenigmatica_base/${material}_block`);
            event.shapeless(`9x ${output_gem}`, [input_block]).id(`ico:unification/unify_materials/emendatusenigmatica_base/${material}_gem`);
        }
        else {
            return
        }
    }
})




