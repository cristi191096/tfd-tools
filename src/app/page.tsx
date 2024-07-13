import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserSearch } from "./_components/user-search";
import { UserProfile } from "./_components/user-profile";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h2>Hello</h2>
      {/* <UserSearch/> */}
      <UserProfile/>
    </main>
  );
}
