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



def simple_parser(path, text, spell, name, rule):
    match = re.search(rule, text, re.M | re.I | re.M)
    if match:
        spell[name] = match.group(1)
    else:
        print("Can't parse level in " + path)


def parse_spell(path):
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

        # Type
        simple_parser(path, all_text, spell, "type", TYPE_RULE)

        # Name
        simple_parser(path, all_text, spell, "name", TITLE_RULE)

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
        simple_parser(path, all_text, spell, "castingTime", CASTING_TIME_RULE)

        # Range
        simple_parser(path, all_text, spell, "range", RANGE_RULE)

    return spell


spell_path=os.path.join(
    os.getcwd(), r"grimoire_temp\_posts\2015-05-11-suggestion.markdown")
parse_spell(spell_path)
