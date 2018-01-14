import os
import json
from spellParser import parseSpell

def crawlFiles(spells_path):
    spellList = []
    for filename in os.listdir(spells_path):
        spell_path = os.path.join(spells_path, filename)

        with open(spell_path, "r", encoding="utf8") as fileInput:
            allText = fileInput.readlines()
            spell = parseSpell(allText)
            spellList.append(spell)

    jsonDump = json.dumps(spellList, indent=2, ensure_ascii=False)

    outputSpellPath = "spells.json"

    with open(outputSpellPath, "w", encoding="utf8") as spellsFile:
        spellsFile.write(jsonDump)
