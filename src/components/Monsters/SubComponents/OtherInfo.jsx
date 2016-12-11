import React from 'react'

const savingThrow = (savingThrow, element) => {
    return (
        <span>{ element !== 0 ? "," : "" }  { savingThrow.ability } ({ savingThrow.modifier })</span>
        );
}

const enumeration = (value, element) => {
    return (
        <span>{ element !== 0 ? "," : "" }  { value }</span>
        );
}


const skill = (skill, element) => {
    return (
        <span>{ element !== 0 ? "," : "" }  { skill.name } ({ skill.modifier })</span>
        );
}




const Info = ({monster}) => {
    return (
        <div>
          <h2>Other Info</h2>
          { monster.skills.length > 0 && <div><strong>Skills:</strong>
                                           { monster.skills.map(skill) }
                                         </div> }
          { monster.saves.length > 0 && <div><strong>Saving throw:</strong>
                                          { monster.saves.map(savingThrow) }
                                        </div> }
          { monster.resistances.damageVulnerabilities.length > 0 && <div><strong>Damage Vulnerabilities:</strong>
                                                                      { monster.resistances.damageVulnerabilities.map(enumeration) }
                                                                    </div> }
          { monster.resistances.damageResistance.length > 0 && <div><strong>Damage Resistances:</strong>
                                                                 { monster.resistances.damageResistance.map(enumeration) }
                                                               </div> }
          { monster.resistances.damageImmunities.length > 0 && <div><strong>Damage Immunities:</strong>
                                                                 { monster.resistances.damageImmunities.map(enumeration) }
                                                               </div> }
          { monster.resistances.conditionImmunities.length > 0 && <div><strong>Condition Immunities:</strong>
                                                                    { monster.resistances.conditionImmunities.map(enumeration) }
                                                                  </div> }
          <div><strong>Senses: </strong>
            { monster.senses }
          </div>
          <div><strong>Languages: </strong>
            { monster.languages ? monster.languages : "-" }
          </div>
          <div><strong>Challenge Rating: </strong>
            { monster.challengeRating }
          </div>
        </div>
        );

}

Info.propType = {
    monster: React.PropTypes.shape({
    }).isRequired
};

export default Info;
