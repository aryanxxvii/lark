"use client";

import { FC, useState } from "react";
import { Button } from "./Button";
import { signIn } from "next-auth/react";
import { toast } from "./toast";
interface SignInButtonProps {}

const SignInButton: FC<SignInButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signInWithGitHub = async () => {
    setIsLoading(true);

    try {
      await signIn("github");
    } catch (error) {
      toast({
        title: "Error signing in",
        message: "Please try again later",
        type: "error",
      });
    }
  };

  return (
    <Button onClick={signInWithGitHub} isLoading={isLoading}>
      Sign In
    </Button>
  );
};

export default SignInButton;
