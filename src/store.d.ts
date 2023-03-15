declare interface Store {
  catalogSelected: CatalogPoints;
  configSelected: ConfigPoints;
  transactions: Transactions;
  assets: Assets;
  sidebarOpen: boolean;
}

declare interface App {
  app: Store;
}
