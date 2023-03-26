onEvent('recipes', (event) => {
    const recipes = [
        /*{
            output: 'botania:diluted_pool',
            pattern: [
                '   ',
                'c c',
                'vcv'
            ],
            key: {
                c: 'botania:livingrock',
                v: 'hearthwell:myst_ingot'
            },
            id: 'botania:diluted_pool'
        }*/
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
