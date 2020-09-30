const foo = { name : 'Saber', age : 24, nervous: false}
const bar = { name : 'Vahid', age : 20 , nervous: false}
const baz = { name : 'Hossein', age : 22, nervous:  true}

const turtle = {
    name : 'bob',
    let : 4,
    shell:true,
    type:'amphibious',
    meal : 10,
    diet:'berries'
}



// *** Bad Code *** //

// console.log(foo);
// console.log(bar);
// console.log(baz);

// function feed(animal){
//     return `feed ${animal.name} ${animal.meal} kilos of ${animal.diet}`
// }

// **** Good Code **** //
// console.log('%c My Friends' , 'color: orange; font-weight: bold;');
// console.log({foo , bar ,baz});

// console.table({foo , bar ,baz});


// console.time('looper')

// let i = 0 ;
// while( i < 1000000) { i++}
// console.timeEnd('looper')


// const deleteMe = ()=> console.trace('bye bye databasse')

// deleteMe()
// deleteMe()

// function feed ( {name,meal,diet}) {
//     return `feed ${name} ${meal} kilos of ${diet}`
// }



 // OR

//  function feed(animal){
//      const {name,meal,diet} = animal;
//      return `feed ${name} ${meal} kilos of ${diet}`
//  }
//  function feed(animal){
//      const {name,meal,diet} = animal;
//      return `feed ${name} ${meal} kilos of ${diet}`
//  }

// console.log(feed(turtle));

