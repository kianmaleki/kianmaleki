import React from "react";
import { Button } from "./ui/button";
import { MessageCircle } from "lucide-react";
import Container from "./Container";
import Link from "next/link";

export default function ProfileButtons() {
  return (
    <Container className="flex-col sm:flex-row text-center">
      <Button
        asChild
        className="bg-[#FFE071] text-black text-sm sm:text-base p-8 sm:py-6 sm:px-10 rounded-2xl hover:bg-[#FFD54F] transition-colors w-full sm:w-auto"
      >
        <Link
          href="https://t.me/kian_maleki"
          className="flex items-center justify-center gap-2"
        >
          ارتباط با من
          <MessageCircle size={30} />
        </Link>
      </Button>
    </Container>
  );
}
