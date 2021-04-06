
const Pizzas = [ 
            {
                "name": "Margarita",
                "recipe":[
                    {"name":"Sauce Tomate", "checked":true},
                    {"name":"Mozzarella", "checked":true},
                    {"name":"Basilic", "checked":true}],
                "price":8,
                "image":"../assets/img/margarita.jpg"
            },
            {   "name": "Quatre Fromages",
                "recipe":[
                    {"name":"Sauce Tomate", "checked":true}, 
                    {"name":"Gorgonzola", "checked":true},
                    {"name":"Mozzarella", "checked":true},
                    {"name":"Chèvre", "checked":true},
                    {"name":"Feta", "checked":true}],
                "price":10,
                "image":"../assets/img/quatre_fromages.jpg"
            },
            {   "name": "Quatre Saisons",
                "recipe":[
                    {"name":"Sauce Tomate", "checked":true}, 
                    {"name":"Oignon", "checked":true}, 
                    {"name":"Poivron", "checked":true},
                    {"name":"Jambon", "checked":true}, 
                    {"name":"Mozzarella", "checked":true},
                    {"name":"Basilic", "checked":true}],
                "price":14,
                "image":"../assets/img/quatre_saison.jpg"
            },
            {   "name": "Barbecue",
                "recipe":[
                    {"name":"Sauce BBQ", "checked":true}, 
                    {"name":"Oignon", "checked":true}, 
                    {"name":"Boulettes de boeuf", "checked":true},
                    {"name":"Mozzarella", "checked":true},
                    {"name":"Basilic", "checked":true},
                    {"name":"Bacon", "checked":true}],
                "price":11,
                "image":"../assets/img/barbecue.jpg"
            },
            {   "name": "Pepperoni",
                "recipe":[
                    {"name":"Sauce Tomate", "checked":true}, 
                    {"name":"Oignon", "checked":true},
                    {"name":"Mozzarella", "checked":true},
                    {"name":"Pepperoni", "checked":true}],
                "price":12,
                "image":"../assets/img/pepperoni.jpg"
            },
            {   "name": "Vegetarien",
                "recipe":[
                    {"name":"Sauce Tomate", "checked":true}, 
                    {"name":"Oignon", "checked":true}, 
                    {"name":"Poivron", "checked":true},
                    {"name":"Olive", "checked":true},
                    {"name":"Champignon", "checked":true},
                    {"name":"Mozzarella", "checked":true},
                    {"name":"Basilic", "checked":true}],
                "price":9,
                "image":"../assets/img/vegetarienne2.jpg"
            }
]


const Topping = 
[
    {"name":"Anchois", "checked":false}, 
    {"name":"Boulettes de boeuf", "checked":false}, 
    {"name":"Olive", "checked":false}, 
    {"name":"Oignon", "checked":false},
    {"name":"Parmagiano Reggiano", "checked":false},
    {"name":"Pepperoni", "checked":false}, 
    {"name":"Poivron", "checked":false},

];

const Drink = 
[
    {"name":"A&W root", "checked":false}, 
    {"name":"Coca Cola", "checked":false}, 
    {"name":"Coca Cola Zero", "checked":false}, 
    {"name":"Fanta", "checked":false}, 
    {"name":"Dr. Pepper", "checked":false}, 
    {"name":"Pepsi", "checked":false}
]

export {
    Pizzas, 
    Topping,
    Drink
};