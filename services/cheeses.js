const cheeses = require('../data/cheese');

/**
 * @module Cheeses
 */
module.exports = {
    /**
     * getAll
     * returnere et JSON objekt med alle oste fra kartoteket
     * @returns {object}
     */ 
    'getAll': () => cheeses,
/**
 * getOne
 * returnere et JSON objekt med en enkelt ost fra kartoteket
 * @param {string} varenr - varenummeret på en ost
 * @returns {object}
 */
    'getOne': (varenr) =>{
        let currentCheese = null;
            cheeses.forEach((cheese) =>{
            if(cheese.varenr == varenr){
                currentCheese = /*JSON.stringify*/(cheese);
            };
        });

        if(currentCheese !== null){
            return currentCheese;
        }else{
            return{
                "code":"recourse not found",
                "message": varenr + "does not exist"
            };            
        }
    }
};