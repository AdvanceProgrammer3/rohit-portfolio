"use client";

import { Button } from "@/components/ui/button";
import { UserButton, useAuth, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

function WelcomePage() {
  const { userId, sessionId, getToken } = useAuth();
  const { isLoaded, isSignedIn, user } = useUser();

  return (
    <main className="p-4 grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto">
      <div className="flex-col flex  space-y-2 dark:text-gray-400 justify-center items-center">
        <p className="font-bold text-2xl">
          Introducing... FULLSTACK ENVORNMENT
        </p>
        <p className="font-semibold">It's not series of course.</p>
        <p className="text-xs font-bold lg:pb-20">
          It's devoloper community to make easy process🎉
        </p>

        <Link href="/course">
          <Button variant={"outline"} className="lg:w-96">
            Click Here for More Info
          </Button>
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <video style={{ width: "500px", height: "400px" }} controls>
          <source
            src="https://firebasestorage.googleapis.com/v0/b/rohit-personal-website-42e45.appspot.com/o/WelcomeVideo%2FTitle%20_%20What%20is%20Portfolio_%20_%20In%20Hindi%20_%20%23shorts.mp4?alt=media&token=b99544e3-4ac6-49ab-b969-41f2e970b682"
            type="video/mp4"
          />
        </video>
      </div>
    </main>
  );
}

export default WelcomePage;
