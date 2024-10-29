import Hello from "./components/hello";

export default function Home() {
  console.log("Hello");

  return (
    <div>
      <h1 className="text-3xl underline">Home</h1>
      <Hello />
    </div>
  );
}
