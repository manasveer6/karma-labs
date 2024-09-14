import { redirect } from 'next/navigation';
import { auth } from "@/auth";

export default async function Dashboard() {

  const session = await auth();

  console.log(session)

  if (!session?.user.jwt) {
    redirect(`/login`)
  }

  return (
    <>
      <h1>You are logged in {session.user.jwt.toString()}</h1>
    </>
  );
}