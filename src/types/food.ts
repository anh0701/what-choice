export type FoodType = "nau" | "mua" | "dat";

export type Food = {
  id: string;
  name: string;
  type: FoodType;
  ingredients?: string[];
  tags: string[];
  price?: string;
  reason: string[];
  cookingTip: string | null;
  recipeLink: string | null;
};
