const emendatusenigmatica_metal = [
    'aluminum',
    'iridium',
    'lead',
    'nickel',
    'platinum',
    'silver',
    'tin',
    'titanium',
    'tungsten',
    'uranium',
    'zinc'
]
const emendatusenigmatica_gem = [
    'apatite',
    'bitumen',
    'charoite',
    'cinnabar',
    'dimensional',
    'diopside',
    'moonstone',
    'potassium_nitrate',
    'pyrope',
    'sapphire',
    'sulfur'
]
const emendatusenigmatica_alloy = [
    'brass',
    'bronze',
    'constantan',
    'electrum',
    'enderium',
    'graphite',
    'invar',
    'lumium',
    'signalum',
    'steel'

]
const emendatusenigmatica_vanilla = [
    'coal',
    'copper',
    'diamond',
    'emerald',
    'gold',
    'iron',
    'lapis',
    'netherite',
    'quartz',
    'redstone'
]
const emendatusenigmatica_vanilla_ingot = [
    'copper',
    'gold',
    'iron',
    'netherite',
]
const emendatusenigmatica = [
    { name : 'coal' , tpye : 'vanilla' },
    { name : 'copper' , tpye : 'vanilla' },
    { name : 'diamond' , tpye : 'vanilla' },
    { name : 'emerald' , tpye : 'vanilla' },
    { name : 'gold' , tpye : 'vanilla' },
    { name : 'iron' , tpye : 'vanilla' },
    { name : 'lapis' , tpye : 'vanilla' },
    { name : 'netherite' , tpye : 'vanilla' },
    { name : 'quartz' , tpye: 'vanilla' },
    { name : 'redstone' , tpye : 'vanilla' },

    { name : 'brass' , tpye : 'alloy' },
    { name : 'bronze' , tpye : 'alloy' },
    { name : 'constantan' , tpye : 'alloy' },
    { name : 'electrum' , tpye : 'alloy' },
    { name : 'enderium' , tpye : 'alloy' },
    { name : 'graphite' , tpye : 'alloy' },
    { name : 'invar' , tpye : 'alloy' },
    { name : 'lumium' , tpye : 'alloy' },
    { name : 'signalum' , tpye : 'alloy' },
    { name : 'steel' , tpye : 'alloy' },

    { name : 'apatite' , tpye : 'gem' },
    { name : 'bitumen' , tpye : 'gem' },
    { name : 'charoite' , tpye : 'gem' },
    { name : 'cinnabar' , tpye : 'gem' },
    { name : 'dimensional' , tpye : 'gem' },
    { name : 'diopside' , tpye : 'gem' },
    { name : 'moonstone' , tpye : 'gem' },
    { name : 'potassium_nitrate'  , tpye : 'gem' },
    { name : 'pyrope' , tpye : 'gem' },
    { name : 'sapphire' , tpye : 'gem' },
    { name : 'sulfur' , tpye : 'gem' },

    { name : 'aluminum' , tpye : 'metal' },
    { name : 'iridium' , tpye : 'metal' },
    { name : 'lead' , tpye : 'metal' },
    { name : 'nickel' , tpye : 'metal' },
    { name : 'platinum' , tpye : 'metal' },
    { name : 'silver' , tpye : 'metal' },
    { name : 'tin' , tpye : 'metal' },
    { name : 'titanium' , tpye : 'metal' },
    { name : 'tungsten' , tpye : 'metal' },
    { name : 'uranium' , tpye : 'metal' },
    { name : 'zinc' , tpye : 'metal' },
]
StartupEvents.registry('item', event => {
    emendatusenigmatica.forEach((item) => {
        event.create(`emendatusenigmatica:${item.name}_dust`).texture(`emendatusenigmatica:${item.tpye}/${item.name}/items/${item.name}_dust`);
        event.create(`emendatusenigmatica:${item.name}_gear`).texture(`emendatusenigmatica:${item.tpye}/${item.name}/items/${item.name}_gear`);
        event.create(`emendatusenigmatica:${item.name}_plate`).texture(`emendatusenigmatica:${item.tpye}/${item.name}/items/${item.name}_plate`);
    });
    emendatusenigmatica_metal.forEach((item) => {
        event.create(`emendatusenigmatica:${item}_ingot`).texture(`emendatusenigmatica:metal/${item}/items/${item}_ingot`);
        event.create(`emendatusenigmatica:${item}_nugget`).texture(`emendatusenigmatica:metal/${item}/items/${item}_nugget`);
        event.create(`emendatusenigmatica:crushed_${item}_ore`).texture(`emendatusenigmatica:metal/${item}/items/crushed_${item}_ore`);
        event.create(`emendatusenigmatica:raw_${item}`).texture(`emendatusenigmatica:metal/${item}/items/raw_${item}`);
        event.create(`emendatusenigmatica:${item}_dirty_dust`).texture(`emendatusenigmatica:metal/${item}/items/${item}_dirty_dust`);
    });
    emendatusenigmatica_alloy.forEach((item) => {
        event.create(`emendatusenigmatica:${item}_ingot`).texture(`emendatusenigmatica:alloy/${item}/items/${item}_ingot`);
        event.create(`emendatusenigmatica:${item}_nugget`).texture(`emendatusenigmatica:alloy/${item}/items/${item}_nugget`);
    });
    emendatusenigmatica_gem.forEach((item) => {
        event.create(`emendatusenigmatica:${item}_gem`).texture(`emendatusenigmatica:gem/${item}/items/${item}_gem`);
        event.create(`emendatusenigmatica:${item}_dirty_dust`).texture(`emendatusenigmatica:gem/${item}/items/${item}_dirty_dust`);
    });
    emendatusenigmatica_vanilla.forEach((item) => {
        event.create(`emendatusenigmatica:crushed_${item}_ore`).texture(`emendatusenigmatica:vanilla/${item}/items/crushed_${item}_ore`);
        event.create(`emendatusenigmatica:${item}_dirty_dust`).texture(`emendatusenigmatica:vanilla/${item}/items/${item}_dirty_dust`);
    });
    emendatusenigmatica_vanilla_ingot.forEach((item) => {
        event.create(`emendatusenigmatica:${item}_ingot`).texture(`emendatusenigmatica:vanilla/${item}/items/${item}_ingot`);
        event.create(`emendatusenigmatica:${item}_nugget`).texture(`emendatusenigmatica:vanilla/${item}/items/${item}_nugget`);
    });
})
StartupEvents.registry('block', event => {
    emendatusenigmatica.forEach((block) => {
        event.create(`emendatusenigmatica:${block.name}_block`)
        .material('iron')
        .hardness(5)
        .textureAll(`emendatusenigmatica:${block.tpye}/${block.name}/blocks/${block.name}_block`)
    });
    /*emendatusenigmatica_metal.forEach((block) => {
        event.create(`emendatusenigmatica:${block}_block`)
        .material('iron')
        .hardness(5)
        .textureAll(`emendatusenigmatica:metal/${block}/blocks/${block}_block`)
    });*/
})