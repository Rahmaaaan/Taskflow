"use client";

import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import { SignInButton } from "@clerk/clerk-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold">
        Welcome to Taskflow 🚀
      </h1>
      <br /><br />
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium">
        Integrate, Create, Collaborate <br/> Your Unified Workspace Solution.
      </h2>
      <br />
      <br />
      <h3 className="text-base sm:text-xl md:text-2xl font-normal">
        Taskflow streamlines work by seamlessly blending note-taking, project
        management and collaboration tools in a single, versatile
        platform. Embrace flexibility in organizing information effortlessly.
      </h3>
      <br/>
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Enter Taskflow
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>
            Get Taskflow free
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
};
