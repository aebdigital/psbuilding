import os
import shutil
from pathlib import Path

# Mapping of source directories to target directories
mapping = {
    "Ine práce": "ine-prace",
    "Maliarske práce": "maliarske-prace",
    "Zateplenie": "zateplovacie",
    "murarske prác- omietky": "murarske",
    "obkady a dlažby": "obklady-dlazby",
    "sadrokartonarske práce": "sadrokarton"
}

source_root = "/Users/alexanderhidveghy/Documents/cms/DONE/psbuidling-next.js/WEBSTRANKA"
target_root = "/Users/alexanderhidveghy/Documents/cms/DONE/psbuidling-next.js/app/public/sources"

def main():
    for source_dir, target_dir in mapping.items():
        src_path = Path(source_root) / source_dir
        dst_path = Path(target_root) / target_dir

        if not src_path.exists():
            print(f"Source directory {src_path} not found. Skipping.")
            continue

        if not dst_path.exists():
            os.makedirs(dst_path)

        for filename in os.listdir(src_path):
            if filename.lower().endswith(('.jpg', '.jpeg', '.png', '.webp', '.heic', '.heif')):
                file_src = src_path / filename
                file_dst = dst_path / filename
                
                print(f"Processing: {filename} -> {target_dir}")
                try:
                    shutil.copy2(file_src, file_dst)
                    print(f"  Copied.")
                except Exception as e:
                    print(f"  Failed: {e}")

if __name__ == "__main__":
    main()
