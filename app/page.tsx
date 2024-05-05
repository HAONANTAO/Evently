import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <h1 className="text-xl">Evently</h1>
      <Button variant="destructive" className="px-10">
        Delete
      </Button>
    </>
  );
}
