import { getServerSession } from "next-auth/next";
import { options } from "../api/auth/[...nextauth]/options";
import UserCard from "../../components/UserCard";

export default async function Home() {
  const session = await getServerSession(options);

  // Check if session and user are available
  if (!session || !session.user) {
    return <h1 className="text-3xl">Login to see content</h1>;
  }

  return <UserCard user={session.user} />;
}
