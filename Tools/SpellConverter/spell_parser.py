import re
import os

CANTRIP_RULE = r'cantrip'
LEVEL_RULE = r"(\d+).*-level"

TITLE_RULE = r'title:\s*"(.*)"'

TYPE_RULE = r'\*{2}(.*)\*{2}'

SCHOOL_RULE_CANTRIP = r'([a-zA-Z]*)\scantrip\*'
SCHOOL_RULE = r'level\s([a-zA-Z]*)'

CASTING_TIME_RULE = r'Casting Time\*\*:\s(.*)'

RANGE_RULE = r'Range\*\*:\s(.*)'

CAN_BE_RITUAL_RULE = r'ritual'

DURATION_RULE = r'Duration\*\*:\s(.*)'

DESCRIPTION_OVER_RULE = r'Duration\*\*.*\n\n(.*\n*)*'

HIGHER_LEVEL_RULE = r'\*\*At Higher\sLevels\.\*\*\s(.*)'

CONCENTRATION_RULE = r'Concentration'
SOMATIC_RULE = r'Components\*\*:.*S'
VERBAL_RULE = r'Components\*\*:.*V'
MATERIAL_RULE = r'Components\*\*:.*M'
REQUIRED_GOLD = r'(\d*,?\d+)\s*gp'

TAGS_EXTRACTOR = r'tags:\s*\[(.*)\]'

current_path = ""

def get_value(text, rule, match_group = 1, isOptional = False,):
    match = re.search(rule, text, re.M | re.I | re.M)
    if match:
        return match.group(match_group)
    elif not isOptional:
        print("Can't parse " + current_path + " with rule " + rule)

def contain(text, rule):
    match = re.search(rule, text, re.M | re.I | re.M)
    if match:
        return True
    else:
        return False


def parse_spell(path):
    global current_path
    current_path = path
    spell = {}

    with open(path, "r", encoding="utf8") as file_input:
        all_text = file_input.read()

        # Level
        cantrip_match = re.search(CANTRIP_RULE, all_text, re.M | re.I | re.M)
        if cantrip_match:
            spell["level"] = 0
        else:
            level_match = re.search(LEVEL_RULE, all_text, re.M | re.I | re.M)
            if level_match:
                spell["level"] = (int)(level_match.group(1))
            else:
                print("Can't parse level in " + path)

        # Name
        spell["name"] = get_value(all_text, TITLE_RULE).title()

        # Type
        spell["type"] = get_value(all_text, TYPE_RULE).title()

        # School
        school_cantrip_match = re.search(
            SCHOOL_RULE_CANTRIP, all_text, re.M | re.I | re.M)
        if school_cantrip_match:
            spell["school"] = school_cantrip_match.group(1)
        else:
            school_match = re.search(SCHOOL_RULE, all_text, re.M | re.I | re.M)
            if school_match:
                spell["school"] = school_match.group(1)
            else:
                print("Can't parse school in " + path)

        # Casting Time
        spell["castingTime"] = get_value(all_text, CASTING_TIME_RULE)

        # Range
        spell["range"] = get_value(all_text, RANGE_RULE)

        # Can Be Ritual
        spell["canBeRitual"] = contain(all_text, CAN_BE_RITUAL_RULE)

        # Duration
        spell["duration"] = get_value(all_text, DURATION_RULE)

        # Components
        component = {}
        component["concentration"] = contain(all_text, CONCENTRATION_RULE)
        component["somatic"] = contain(all_text, SOMATIC_RULE)
        component["verbal"] = contain(all_text, VERBAL_RULE)
        component["material"] = contain(all_text, MATERIAL_RULE)
        goldValue = get_value(all_text, REQUIRED_GOLD, isOptional = True)
        if goldValue:
            component["requiredGold"] = (int)(goldValue.replace(",", ""))
        else:
            component["requiredGold"] = 0
        spell["components"] = component

        # Description
        over_description = get_value(all_text, DESCRIPTION_OVER_RULE, match_group = 0)
        duration_to_trim = get_value(all_text, DURATION_RULE, match_group = 0)
        trimmed_description = over_description.replace(duration_to_trim, "")

        higher_spell_to_trim = get_value(all_text, HIGHER_LEVEL_RULE, match_group = 0, isOptional = True)
        if higher_spell_to_trim:
            trimmed_description = trimmed_description.replace(higher_spell_to_trim, "")

        spell["description"] = trimmed_description.strip()

        # Higher Level
        spell["higherLevel"] = get_value(all_text, HIGHER_LEVEL_RULE, isOptional = True)
        
        # Class
        existing_classes = ["bard, cleric", "druid", "ranger", "sorcerer", "warlock", "wizard", "paladin"]
        tags = (get_value(all_text, TAGS_EXTRACTOR)).split(",")
        classes = []
        for tag in tags:
            for existing_class in existing_classes:
                if existing_class in tag:
                    classes.append(tag)
        spell["class"] = classes

    return spell


# spell_path=os.path.join(
#     os.getcwd(), r"grimoire_temp\_posts\2015-07-30-web.markdown")
# parse_spell(spell_path)
