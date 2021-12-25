import axios from "axios";

export default async function getUserProfile(context) {
  let token;
  if (context.req) {
    if (context.req.headers.cookie) {
      token = context.req.headers.cookie
        .split(";")
        .map((element) => element.trim());
      token = token.find((c) => c.startsWith("token="));

      if (token) {
        token = token.split("=")[1];
        try {
          const response = await axios.get(
            `${process.env.NEXT_PUBLIC_baseURL}/user/`,
            {
              headers: {
                Authorization: "Token " + token,
              },
            }
          );
          return {
            data: response.data[0],
          };
        } catch (error) {
          if (error.response.status === 401) {
            context.redirect("/logout");
          }
        }
      }
    }
  }
}
