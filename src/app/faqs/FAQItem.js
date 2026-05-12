"use client";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../../components/ui/accordion";

export default function FAQItem({ q, a, value }) {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger>{q}</AccordionTrigger>
      <AccordionContent>{a}</AccordionContent>
    </AccordionItem>
  );
}
