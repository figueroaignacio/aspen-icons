"use client";

// Next
import { useRouter } from "next/navigation";

// Components
import { Button } from "@/components/ui/button";

// Icons
import { ArrowLeftIcon } from "@radix-ui/react-icons";

interface GoBackProps {
  title: string;
}

export function BackButton({ title }: GoBackProps) {
  const router = useRouter();
  return (
    <Button
      variant="default"
      className="items-center flex gap-2 relative group border-[.0625rem] border-gray/25"
      onClick={() => router.back()}
    >
      <ArrowLeftIcon className="transition-transform ease-in-out duration-300 transform translate-x-0 group-hover:-translate-x-1" />
      <p>{title}</p>
    </Button>
  );
}
