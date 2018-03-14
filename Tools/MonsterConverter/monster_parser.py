import re
import os

CR_RULE =  r'cr(.*),' 
NAME_RULE = r'title:\s*"(.*)"'
SIZE_TYPE_ALIGNMENT_RULE = r'\*\*(.*)\*\*'

ARMOR_CLASS_RULE = r'\*\*Armor Class\*\*\s*(\d*)'
HP_RULE = r'\*\*Hit Points\*\*\s*(\d*)'
HIT_DICE_RULE = r'\*\*Hit Points\*\*.*\((.*)\)'

SPEED_RULE = r'\*\*Speed\*\*(.*)'

ABILITIES_RULE = r'\|\s*(\d*)\s\('

SAVING_THROWS_RULE = r'\*\*Saving Throws\*\*(.*)'
SKILLS_RULE = r'\*\*Skills\*\*(.*)'

DAMAGE_VULNERABILITIES_RULE = r"\*\*Damage Vulnerabilities\*\*(.*)"
DAMAGE_RESISTANCE_RULE = r"\*\*Damage Resistances\*\*(.*)"
DAMAGE_IMMUNITIES_RULE = r"\*\*Damage Immunities\*\*(.*)"
CONDITION_IMMUNITIES_RULE = r"\*\*Condition Immunities\*\*(.*)"

SENSES_RULE = r"\*\*Senses\*\*(.*)"
LANGUAGES_RULE = r"\*\*Languages\*\*(.*)"

ACTIONS_AND_LEGENDARY_ACTIONS_SECTIONS_RULE = r"\*\*Actions\*\*.*\n\n(?:.*\n*)*"
LEGENDARY_ACTIONS_SECTIONS_RULE = r"\*\*Legendary Actions\*\*.*\n\n(?:.*\n*)*"
NAME_DESCRIPTION_EXTRACTOR_RULE = r"\*\*\*(.*)\*\*\*(.*\n*.*)"

SPELLS_DESC_RULE = r"^(.*)"
CANTRIP_DETAILS_RULE = r"Cantrips.*:(.*)"
SPELL_DETAILS_RULE = r"(\d[a-z]{2}\slevel.*):(.*)"

current_path = ""

def get_value(text, rule, match_group=1, is_optional=False,):
    match = re.search(rule, text, re.M | re.I | re.M)
    if match:
        return match.group(match_group)
    elif not is_optional:
        print("Can't parse " + current_path + " with rule " + rule)
    return None

def get_all_values(text, rule, is_optional=False):
    matches = re.findall(rule, text, re.M | re.I | re.M)
    results = []
    if matches:
        for match in matches:
            results.append(match)
        return results
    elif not is_optional:
        print("Can't parse " + current_path + " with rule " + rule)
    return []

def get_enumeration(text, rule, match_group=1, is_optional=False,):
    match = re.search(rule, text, re.M | re.I | re.M)
    if match:
        match_to_split = match.group(match_group)
        values = match_to_split.strip().replace(";", ",").split(",")
        return [s.strip() for s in values]
    elif not is_optional:
        print("Can't parse " + current_path + " with rule " + rule)
    return []

def contain(text, rule):
    match = re.search(rule, text, re.M | re.I | re.M)
    if match:
        return True
    else:
        return False

def non_magicial_weapon_tricks(array):

    non_magical_str = next((x for x in array if "magical" in x), None)

    if non_magical_str:
        array = [s for s in array if "slashing" not in s and "bludgeoning" not in s and "piercing" not in s]
        array.append("bludgeoning, piercing " + non_magical_str)                
    return array

def name_description_extractor_tricks(text):
    splitted = re.split("\*\*\*(.*)\*\*\*", text)
    index = 1
    pairs = [] 
    while index < len(splitted):
        pair = {}
        pair["name"] = splitted[index].strip()
        pair["desc"] = splitted[index + 1].strip()
        pairs.append(pair)
        index = index + 2
    return pairs

