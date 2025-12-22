// const authApi = baseApi.injectEndpoints({
//   endpoints: (builder) => ({
//     register: builder.mutation({
//       query: (body: {
//         name: string;
//         email: string;
//         password: string;
//         phoneNumber: string;
//         address: string;
//       }) => ({
//         url: "/users/register",
//         body,
//         method: "POST",
//       }),
//     }),
//     login: builder.mutation({
//       query: (body: { email: string; password: string }) => ({
//         url: "/users/login",
//         body,
//         method: "POST",
//       }),
//     }),

//     verifyOtp: builder.mutation({
//       query: (body: { email: string; otp: string }) => ({
//         url: "/users/verifyOtp",
//         body,
//         method: "POST",
//       }),
//       invalidatesTags: ["UserById"],
//     }),
//   }),
// });

// export const { useRegisterMutation, useLoginMutation, useVerifyOtpMutation } =
//   authApi;
