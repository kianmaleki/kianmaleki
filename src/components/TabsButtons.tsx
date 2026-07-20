"use client";

import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import Container from "./Container";
import PortfolioItem from "./ProfileItem";
import SkillCircle from "./SkillCircle";

export function TabsButtons() {
  const [selectedTab, setSelectedTab] = useState("portfolio");

  return (
    <Container className="flex-col items-center justify-center">
      <ToggleGroup
        variant="outline"
        type="single"
        value={selectedTab}
        onValueChange={(val) => val && setSelectedTab(val)}
        className="bg-[#171F26] flex flex-wrap justify-center gap-4 py-4 px-6 rounded-2xl w-full max-w-screen-md"
      >
        {[
          { label: "نمونه کارها", value: "portfolio" },
          { label: "مهارت های من", value: "skills" },
        ].map((tab) => (
          <ToggleGroupItem
            key={tab.value}
            value={tab.value}
            aria-label={`Toggle ${tab.label}`}
            className="text-[#A3ABB2] px-10 py-8 text-sm sm:text-base border-none hover:cursor-pointer !rounded-2xl transition-all duration-200 ease-in-out hover:bg-[#1f2a32] hover:text-white data-[state=on]:bg-[#0C151D] data-[state=on]:text-white"
          >
            {tab.label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>

      <div className="text-white mt-8 w-full">
        {selectedTab === "portfolio" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <PortfolioItem
              imageSrc="/images/burger.png"
              overlayTitle="پروژه مستربیست برگر"
              overlayDescription="این پروژه یک کلون از لندینگ پیج سایت فروش برگر مستربیست است"
              overlayLink="https://kiako-burger.vercel.app/"
            />
            <PortfolioItem
              imageSrc="/images/coofee.png"
              overlayTitle="پروژه فروشگاهی قهوه"
              overlayDescription="این پروژه یک سایت فروشگاهی برای فروش قهوه میباشد"
              overlayLink="https://kiako-coofee.vercel.app/"
            />
            <PortfolioItem
              imageSrc="/images/carshowcase.png"
              overlayTitle="پروژه نمایشگاه خودرو"
              overlayDescription="یک پروژه جهت نمایش خودرو ها با قابلیت سرچ خودرو ها"
              overlayLink="https://kiako-car-showcase.vercel.app/"
            />
            <PortfolioItem
              imageSrc="/images/whitepace.png"
              overlayTitle="پروژه لندینگ پیج شرکتی"
              overlayDescription="این پروژه یک لندینگ پیج شرکتی میباشد "
              overlayLink="https://kiako-whitepace.vercel.app/"
            />
            <PortfolioItem
              imageSrc="/images/portfolio.png"
              overlayTitle="پروژه وبسایت شخصی"
              overlayDescription="این یک وبسایت شخصی میباشد که فرد میتواند اطلاعات مربوط به خود را درون ان قرار دهد"
              overlayLink="https://kiako-portfolio.vercel.app/"
            />
            <PortfolioItem
              imageSrc="/images/qrcode.png"
              overlayTitle="پروژه ساخت کیو ار کد"
              overlayDescription="این پروژه جهت تبدیل لینک ها به کیو ار کد رایگان و دائمی میباشد"
              overlayLink="https://kiako-qrcode.vercel.app/"
            />
            <PortfolioItem
              imageSrc="/images/honey.png"
              overlayTitle="پروژه فروشگاهی عسل"
              overlayDescription="این پروژه یک سایت فروشگاهی عسل میباشد"
              overlayLink="https://honeypro.ir/"
            />
          </div>
        )}
        {selectedTab === "skills" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            <SkillCircle label="ری اکت" percentage={90} />
            <SkillCircle label="تایپ اسکریپت" percentage={85} />
            <SkillCircle label="نکست جی اس" percentage={80} />
            <SkillCircle label="تیلویند" percentage={75} />
            <SkillCircle label="وردپرس" percentage={70} />
            <SkillCircle label="فیگما" percentage={60} />
          </div>
        )}
      </div>
    </Container>
  );
}
