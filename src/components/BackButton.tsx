"use client";

// Next
import { useRouter } from "next/navigation";

interface GoBackProps {
  title: string;
}

export function BackButton({ title }: GoBackProps) {
  const router = useRouter();
  return (
    <button
      className="items-center flex gap-2 relative group border-[.0625rem] border-gray/25"
      onClick={() => router.back()}
    >
      <p>{title}</p>
    </button>
  );
}
