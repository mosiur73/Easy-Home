import Profit from "@/components/ProfitSection";
import { PropertyListing } from "@/components/property-listing";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <PropertyListing></PropertyListing>
    <Profit></Profit>
   </div>
  );
}
