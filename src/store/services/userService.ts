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
    })
  })
});

export const { useLoginMutation } = userService;
export default userService;
