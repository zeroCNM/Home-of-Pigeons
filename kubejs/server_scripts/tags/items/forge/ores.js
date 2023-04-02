onEvent('item.tags', (event) => {
    event.add('forge:ores', [
        'powah:uraninite_ore_poor',
        'powah:uraninite_ore',
        'powah:uraninite_ore_dense',
        'minecraft:ancient_debris',
        'occultism:iesnium_ore',
    ]);

    event.add('forge:ores/dimensional', [
        'rftoolsbase:dimensionalshard_overworld',
        'rftoolsbase:dimensionalshard_nether',
        'rftoolsbase:dimensionalshard_end'
    ]);
    event.add('forge:ores/nether/gold', [
        'minecraft:nether_gold_ore',
    ]);
    event.get('forge:ores/netherite').add('minecraft:ancient_debris');

    event.get('forge:ores/elementium').add(['mythicbotany:elementium_ore']);
    event.get('forge:ores/iesnium').add(['occultism:iesnium_ore']);
});
