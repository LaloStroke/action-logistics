import { rootServices } from "./rootService";

const userService = rootServices.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<any, Login>({
      query: ({ email, password }) => ({
        url: () => `login`,
        method: "POST",
        data: {
          email,
          password
        }
      })
    }),
    setLocation: build.mutation<any, Location>({
      query: ({ data }) => ({
        url: () => `location`,
        method: "POST",
        data: {
          data
        }
      })
    })
  })
});

export const { useLoginMutation, useSetLocationMutation } = userService;
export default userService;
