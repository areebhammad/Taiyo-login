import Image from "next/image";

type User = {
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
};

type Props = {
  user: User;
};

export default function Card({ user }: Props) {
  console.log(user);

  const greeting = user?.name ? (
    <div className="flex flex-col items-center p-2 rounded-lg font-medium text-2xl">
      <p>Username: {user?.name}</p>
    </div>
  ) : null;
  const emailId = user?.email ? (
    <div className="flex flex-col items-center rounded-lg font-medium text-2xl ">
      <p>Email Id: {user?.email}</p>
    </div>
  ) : null;

  const image = user?.image ? (
    <div className=" flex flex-col items-center">
      <Image
        className=" rounded-full border-8 border-orange-600"
        src={user?.image}
        priority={true}
        alt="User Profile Picture"
        height={200}
        width={200}
      />
    </div>
  ) : null;
  return (
    <div className="flex flex-col gap-4 ">
      {image}
      {greeting}
      {emailId}
    </div>
  );
}
