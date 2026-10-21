let family = { parents: {},
               children: [ {name: "Ali"}, {name: "Lea"}, {name: "Mona"} ] }

function function3(family)
{
    console.log("Third child's name:", family.children[2].name)
    console.log(family.children[0].name,",", family.children[1].name,",", family.children[2].name)
}
function3(family)