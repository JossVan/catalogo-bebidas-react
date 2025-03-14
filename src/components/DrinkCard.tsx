import { useAppStore } from "../stores/useAppStore";
import { Drink } from "../types";

type DrinkCardPropos = {
  drink: Drink;
};

export default function DrinkCard({ drink }: DrinkCardPropos) {
  const getRecipesById = useAppStore((state) => state.getRecipesById);

  return (
    <div className="shadow-lg">
      <div className="overflow-hidden">
        <img
          src={drink.strDrinkThumb}
          alt={`Imagen de ${drink.strDrink}`}
          className="hover:scale-125 transition-transform hover:rotate-2"
        />
      </div>

      <div className="p-5">
        <h2 className="text-2xl truncate font-black">{drink.strDrink}</h2>

        <button
          onClick={() => getRecipesById(drink.idDrink)}
          type="button"
          className="bg-orange-400 hover:bg-orange-500 mt-5 w-full p-3 font-bold cursor-pointer"
        >
          Ver receta
        </button>
      </div>
    </div>
  );
}
