onEvent('item.tags', (event) => {
    event.get('forge:ingots/uraninite').add('powah:uraninite');
    event.get('forge:ingots/energized_steel').add('powah:steel_energized');
    event.get('forge:ingots/radioactive').add('#forge:ingots/uraninite').add('#forge:ingots/uranium');

    event.add('forge:ingots', [
        'bloodmagic:ingot_hellforged',
        'botania:gaia_ingot',
        'create:andesite_alloy',
        'immersiveengineering:ingot_aluminum',
        'immersiveengineering:ingot_constantan',
        'immersiveengineering:ingot_electrum',
        'immersiveengineering:ingot_hop_graphite',
        'immersiveengineering:ingot_lead',
        'immersiveengineering:ingot_nickel',
        'immersiveengineering:ingot_silver',
        'immersiveengineering:ingot_uranium',
        'industrialforegoing:pink_slime_ingot',
        'minecraft:netherite_scrap',
        'mythicbotany:alfsteel_ingot',
        'occultism:iesnium_ingot',
        'powah:steel_energized',
        'powah:uraninite',
        'bluepower:purple_alloy_ingot', 
        'bluepower:red_alloy_ingot', 
        'bluepower:blue_alloy_ingot', 
        'bluepower:brass_ingot', 
        'bluepower:tungsten_carbide', 
        'bluepower:tungsten_ingot', 
        'bluepower:zinc_ingot'
    ]);
    event.get('forge:ingots/alfsteel').add('mythicbotany:alfsteel_ingot');
    event.get('forge:ingots/pink_slime').add('industrialforegoing:pink_slime_ingot');
    event.get('forge:ingots/gaia').add('botania:gaia_ingot');
    event.get('forge:ingots/gaia_spirit').add('botania:gaia_ingot');
    event.add('forge:ingots/andesite_alloy', ['create:andesite_alloy']);

    event.add('forge:ingots/sky', ['naturesaura:sky_ingot']);
    event.add('forge:ingots/tainted_gold', ['naturesaura:tainted_gold']);
    event.add('forge:ingots/infused_iron', ['naturesaura:infused_iron']);
    
    event.add('forge:ingots/purple_alloy', ['bluepower:purple_alloy_ingot']);
    event.add('forge:ingots/red_alloy', ['bluepower:red_alloy_ingot']);
    event.add('forge:ingots/blue_alloy', ['bluepower:blue_alloy_ingot']);
    event.add('forge:ingots/tungsten_carbide', ['bluepower:tungsten_carbide']);
});