import subprocess
import os
from spells_crawler import crawl_files

# Update grimoire repository
GRIMOIRE_PATH = "grimoire_temp"

if os.path.exists(GRIMOIRE_PATH):
    subprocess.check_call(
        "git pull", cwd=GRIMOIRE_PATH)
else:
    subprocess.check_call(
        "git clone https://github.com/thebombzen/grimoire.git " + GRIMOIRE_PATH)

# Read every spells files
SPELLS_PATH = os.path.join(GRIMOIRE_PATH, "_posts")
crawl_files(SPELLS_PATH)
