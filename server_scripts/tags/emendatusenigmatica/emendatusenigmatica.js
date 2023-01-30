ServerEvents.tags('item', event => {
    const emendatusenigmatica_items = [
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
    'zinc',
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
    'sulfur',
    'brass',
    'bronze',
    'constantan',
    'electrum',
    'enderium',
    'graphite',
    'invar',
    'lumium',
    'signalum',
    'steel',
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
    const emendatusenigmatica_type = [
        'block',
        'dirty_dust',
        'dust',
        'gear',
        'ingot',
        'nugget',
        'plate',
        'rod',
        'raw',
        'gem'
    ]
    emendatusenigmatica_type.forEach((type) => {
        emendatusenigmatica_items.forEach((item) => {
            if(!Item.exists(`emendatusenigmatica:${item}_${type}`)) {
            return
            }else if (type == 'block'){
                event.add(`forge:storage_${type}s/${item}`, [`emendatusenigmatica:${item}_${type}`])
                event.add(`forge:storage_${type}s`, [`emendatusenigmatica:${item}_${type}`])
            }else if ( type == 'raw' ){
                event.add(`forge:${type}_materials/${item}`, [`emendatusenigmatica:${item}_${type}`])
                event.add(`forge:${type}_materials`, [`emendatusenigmatica:${item}_${type}`])
            }else{
                event.add(`forge:${type}s/${item}`, [`emendatusenigmatica:${item}_${type}`])
                event.add(`forge:${type}s`, [`emendatusenigmatica:${item}_${type}`])
            }
        });
    });
});
//crushed_ore'#forge:storage_blocks/iron'