import re
import os

TITLE_RULE = r'title:\s*"(.*)"'

def parse_spell(path):
    spell = {}

    with open(path, "r", encoding="utf8") as file_input:
        all_text = file_input.read()

        # Name
        name_match = re.search(TITLE_RULE, all_text , re.M|re.I|re.M)
        if name_match:
            spell["Name"] = name_match.group(1)
        else:
            print("no match on file" + path)
        

    return spell

spell_path = os.path.join(os.getcwd(), r"grimoire_temp\_posts\2015-05-11-suggestion.markdown")
parse_spell(spell_path)