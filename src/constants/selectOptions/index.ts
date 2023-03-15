import { Assets } from "./assets";
import { ConfigPoints } from "./configPoints";
import { CatalogPoints } from "./catalogPoints";
import { Transactions } from "./transactions";

const SelectOptions: Map<SelectOptions, optionsSelect[]> = new Map([
  ["Assets", Assets],
  ["ConfigPoints", ConfigPoints],
  ["CatalogPoints", CatalogPoints],
  ["Transactions", Transactions]
]);

export default SelectOptions;
