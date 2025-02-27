"use client";

import ServiceTemplate from "@/components/services/service-template";
import { servicesData } from "@/data/services-data";

export default function CustomWebsitePage() {
  return <ServiceTemplate serviceData={servicesData["custom-website"]} />;
}