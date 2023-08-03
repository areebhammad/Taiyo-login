//without a defined matcher, This one line applies next-auth to the entire project
export { default } from "next-auth/middleware";

//Applies next-auth only to the matching routes - can be regex
// export const config = { matcher: ["/extra"] };
