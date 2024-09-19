"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

export function SubmitButton({ text }: { text: string }) {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled>
          <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Please Wait
        </Button>
      ) : (
        <Button type="submit">{text}</Button>
      )}
    </>
  );
}

export function BuyButton({ price }: { price: number }) {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled size="lg" className="w-full mt-">
          <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Please Wait
        </Button>
      ) : (
        <Button type="submit" className="w-full lg:w-96 mt-10" size="lg">
          Buy for ${price}
        </Button>
      )}
    </>
  );
}
