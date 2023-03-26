onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'minecraft:furnace',
            pattern: [
                'ccc',
                'c c',
                'ccc'
            ],
            key: {
                c: '#forge:stones/sandstone'
            },
            id: 'minecraft:furnace'
        },
        {
            output: 'minecraft:coarse_dirt',
            pattern: [
                ' c ',
                'cvc',
                ' c '
            ],
            key: {
                c: 'minecraft:cactus',
                v: '#forge:stones/sandstone'
            },
            id: 'minecraft:coarse_dirt'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
