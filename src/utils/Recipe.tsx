
const Pizzas = [ 
            {
                "nom": "Margarita",
                "recette":[
                    "Sauce Tomate",
                    "Mozzarella","Basilic"],
                "prix":8,
                "image":"../assets/img/margarita.jpg"
            },
            {   "nom": "Quatre Fromages",
                "recette":[
                    "Sauce Tomate", "Gorgonzola",
                    "Mozzarella","Chèvre","Feta"],
                "prix":10,
                "image":"../assets/img/quatre_fromages.jpg"
            },
            {   "nom": "Quatre Saisons",
                "recette":[
                    "Sauce Tomate", "Oignon", "Poivron",
                    "Jambon", "Mozzarella","Basilic"],
                "prix":14,
                "image":"../assets/img/quatre_saison.jpg"
            },
            {   "nom": "Barbecue",
                "recette":[
                    "Sauce Tomate", "Oignon", 
                    "Boulettes de boeuf",
                    "Mozzarella","Basilic",
                    "Sauce BBQ","Bacon"],
                "prix":11,
                "image":"../assets/img/barbecue.jpg"
            },
            {   "nom": "Pepperoni",
                "recette":[
                    "Sauce Tomate", "Oignon",
                    "Mozzarella","Pepperoni"],
                "prix":12,
                "image":"../assets/img/pepperoni.jpg"
            },
            {   "nom": "Vegetarien",
                "recette":[
                    "Sauce Tomate", "Oignon", 
                    "Poivron","Olive","Champignon",
                    "Mozzarella","Basilic"],
                "prix":9,
                "image":"../assets/img/vegetarienne2.jpg"
            }
]


const Topping = 
[
    "Anchois", "Boulettes de boeuf","Basilic", "Pepperoni", "Poivron", "Parmagiano Reggiano","Olive"

];

const Drink = 
[
    "A&W root", "Coca Cola", "Coca Cola Zero", "Fanta", "Dr. Pepper", "Pepsi"
]

export {
    Pizzas, 
    Topping,
    Drink
};