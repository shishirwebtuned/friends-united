import type { ReactNode } from "react";

export interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string | ReactNode;
}
