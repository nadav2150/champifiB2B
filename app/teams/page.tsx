import Image from "next/image";

export default function Dashboard() {
  return (
    <main>
      <img src="/icon.png" width={200} height={200} alt="A server surrounded by magic sparkles." />
      <h1>Welcome to dashboard</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
    </main>
  );
}
