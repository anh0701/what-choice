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
  {
    id: "mi_tom_trung",
    name: "Mì tôm trứng",
    type: "nau",
    ingredients: ["mi_goi", "trung", "rau"],
    tags: ["nhanh", "re"],
    reason: ["cứu đói cấp tốc", "nguyên liệu dễ tìm"],
    cookingTip: "Thêm một ít hành lá và tiêu để thơm hơn nhé!",
    recipeLink: null
  },
  {
    id: "dau_hu_sot_ca",
    name: "Đậu hũ sốt cà chua",
    type: "nau",
    ingredients: ["dau_hu", "ca_chua"],
    tags: ["re", "nhe"],
    reason: ["ăn thanh đạm", "chi phí cực rẻ"],
    cookingTip: "Chiên sơ đậu hũ trước khi sốt để không bị nát.",
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
  {
    id: "banh_cuon",
    name: "Bánh cuốn",
    type: "mua",
    tags: ["nhe", "nhanh"],
    price: "25,000đ - 40,000đ",
    reason: ["ăn sáng hoặc ăn xế đều hợp", "nhẹ bụng"],
    cookingTip: null,
    recipeLink: null
  },
  {
    id: "com_tam",
    name: "Cơm tấm",
    type: "mua",
    tags: ["no"],
    price: "35,000đ - 60,000đ",
    reason: ["đặc sản vỉa hè", "no lâu"],
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
  {
    id: "ga_ran",
    name: "Gà rán",
    type: "dat",
    tags: ["no", "nong"],
    price: "50,000đ - 100,000đ",
    reason: ["thèm đồ dầu mỡ", "stress relief"],
    cookingTip: null,
    recipeLink: null
  },
  {
    id: "pizza",
    name: "Pizza",
    type: "dat",
    tags: ["no"],
    price: "> 100,000đ",
    reason: ["ăn cùng bạn bè", "đổi vị kiểu Tây"],
    cookingTip: null,
    recipeLink: null
  },
  {
    id: "bun_dau_mam_tom",
    name: "Bún đậu mắm tôm",
    type: "dat",
    tags: ["no", "nong"],
    price: "40,000đ - 70,000đ",
    reason: ["món gây nghiện", "nhiều topping"],
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
  },
  {
    id: "oc_cac_loai",
    name: "Ốc các loại",
    type: "mua",
    tags: ["nong", "nhe"],
    price: "50,000đ - 150,000đ",
    reason: ["lai rai buổi tối", "nhiều hương vị"],
    cookingTip: null,
    recipeLink: null
  },
  {
    id: "sup_cua",
    name: "Súp cua",
    type: "mua",
    tags: ["nhe", "nong"],
    price: "< 30,000đ",
    reason: ["ấm bụng đêm khuya", "dễ tiêu hóa"],
    cookingTip: null,
    recipeLink: null
  }
];