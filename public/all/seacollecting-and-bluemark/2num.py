import os
import re
from PIL import Image

# ✅ 替換成你實際的資料夾路徑
folder_path = "seacollecting-and-bluemark"

# ✅ 正則式：針對「閉幕式 (數字).jpg」
pattern = re.compile(r"^拾海_藍印 \((\d+)\)\.jpg$")

# ✅ 遍歷資料夾中的檔案
for filename in os.listdir(folder_path):
    match = pattern.match(filename)
    if match:
        number = match.group(1)  # 括號中的數字
        input_path = os.path.join(folder_path, filename)
        output_filename = f"{number}.png"
        output_path = os.path.join(folder_path, output_filename)

        try:
            with Image.open(input_path) as img:
                img = img.convert("RGBA")
                img.save(output_path, "PNG")
                print(f"✓ {filename} → {output_filename}")
        except Exception as e:
            print(f"✗ 轉換失敗：{filename}，錯誤：{e}")
    else:
        print(f"⚠️ 不符合格式：{filename}")
