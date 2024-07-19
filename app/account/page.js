import { auth } from "../_lib/auth";

export const metadata = {
  title: "Guest area",
  description: "Page shows a gueast account",
};

export default async function Page() {
  const session = await auth();
  const firstName = session.user.name.split(" ").at(0);

  return (
    <h2 className="font-semibold text-2xl text-accent-400 mb-7">
      Welcome, {firstName}
    </h2>
  );
}
