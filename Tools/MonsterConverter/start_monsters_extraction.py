import subprocess
import os
from monsters_crawler import crawl_files

# Update grimoire repository
TEMP_PATH = "bestiary_temp"

if os.path.exists(TEMP_PATH):
    subprocess.check_call(
        "git pull", cwd=TEMP_PATH)
else:
    subprocess.check_call(
        "git clone https://github.com/chisaipete/bestiary.git " + TEMP_PATH)

# Read every spells files
SPELLS_PATH = os.path.join(TEMP_PATH, "_posts")
crawl_files(SPELLS_PATH)
