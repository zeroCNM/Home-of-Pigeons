onEvent( 'recipes',event =>{
    event.remove({id:'immersiveengineering:crafting/cokebrick'})

    event.shaped( 'immersiveengineering:cokebrick',[
        'cvc',
        'vbv',
        'cvc'
    ],{
        c: 'rankine:fire_clay',
        v: 'rankine:refractory_brick',
        b: '#forge:stones/sandstone'
    })//焦炉砖配方

    event.remove({id:'immersiveengineering:crafting/hammer'})

    event.shaped( Item.of('immersiveengineering:hammer', '{Damage:0}'),[
        ' sd',
        ' as',
        'a  '
    ],{
        s: 'botania:manasteel_ingot',
        d: 'botania:mana_string',
        a: 'botania:livingwood_twig'
    })//工程师锤配方

    event.remove({id:'create:crafting/kinetics/windmill_bearing'})
})