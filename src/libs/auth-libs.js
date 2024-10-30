const { getServerSession } = require("next-auth");
const { authOption } = require("@/app/api/auth/[...nextauth]/route");

export const authUserSession = async () => {
   const session = await getServerSession(authOption);
   return session?.user;
};
