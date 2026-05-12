import json
import os

data_dir = r"d:\WEBHOCTA\webhoctienganhmoingay\data\lessons"

missing = []

for i in range(1, 31):
    file_path = os.path.join(data_dir, f"day{i}.json")
    if not os.path.exists(file_path):
        missing.append(f"day{i}.json missing file")
        continue
    with open(file_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    if "vocabulary" not in data:
        missing.append(f"day{i}.json missing vocabulary key")
        continue
    for v in data["vocabulary"]:
        if "example" not in v or not v["example"] or "exampleVi" not in v or not v["exampleVi"]:
            missing.append(f"day{i}.json word {v.get('word', 'unknown')} missing example")

if not missing:
    print("All vocabulary items have examples.")
else:
    for m in missing:
        print(m)
