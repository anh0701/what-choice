import type { Food } from "../types/food";

export const foods: Food[] = [
  // ====== NẤU ======
  {
    id: "trung_chien",
    name: "Trứng chiên",
    type: "nau",
    ingredients: ["trung"],
    tags: ["nhanh", "re"],
    reason: ["làm nhanh", "nguyên liệu luôn có"],
    cookingTip: null,
    recipeLink: null
  },
  {
    id: "canh_trung",
    name: "Canh trứng",
    type: "nau",
    ingredients: ["trung", "rau"],
    tags: ["nhanh", "nhe"],
    reason: ["ăn nhẹ bụng", "dễ nấu"],
    cookingTip: null,
    recipeLink: null
  },
  {
    id: "thit_kho",
    name: "Thịt kho",
    type: "nau",
    ingredients: ["thit"],
    tags: ["no"],
    reason: ["ăn chắc bụng", "ăn được nhiều bữa"],
    cookingTip: null,
    recipeLink: null
  },
  {
    id: "rau_xao",
    name: "Rau xào",
    type: "nau",
    ingredients: ["rau"],
    tags: ["nhanh", "nhe"],
    reason: ["đỡ ngán", "làm nhanh"],
    cookingTip: null,
    recipeLink: null
  },

  // ====== MUA (mang về) ======
  {
    id: "com_suon",
    name: "Cơm sườn",
    type: "mua",
    tags: ["no"],
    price: "30,000đ - 50,000đ",
    reason: ["ăn no lâu", "dễ tìm"],
    cookingTip: null,
    recipeLink: null
  },
  {
    id: "banh_mi",
    name: "Bánh mì",
    type: "mua",
    tags: ["nhanh", "re"],
    price: "< 30,000đ",
    reason: ["ăn nhanh", "rẻ"],
    cookingTip: null,
    recipeLink: null
  },
  {
    id: "bun_rieu",
    name: "Bún riêu",
    type: "mua",
    tags: ["nong"],
    price: "30,000đ - 50,000đ",
    reason: ["món nước dễ ăn", "không ngán"],
    cookingTip: null,
    recipeLink: null
  },
  {
    id: "xoi",
    name: "Xôi",
    type: "mua",
    tags: ["no", "re"],
    price: "< 30,000đ",
    reason: ["ăn chắc bụng", "tiện"],
    cookingTip: null,
    recipeLink: null
  },

  // ====== ĐẶT (Grab / ShopeeFood) ======
  {
    id: "com_ga",
    name: "Cơm gà",
    type: "dat",
    tags: ["no"],
    price: "30,000đ - 50,000đ",
    reason: ["dễ ăn", "đặt nhanh"],
    cookingTip: null,
    recipeLink: null
  },
  {
    id: "bun_bo",
    name: "Bún bò",
    type: "dat",
    tags: ["nong", "no"],
    price: "30,000đ - 50,000đ",
    reason: ["ăn ấm bụng", "món quen thuộc"],
    cookingTip: null,
    recipeLink: null
  },
  {
    id: "pho",
    name: "Phở",
    type: "dat",
    tags: ["nong"],
    price: "30,000đ - 50,000đ",
    reason: ["dễ ăn", "hợp nhiều thời điểm"],
    cookingTip: null,
    recipeLink: null
  },
  {
    id: "bun_thit_nuong",
    name: "Bún thịt nướng",
    type: "dat",
    tags: ["no"],
    price: "30,000đ - 50,000đ",
    reason: ["ăn không ngán", "nhiều topping"],
    cookingTip: null,
    recipeLink: null
  },
  // ====== ĂN VẶT / ĂN KHUYA ======
  {
    id: "banh_trang_tron",
    name: "Bánh tráng trộn",
    type: "mua",
    tags: ["nhe", "re"],
    price: "< 30,000đ",
    reason: ["ăn chơi", "dễ thèm buổi chiều"],
    cookingTip: null,
    recipeLink: null
  },
  {
    id: "ca_vien_chien",
    name: "Cá viên chiên",
    type: "mua",
    tags: ["nong", "re"],
    price: "< 30,000đ",
    reason: ["ăn nóng ngon hơn", "ăn lai rai"],
    cookingTip: null,
    recipeLink: null
  },
  {
    id: "tra_sua",
    name: "Trà sữa",
    type: "dat",
    tags: ["nhe"],
    price: "30,000đ - 50,000đ",
    reason: ["thèm đồ ngọt", "uống cho tỉnh"],
    cookingTip: null,
    recipeLink: null
  },
  {
    id: "banh_mi_trung",
    name: "Bánh mì trứng",
    type: "mua",
    tags: ["nhanh", "re"],
    price: "< 30,000đ",
    reason: ["ăn nhanh buổi tối", "không cần chờ lâu"],
    cookingTip: null,
    recipeLink: null
  },
  {
    id: "mi_xao",
    name: "Mì xào",
    type: "dat",
    tags: ["no"],
    price: "30,000đ - 50,000đ",
    reason: ["ăn khuya cho chắc bụng", "no lâu"],
    cookingTip: null,
    recipeLink: null
  },
  {
    id: "pho_khuya",
    name: "Phở khuya",
    type: "dat",
    tags: ["nong", "no"],
    price: "30,000đ - 50,000đ",
    reason: ["ăn khuya ấm bụng", "dễ ngủ lại"],
    cookingTip: null,
    recipeLink: null
  }
];

export const moods = [
  "đỡ phải nghĩ",
  "để app chọn cho nhanh",
  "ăn cho xong bữa"
];