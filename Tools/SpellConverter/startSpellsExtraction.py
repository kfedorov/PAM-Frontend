import subprocess
import os
from spellsCrawler import crawlFiles

# Update grimoire repository
grimoire_path = "grimoire_temp"

if os.path.exists(grimoire_path):
    subprocess.Popen
    subprocess.check_call(
        "git pull", cwd=grimoire_path)
else:
    subprocess.check_call(
        "git clone https://github.com/thebombzen/grimoire.git " + grimoire_path)

# Read every spells files
spells_path = os.path.join(grimoire_path, "_posts")
crawlFiles(spells_path)