def parse_monster(path):
    global current_path
    current_path = path
    monster = {}

    with open(path, "r", encoding="utf8") as file_input:
        all_text = file_input.read()

    # Challenge Rating
    monster["challengeRating"] = get_value(all_text, CR_RULE)

    # Name
    monster["name"] = get_value(all_text, NAME_RULE)

    # Size, type and alignment
    details = get_value(all_text, SIZE_TYPE_ALIGNMENT_RULE)
    splitted_details = details.split(",")
    splitted_size_and_type = splitted_details[0].split(" ")

    monster["size"] = splitted_size_and_type[0].title()
    monster["type"] = splitted_size_and_type[1].title()
    monster["alignment"] = splitted_details[1].strip().title()

    # Subtype ???


    # AC
    monster["armorClass"] = (int)(get_value(all_text, ARMOR_CLASS_RULE))

    # HP
    monster["hitPoints"] = (int)(get_value(all_text, HP_RULE))

    monster["hitDice"] = get_value(all_text, HIT_DICE_RULE, is_optional = True)

    # AC
    monster["speed"] = get_value(all_text, SPEED_RULE)

    # Abilities
    matches_abilities = get_all_values(all_text, ABILITIES_RULE)

    abilities = {}
    abilities["strength"] = (int)(matches_abilities[0])
    abilities["dexterity"] = (int)(matches_abilities[1])
    abilities["constitution"] =(int)(matches_abilities[2])
    abilities["intelligence"] = (int)(matches_abilities[3])
    abilities["wisdom"] = (int)(matches_abilities[4])
    abilities["charisma"] = (int)(matches_abilities[5])

    monster["abilities"] = abilities

    # Saving throws
    saving_throws_result = get_value(all_text, SAVING_THROWS_RULE, is_optional = True)

    saving_throws = []

    if saving_throws_result:
        saving_throws_splitted = saving_throws_result.strip().split(",")

        for saving_throw in saving_throws_splitted:
            ability_and_modifier = saving_throw.strip().split(" ")
            saving_throw_to_append = {}
            
            saving_throw_to_append["ability"] = ability_and_modifier[0].strip().capitalize()
            saving_throw_to_append["modifier"] = ability_and_modifier[1].strip()
            
            saving_throws.append(saving_throw_to_append)

    monster["saves"] = saving_throws


    # Skills
    skills_result = get_value(all_text, SKILLS_RULE, is_optional = True)

    skills = []

    if skills_result:
        skills_splitted = skills_result.strip().split(",")

        for skill in skills_splitted:
            skill_and_modifier = skill.strip().split(" ")
            skill_to_append = {}
            
            skill_to_append["name"] = skill_and_modifier[0].strip().capitalize()
            skill_to_append["modifier"] = skill_and_modifier[1].strip()
            
            skills.append(skill_to_append)

    monster["skills"] = skills

    # Resistances

    resistances = {}
    resistances["damageVulnerabilities"] = non_magicial_weapon_tricks(get_enumeration(all_text, DAMAGE_VULNERABILITIES_RULE, is_optional = True))
    resistances["damageResistance"] = non_magicial_weapon_tricks(get_enumeration(all_text, DAMAGE_RESISTANCE_RULE, is_optional = True))
    resistances["damageImmunities"] = non_magicial_weapon_tricks(get_enumeration(all_text, DAMAGE_IMMUNITIES_RULE, is_optional = True))
    resistances["conditionImmunities"] = get_enumeration(all_text, CONDITION_IMMUNITIES_RULE, is_optional = True)
    monster["resistances"] = resistances

    # Sections manipulation
    legendary_section = get_value(all_text, LEGENDARY_ACTIONS_SECTIONS_RULE, match_group=0, is_optional=True)

    if legendary_section is None:
        legendary_section = ""
    
    action_and_legendary_section = get_value(all_text, ACTIONS_AND_LEGENDARY_ACTIONS_SECTIONS_RULE, match_group=0, is_optional=True)
    
    if action_and_legendary_section is None:
        action_and_legendary_section = ""

    action_section = action_and_legendary_section.replace(legendary_section, "")

    feature_section = all_text.replace(action_and_legendary_section, "")

    # Features
    features = name_description_extractor_tricks(feature_section)

    # Todo remove spellcasting features
    monster["features"] = [value for value in features if value["name"] != "Spellcasting."]

    ## Spell casting
    spellCastingFeatureFilter = filter(lambda x: x["name"].lower().startswith("spellcasting"), features)
    spellCastingFeature = next(spellCastingFeatureFilter, None)
    if spellCastingFeature:
        spellDetails = spellCastingFeature["desc"]

        spellDesc = get_value(spellDetails, SPELLS_DESC_RULE)

        spells = []

        cantrip = get_value(spellDetails, CANTRIP_DETAILS_RULE, is_optional = True)
        if cantrip:
            spell = {
                "details" : "Cantrip (at will)",
                "spells": [x.strip() for x in cantrip.split(",")]
            }

            spells.append(spell)

        upperSpellMatches = get_all_values(spellDetails, SPELL_DETAILS_RULE)
        for spellMatch in upperSpellMatches:
            details = spellMatch[0]
            spellsName = [x.strip() for x in spellMatch[1].split(",")]

            spell = {
                "details" : details,
                "spells": spellsName
            }

            spells.append(spell)
        
        monster["spellCasting"] = {
            "desc" : spellDesc,
            "details" : spells
        }
            
    else:
        monster["spellCasting"] = None

    # Actions
    monster["actions"] = name_description_extractor_tricks(action_section)

    # Legendary Actions
    monster["legendaryActions"] = name_description_extractor_tricks(legendary_section)

    # Sense
    senses = get_value(all_text, SENSES_RULE, is_optional=True)
    if senses:
        monster["senses"] = senses.strip()
    else:
        monster["senses"] = ""

    # Language
    languages = get_value(all_text, LANGUAGES_RULE, is_optional=True)
    if languages:
        monster["languages"] = languages.strip()
    else:
        monster["languages"] = ""

    return monster


# monster_path=os.path.join(
#     os.getcwd(), r"MonsterConverter\bestiary_temp\_posts\2017-09-10-abjurer.markdown")
# parse_monster(monster_path)
