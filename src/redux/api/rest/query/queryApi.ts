// const queryApi = baseApi.injectEndpoints({
//   endpoints: (builder) => ({
//     getAllUsers: builder.query<any, void>({
//       query: () => ({
//         url: "users/user-list",
//         method: "GET",
//       }),
//       providesTags: ["Users"],
//     }),

//     getUserById: builder.query<any, { id: string }>({
//       query: ({ id }) => ({
//         url: `users/${id}`,
//         method: "GET",
//       }),
//       providesTags: ["UserById"],
//     }),

//   }),
// });

// export const { useGetAllUsersQuery, useGetUserByIdQuery };
