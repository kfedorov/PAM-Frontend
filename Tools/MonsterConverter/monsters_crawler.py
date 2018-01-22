import os
import json
from monster_parser import parse_monster

OUTPUT_SPELLS_PATH = "monsters.json"

def crawl_files(spells_path):
    spell_list = []
    for filename in os.listdir(spells_path):
        spell_path = os.path.join(spells_path, filename)
        spell = parse_monster(spell_path)
        spell_list.append(spell)

    json_dump = json.dumps(spell_list, indent=2, ensure_ascii=False)

    with open(OUTPUT_SPELLS_PATH, "w", encoding="utf8") as spells_file:
        spells_file.write(json_dump)
