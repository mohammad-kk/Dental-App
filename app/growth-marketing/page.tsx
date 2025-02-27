"use client";

import ServiceTemplate from "@/components/services/service-template";
import { servicesData } from "@/data/services-data";

export default function GrowthMarketingPage() {
  return <ServiceTemplate serviceData={servicesData["growth-marketing"]} />;
}