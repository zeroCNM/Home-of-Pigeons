onEvent('recipes',event =>{

    event.recipes.botania.mana_infusion('botania:manasteel_ingot', 'hearthwell:myst_ingot', 400, 'naturesaura:ancient_log')//植物魔法魔力钢配方

    event.shaped( '4x create:andesite_alloy',[
        'bc ',
        'cb ',
        '   '
    ],{
        c: 'botania:manasteel_nugget',
        b: '#forge:stone'
    })//机械动力安山合金配方

    event.shaped( 'minecraft:furnace',[
        'ccc',
        'c c',
        'ccc'
    ],{
        c: '#forge:stones/sandstone'
    })//熔炉配方
    
    event.shaped( 'hearthwell:prayer_letter',[
        '   ',
        'cc ',
        '   '
    ],{
        c: '#minecraft:wooden_pressure_plates'

    })//hearth模组祷告信

    event.shaped( 'minecraft:coarse_dirt',[
        ' c ',
        'cvc',
        ' c '
    ],{
        c: 'minecraft:cactus',
        v: '#forge:stones/sandstone'
    })//砂土配方

    event.remove({id:'botania:diluted_pool'})

    event.shaped( 'botania:diluted_pool',[
        '   ',
        'c c',
        'vcv'
    ],{
        c: 'botania:livingrock',
        v: 'hearthwell:myst_ingot'
    })//稀释魔力池配方

    

 })

