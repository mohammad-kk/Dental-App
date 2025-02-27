"use client";

import ServiceTemplate from "@/components/services/service-template";
import { servicesData } from "@/data/services-data";

export default function EliteAutomationPage() {
  return <ServiceTemplate serviceData={servicesData["elite-automation"]} />;
}