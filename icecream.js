let iceCreamFlavors = [
    { name: "Chocolate", type: "Chocolate", price: 2 }, 
    { name: "Strawberry", type: "Fruit", price: 1 }, 
    { name: "Vanilla", type: "Vanilla", price: 2 }, 
    { name: "Pistachio", type: "Nuts", price: 1.5 }, 
    { name: "Neapolitan", type: "Chocolate", price: 2}, 
    { name: "Mint Chip", type: "Chocolate", price: 1.5 },
    { name: "Raspberry", type: "Fruit", price: 1},
   ];

let transactions = []
//encode transactions
transactions.push({scoops:["Chocolate", "Vanilla", "Mint Chip"], total: 5.5});
transactions.push({scoops:["Raspberry", "Strawberry"], total: 2});
transactions.push({scoops:["Vanilla", "Vanilla"], total: 4});

//calculate my earnings
const total = transactions.reduce((acc, curr) => acc + curr.total, 0);
console.log(`I've made ${total} today` )

let flavorSold = transactions.reduce((acc, curr) => {
    curr.scoops.forEach(scoops=> {
        if(!acc[scoops]) {
            acc[scoops] =0;
        }
        acc[scoops]++;
    }) 
    return acc;
}, {})

console.log(flavorSold)