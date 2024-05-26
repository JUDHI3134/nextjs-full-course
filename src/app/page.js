"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  const handleNavigate = () =>{
    router.push("/about")
  }

  return (
   
   <div className="w-full h-screen text-center m-auto mt-20">
      <h1 className="text-2xl font-bold">This is The main Home Page</h1>
      <div className="space-x-4 mt-10">
      <Link href={"/about"}><button className="bg-red-600 px-4 py-2 rounded-lg text-white">Go to About page</button></Link>
      <Link href={"/blog"}><button className="bg-green-600 px-4 py-2 rounded-lg text-white">Go to Blog page</button></Link>
      <Link href={"/account"}><button className="bg-orange-600 px-4 py-2 rounded-lg text-white">Go to Account page</button></Link>
      </div>
      <h2 className="text-2xl font-bold mt-10">Alternative way of navigating page using useRouter</h2>
      <button onClick={handleNavigate} className="bg-green-600 px-4 py-2 rounded-lg text-white">Go to About page</button>
   </div>
  );
}
