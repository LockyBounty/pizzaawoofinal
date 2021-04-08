
const Pizzas = [ 
            {   
                id : 1,
                name: "Margarita",
                recipe:[
                    {name:"Sauce Tomate", checked:true},
                    {name:"Mozzarella", checked:true},
                    {name:"Basilic", checked:true}],
                price:8,
                image:"../assets/img/margarita.jpg"
            },
            {   
                id : 2,
                name: "Quatre Fromages",
                recipe:[
                    {name:"Sauce Tomate", checked:true}, 
                    {name:"Gorgonzola", checked:true},
                    {name:"Mozzarella", checked:true},
                    {name:"Chèvre", checked:true},
                    {name:"Feta", checked:true}],
                price:10,
                image:"../assets/img/quatre_fromages.jpg"
            },
            {   id : 3,
                name: "Quatre Saisons",
                recipe:[
                    {name:"Sauce Tomate", checked:true}, 
                    {name:"Oignon", checked:true}, 
                    {name:"Poivron", checked:true},
                    {name:"Jambon", checked:true}, 
                    {name:"Mozzarella", checked:true},
                    {name:"Basilic", checked:true}],
                price:14,
                image:"../assets/img/quatre_saison.jpg"
            },
            {   id : 4,
                name: "Barbecue",
                recipe:[
                    {name:"Sauce BBQ", checked:true}, 
                    {name:"Oignon", checked:true}, 
                    {name:"Boulettes de boeuf", checked:true},
                    {name:"Mozzarella", checked:true},
                    {name:"Basilic", checked:true},
                    {name:"Bacon", checked:true}],
                price:11,
                image:"../assets/img/barbecue.jpg"
            },
            {   
                id : 5,
                name: "Pepperoni",
                recipe:[
                    {name:"Sauce Tomate", checked:true}, 
                    {name:"Oignon", checked:true},
                    {name:"Mozzarella", checked:true},
                    {name:"Pepperoni", checked:true}],
                price:12,
                image:"../assets/img/pepperoni.jpg"
            },
            {   
                id : 6,
                name: "Vegetarien",
                recipe:[
                    {name:"Sauce Tomate", checked:true}, 
                    {name:"Oignon", checked:true}, 
                    {name:"Poivron", checked:true},
                    {name:"Olive", checked:true},
                    {name:"Champignon", checked:true},
                    {name:"Mozzarella", checked:true},
                    {name:"Basilic", checked:true}],
                price:9,
                image:"../assets/img/vegetarienne2.jpg"
            }
]


const Topping = 
[
    {id : 1,name:"Sans", checked:true}, 
    {id : 2,name:"Anchois", checked:false}, 
    {id : 3,name:"Boulettes de boeuf", checked:false}, 
    {id : 4,name:"Olive", checked:false}, 
    {id : 5,name:"Oignon", checked:false},
    {id : 6,name:"Parmagiano Reggiano", checked:false},
    {id : 7,name:"Pepperoni", checked:false}, 
    {id : 8,name:"Poivron", checked:false},

];

const Drink = 
[
    {id : 1,name:"Sans", checked:true}, 
    {id : 2,name:"A&W root", checked:false}, 
    {id : 3,name:"Old Jamaica Ginger beer", checked:false}, 
    {id : 4,name:"Coca Cola", checked:false}, 
    {id : 5,name:"Coca Cola Zero", checked:false}, 
    {id : 6,name:"Fanta", checked:false}, 
    {id : 7,name:"Dr. Pepper", checked:false}, 
    {id : 8,name:"Pepsi", checked:false}
]

export {
    Pizzas, 
    Topping,
    Drink
};