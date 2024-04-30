const friends = [
    {name:'Max Vestapaen',money:12},
    {name:'Lando Norris',money:12},
    {name:'Lweis Hamilton',money:12},
    {name:'Michael Schumcar',money:12},
    ];
// nums.map(num => num * 2);
// nums.filter(num => num > 20);
// nums.find(num => num > 23);
const total = friends.reduce((sum,friend) =>{
    console.log(sum,friend);
    return sum + friend.money;
},0)
console.log(total);

const final = firends.reduce((sum,friend) => sum +  friend.money ,0)