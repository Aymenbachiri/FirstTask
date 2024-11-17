import { Profile } from "./Profile";
import { RadialChart } from "./RadialChart";
import { SignOutBtn } from "./SignOutBtn";

export function Sidebar() {
  return (
    <main className="w-[20rem] mt-[5rem] h-[calc(100%-5rem)] fixed right-0 top-0 bg-[#f9f9f9] flex flex-col">
      <Profile />
      <div className="mt-4 mx-6">
        <RadialChart />
      </div>

      <SignOutBtn />
    </main>
  );
}
