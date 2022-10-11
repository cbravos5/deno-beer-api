import { DataTypes, Model } from "https://deno.land/x/denodb@v1.0.40/mod.ts";

export default class Beer extends Model {
  static table = "beers";

  static fields = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },

    name: DataTypes.string(25),
    baseIngredient: DataTypes.string(25),
  };
}
