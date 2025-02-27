"use client";

import ServiceTemplate from "@/components/services/service-template";
import { servicesData } from "@/data/services-data";

export default function BasicMarketingPage() {
  return <ServiceTemplate serviceData={servicesData["basic-marketing"]} />;
}