const user = {id: 1, name: 'Gorib Amir', job: 'actor'};
// javaScript Object Notation (JSON)
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);
/**
   { id: 1, name: 'Gorib Amir', job: 'actor' }
   {"id":1,"name":"Gorib Amir","job":"actor"}
 */

const shop ={
      owner : 'Alia',
      address: {
            street: 'Kochu khet bhuter goli',
            city: 'Ranabir',
            country: 'Bangladesh'
      },
      products: ['Laptop', 'Modile', 'Mic', 'Monitor', 'Keyboard'],
      revenue: 45000,
      isOpen: true,
      isNew: false,
};
console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON)
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);
