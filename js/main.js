// function Bank(){
//     this.buyers = [];
//     this.bordered = [];
//     const firstBorder = 110
//     const secondBorder = 210

//     this.add = function(buyer){
//         this.buyers.push(buyer);
//     }
    
//     this.print = function(){
//         console.log(this.buyers)
//     }

//     this.sorted = function(){
//         return this.buyers.sort( (a,b) => a.lastName - b.lastName );
//     }

//     this.withBorders = function(){
//         this.buyers.filter( (e) => {
//             if ( e.numberOfCredit > firstBorder && e.numberOfCredit < secondBorder ){ 
//                 this.bordered.push(e)
//             }
//         })
//         return this.bordered
//     }   
// }


// function Buyer(lastName, name, middleName,adress,numberOfCredit, accountNumber){
//     this.lastName = lastName;
//     this.name = name;
//     this.middleName = middleName;
//     this.adress = adress;
//     this.numberOfCredit = numberOfCredit;
//     this.accountNumber = accountNumber;


// }

// const buyer1 = new Buyer('Kozyrev', 'name1', 'middleName1', 'adress1', 111, 1001)
// const buyer5 = new Buyer('Lybchuk', 'name5', 'middleName5', 'adress5', 911, 4567)
// const buyer3 = new Buyer('Semenov', 'name3', 'middleName3', 'adress3', 11, 4500)
// const buyer2 = new Buyer('Vladimirov', 'name2', 'middleName2', 'adress2', 151, 9994)
// const buyer4 = new Buyer('Nikolaevich', 'name4', 'middleName4', 'adress4', 132, 333)

// const bank = new Bank();
// bank.add(buyer1);
// bank.add(buyer2);
// bank.add(buyer3);
// bank.add(buyer4);
// bank.add(buyer5);

// const firstBorder = 110
// const secondBorder = 210

// sortedBuyers = bank.sorted()
// console.log('Отсортированные в алфавитном порядке покупатели:',sortedBuyers)

// borders = bank.withBorders()
// console.log('Клиенты с границами от ',firstBorder,'до',secondBorder, borders)        //Почему тут выводит только 2 из трех элементов которые соответствуют?

// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------

// function Aquarium(){
//     this.fishes = [];
//     this.deletedFish = [];

//     this.add = function(fish){
//         this.fishes.push(fish)
//     }

//     this.print = function(){
//         return this.fishes
//     }

//     this.fastFishes = function(speed){
//         let sortedFishesBySpeed = this.fishes.filter( (element) => element.speed > speed)
        
//         return sortedFishesBySpeed
//     }

//     this.deleteFish = function(fish){
//         let deletedFish = this.fishes.findIndex( e => e.name === fish)
//         delete this.fishes[deletedFish]
//         return this.fishes
//     }                                  // как удалить рыбу, создав новый массив и закинуть в него остальных рыб, которые не умерли?

//     this.onlyHunters = function(){
//         let hunters = this.fishes.filter( (element) => element.ifHunter === true)
//         return hunters
//     }

//     this.sortedByNames = function(){
//         let sortedNames = this.fishes.sort( (a,b) => a.name - b.name)
//         return sortedNames
//     }

//     this.sortedBySizes = function(){
//         let sortedSizes = this.fishes.sort( (a,b) => a.size - b.size)
//         return sortedSizes
//     }
// }

// function Fish(name, colour, ifHunter, size, speed){ 
//     this.name = name;
//     this.colour = colour;
//     this.ifHunter = ifHunter;
//     this.size = size;
//     this.speed = speed;
// }

// const fish1 = new Fish( 'Aname1', 'green', true, 29, 7)
// const fish4 = new Fish( 'TGFname4', 'white', true, 80, 1)
// const fish2 = new Fish( 'Cname2', 'red', false, 20, 9)
// const fish3 = new Fish( 'Dname3', 'yelllow', true, 25, 8)
// const fish6 = new Fish( 'Bname6', 'green', false, 34, 2)
// const fish5 = new Fish( 'name5', 'brown', false, 10, 14)


// const aquarium = new Aquarium();
// aquarium.add(fish1)
// aquarium.add(fish2)
// aquarium.add(fish4)
// aquarium.add(fish3)
// aquarium.add(fish5)
// aquarium.add(fish6)


// console.log('Все рыбки:',aquarium.print())


// const fish7 = new Fish('name7', 'purple', true, 31, 6)
// aquarium.add(fish7)
// console.log('Все рыбки( плюс добавили одну):',aquarium.print())


// requestedSpeed = 6
// console.log('Все рыбки чья скорость превосходит ',requestedSpeed, aquarium.fastFishes(requestedSpeed))

// console.log('Рыбы хищники:', aquarium.onlyHunters())


// console.log('Рыбки отсортированные по именам: ', aquarium.sortedByNames())


// console.log('Рыбки отсортированные по размеру: ', aquarium.sortedBySizes())


// diedFish = 'Cname2'
// deletedFish = aquarium.deleteFish(diedFish)
// console.log('Оставшиеся рыбки.Одна умерла. Имя ее:',diedFish, deletedFish)


const request = new XMLHttpRequest();
 
request.open('GET', 'https://jsonplaceholder.typicode.com/users');
 
request.onload = function() {
    console.log('Onload');
    const result = request.response;
 
    const object = JSON.parse(result);
    console.log(object);
    // const f = object.map( element => {
    //     return {
    //         email : element.email ,
    //         phone : element.phone.replaceAll('.','-').replaceAll('x','-'),
    //     }
    // }).filter(element => {
    //     return element.phone.includes('0')
    // })
    
  
    // const b = f.map( element =>{
    //     const sobaka = element.email.indexOf('@')
    //     element.email = element.email.slice(sobaka+1)
    //     return element;
    // })

    const f = object.map( element => {
        return +element.address.geo.lat + +element.address.geo.lng
    })

    // console.log(b)
    console.log(f)
    const reducer = f.reduce( (a,b) => a + b )
    console.log(reducer)
}
 
request.send();
console.log('Done');
