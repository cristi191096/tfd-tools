
import { ModeToggle } from "@/components/mode-toggle";
import { UserProfile } from "./_components/user-profile";
import { DescendantModuleViewer } from "@/components/modules-viewer";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-6">
      <ModeToggle/>
      <h2>Hello</h2>
      {/* <UserSearch/> */}
      <UserProfile/>
    </main>
  );
}
