# Rule

- Sau 20h → ưu tiên tag nhe / nong
- Sau 22h → hạn chế qua_no

- Nếu trường **cookingTip** *null* thì hiển thị: 

```sh
💡 Mẹo:
Món này làm khá đơn giản.

```

- Nguyên tắc:

> **cookingTip**: 1 câu duy nhất  
> **recipeLink**: optional, mở tab mới

- Triển khai 2 phần mềm riêng biệt:

```
[ Decide App ]  --->  [ Recipe App ]
     |                   |
  quyết định          học nấu

```

