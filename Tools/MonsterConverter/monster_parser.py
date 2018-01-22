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

current_path = ""

def get_value(text, rule, match_group = 1, isOptional = False,):
    match = re.search(rule, text, re.M | re.I | re.M)
    if match:
        return match.group(match_group)
    elif not isOptional:
        print("Can't parse " + current_path + " with rule " + rule)

def get_all_values(text, rule, match_group = 1, isOptional = False):
    matches = re.findall(rule, text, re.M | re.I | re.M)
    results = []
    if matches:
        for match in matches:
            results.append(match)
        return results
    elif not isOptional:
        print("Can't parse " + current_path + " with rule " + rule)

def contain(text, rule):
    match = re.search(rule, text, re.M | re.I | re.M)
    if match:
        return True
    else:
        return False


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

    monster["hitDice"] = get_value(all_text, HIT_DICE_RULE, isOptional = True)

    # AC
    monster["speed"] = (int)(get_value(all_text, ARMOR_CLASS_RULE))

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
    saving_throws_result = get_value(all_text, SAVING_THROWS_RULE, isOptional = True)

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
    skills_result = get_value(all_text, SKILLS_RULE, isOptional = True)

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

    # Features

    # Actions

    # Legendary Actions

    # Sense

    # Language


    return monster


monster_path=os.path.join(
    os.getcwd(), r"bestiary_temp\_posts\2017-09-10-aboleth.markdown")
parse_monster(monster_path)
