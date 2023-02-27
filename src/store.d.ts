declare interface Store {
  catalogSelected: CatalogPoints;
  configSelected: ConfigPoints;
  transactions: Transactions;
  assets: Assets;
}

declare interface App {
  app: Store;
}
