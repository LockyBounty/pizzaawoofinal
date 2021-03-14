
const Recipe = [ 
    {"Margarita" :
        [
            {
                "recette":[
                    "Sauce Tomate",
                    "Mozzarella","Basilic"],
                "prix":8
            }
        ]
    },
    {"Quatre Fromages" : 
        [
            {
                "recette":[
                    "Sauce Tomate", "Oignon",
                    "Mozzarella","Basilic"],
                "prix":8
            }
        ]},
    {"Quatre Saisons" : 
    [
        {
            "recette":[
                "Sauce Tomate", "Oignon", "Poivron",
                "Jambon", "Mozzarella","Basilic"],
            "prix":14
        }
    ]},
    {"Barbecue" :                        
        [
            {
                "recette":[
                    "Sauce Tomate", "Oignon", 
                    "Mozzarella","Basilic"],
                "prix":11
            }
        ]},
    {"Pepperoni" :                        
        [
            {
                "recette":[
                    "Sauce Tomate", "Oignon",
                    "Mozzarella","Basilic"],
                "prix":12
            }
        ]},
    
    {"Vegetarien" :                        
        [
            {
                "recette":[
                    "Sauce Tomate", "Oignon", 
                    "Poivron","Olive","Champignon",
                    "Mozzarella","Basilic"],
                "prix":9
            }
    ]}
]


const Topping = 
[
    "Anchois", "Boulettes de boeuf","Thym", "Pepperoni", "Poivron", "Parmagiano Reggiano","Olive"

];

const Drink = 
[
    "A&W root", "Coca Cola", "Coca Cola Zero", "Fanta", "Dr. Pepper", "Pepsi"
]

export {
    Recipe, 
    Topping,
    Drink
};