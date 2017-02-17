var spells = require('./spells.json')
//var monsters = require('./monsters.json')

function getMonsters() {
    return fetch('/monster', )
        .then(response => response.json())
        .then(response => {
            return response
        })
        .catch(function(error) {
        console.log("Error in getting monster" + error)
    })
}

function getSpells() {
    return spells
}

export { getSpells, getMonsters }