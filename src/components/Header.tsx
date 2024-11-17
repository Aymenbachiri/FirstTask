import { IconCheck } from "@/lib/icons/IconCheck";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

export async function Header() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <header className="px-6 my-4 w-full flex items-center justify-between bg-[#f9f9f9]">
      <section>
        <h1 className="text-lg font-medium">
          <span role="img" aria-label="wave">
            👋
          </span>
          {user
            ? `welcome ${user.given_name} to FirstTask`
            : "Welcome to FirstTask"}
        </h1>
        <p>
          {user ? (
            <>
              you have <span className="font-bold text-[#3aafae]">5</span>{" "}
              active tasks
            </>
          ) : (
            "Please sign in to view your first task"
          )}
        </p>
      </section>
      <div className="h-[50px] flex items-center gap-[10.4rem]">
        <button className="px-8 py-3 bg-[#3aafae] text-white rounded-[50px] hover:bg-[#00A1F1] hover:text-white transition-all duration-200 ease-in-out">
          Create a new task
        </button>

        <nav className="flex items-center gap-4">
          <Link
            href="/"
            passHref
            target="_blank"
            rel="noreferrer"
            className="h-[40px] w-[40px] text-purple-500 rounded-full flex items-center justify-center hover:bg-[#3aafae] hover:text-white transition-all duration-200 ease-in-out"
          >
            <IconCheck />
          </Link>
          <Link
            href="/"
            passHref
            target="_blank"
            rel="noreferrer"
            className="h-[40px] w-[40px] text-purple-500 rounded-full flex items-center justify-center hover:bg-[#3aafae] hover:text-white transition-all duration-200 ease-in-out"
          >
            <IconCheck />
          </Link>
          <Link
            href="/"
            passHref
            target="_blank"
            rel="noreferrer"
            className="h-[40px] w-[40px] text-purple-500 rounded-full flex items-center justify-center hover:bg-[#3aafae] hover:text-white transition-all duration-200 ease-in-out"
          >
            <IconCheck />
          </Link>
        </nav>
      </div>
    </header>
  );
}
