import { rootServices } from "./rootService";

const formService = rootServices.injectEndpoints({
  endpoints: (build) => ({
    logistics: build.mutation<Logistics, Logistics>({
      query: (data) => ({
        url: (): string => `logistics`,
        method: "POST",
        data
      })
    })
  })
});

export const { useLogisticsMutation } = formService;
