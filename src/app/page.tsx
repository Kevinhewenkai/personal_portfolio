import Image from "next/image";
import Introduction from "./(Introduction)/page";

export default function Home() {
  return (
    <main className="flex flex-1">
      <Introduction />
    </main>
  );
}
