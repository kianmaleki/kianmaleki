import { GithubIcon, Linkedin, MessageCircle } from "lucide-react";
import Image from "next/image";
import React from "react";
import Container from "./Container";
import Link from "next/link";

export default function ProfileInfo() {
  return (
    <Container className="flex-col sm:flex-row items-center sm:items-start text-center gap-8">
      <Image
        src="/images/profile.png"
        alt="Profile Picture"
        width={150}
        height={150}
        className="rounded-full border-4 border-gray-300"
      />
      <div className="flex flex-col items-center sm:items-start gap-4">
        <h1 className="text-3xl sm:text-4xl font-bold">کیان مالکی</h1>
        <p className="text-[#A3ABB2] text-base sm:text-lg">
          توسعه دهنده وب اپلیکیشن
        </p>
        <div className="flex gap-4 justify-center sm:justify-start items-center">
          <Link
            href="https://github.com/kianmaleki"
            target="_blank"
            aria-label="GitHub"
          >
            <GithubIcon className="w-5 h-5 hover:text-white transition-colors" />
          </Link>
          <Link
            href="https://t.me/kian_maleki"
            target="_blank"
            aria-label="Twitter"
          >
            <MessageCircle className="w-5 h-5 hover:text-white transition-colors" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/kian-maleki-3a932a37a/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 hover:text-white transition-colors" />
          </Link>
        </div>
      </div>
    </Container>
  );
}
