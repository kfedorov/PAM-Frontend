import React from 'react';

// Import spell style
import './Spell.css';

// Import component icon
import verbal from './verbal.svg';
import somatic from './somatic.svg';
import material from './material.svg';

// To support markup in the description (like <br>)
// Todo: find less dangerous alternative
function createMarkup(text){
    return {__html: text}; 
}

function isComponentEnabled(component, requiredComponent)
{
    if(requiredComponent.toLowerCase().includes(component.toLowerCase())){
        return true;        
    }
    else{
        return false;
    }
}


const Spell = ({spellToRender}) => {
    var disabled = true;

    return (
        <div className="spell-item">
            <h1 className="spell-title">
                {spellToRender.Name}
            </h1>
            <div className="components">
                <div className="component-list">
                    <div className={"component-item " +(isComponentEnabled("v", spellToRender.Components) ? "" : "disabled")} >
                        <img src={verbal} className="component-logo" alt="verbal"/>
                        <h2 className="hidden">V</h2 > 
                    </div>
                    <div className={"component-item " +(isComponentEnabled("s", spellToRender.Components) ? "" : "disabled")}>
                        <img src={somatic} className="component-logo" alt="somatic"/>
                        <h2 className="hidden">S</h2> 
                    </div>
                    <div className={"component-item " +(isComponentEnabled("m", spellToRender.Components) ? "" : "disabled")}>
                        <img src={material} className="component-logo" alt="material"/>
                        <h2 className="hidden">M</h2> 
                    </div>  
                </div>
            </div>
            <div className="quick-info">
                <p>
                    <b>Range:</b> {spellToRender.Range} <br/>
                    <b>Duration:</b> {spellToRender.Duration} <br/>
                    <b>Casting time:</b> {spellToRender.CastingTime} <br/>
                </p>          
            </div>
            <p className="description" dangerouslySetInnerHTML={createMarkup(spellToRender.Description)}/>

        </div>
    );

}

export default Spell;