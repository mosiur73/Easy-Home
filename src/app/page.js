import { CoursePlatform } from "@/components/course-platform";
import { EssentialTools } from "@/components/essential-tools";
import Profit from "@/components/ProfitSection";
import { PropertyListing } from "@/components/property-listing";
import TestimonialCard from "@/components/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <PropertyListing></PropertyListing>
    <Profit></Profit>
    <CoursePlatform></CoursePlatform>
    <TestimonialCard></TestimonialCard>
    <EssentialTools></EssentialTools>
   </div>
  );
}
