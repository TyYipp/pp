import { reactive } from "vue"

export const store = reactive({
    upgrades: [
    {
        name: "Waddle Dee",
        startingprice: 15,
        priceincrement: 5,
        clickvalue: 0.1,
    },
    {
        name: "Waddle Doo",
        startingprice: 100,
        priceincrement: 20,
        clickvalue: 1
    },
    {
        name: "Bandana Waddle Dee",
        startingprice: 1000,
        priceincrement: 250,
        clickvalue: 10
    },
    {
        name: "Whispy Woods",
        startingprice: 10000,
        priceincrement: 2500,
        clickvalue: 10
    },
    {
        name: "Gooey",
        startingprice: 100000,
        priceincrement: 30000,
        clickvalue: 100
    },
    {
        name: "Chef Kawasaki",
        startingprice: 1000000,
        priceincrement: 350000,
        clickvalue: 1000
    },
    {
        name: "Magolor",
        startingprice: 10000000,
        priceincrement: 4000000,
        clickvalue: 10000
    },
    {
        name: "Meta Knight",
        startingprice: 100000000,
        priceincrement: 45000000,
        clickvalue: 100000
    },
    {
        name: "King DeeDeeDee",
        startingprice: 1000000000,
        priceincrement: 50000000,
        clickvalue: 1000000
    },
    {
        name: "Marx",
        startingprice: 10000000000,
        priceincrement: 550000000,
        clickvalue: 10000000
    },
    {
        name: "Kirb",
        startingprice: 10000000000,
        priceincrement: 6000000000,
        clickvalue: 100000000
    },
    ]
})