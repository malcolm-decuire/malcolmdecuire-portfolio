
import type {Frequency, Tier} from "./pricing-types";
import {FrequencyEnum, TiersEnum} from "./pricing-types";


const calendlyURL = "https://calendly.com/malcolm-decuire";

export const frequencies: Array<Frequency> = [
  {key: FrequencyEnum.Yearly, label: "Pay Yearly", priceSuffix: "per year"},
  {key: FrequencyEnum.Quarterly, label: "Pay Quarterly", priceSuffix: "per quarter"},
];

export const tiers: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "Free",
    price: "Free",
    href: calendlyURL,
    featured: false,
    mostPopular: false,
    description: "For non-profits & startups with 10 folks or less.",
    features: ["Bi-weekly review sessions", "5 hrs/mo of GTM Services","GTM Playbook", ],
    buttonText: "Contact Me",
    buttonColor: "default",
    buttonVariant: "flat",
  },
  {
    key: TiersEnum.Pro,
    title: "Standard",
    description: "For startups & non-profits with 10-20.",
    href: calendlyURL,
    mostPopular: true,
    price: {
      yearly: "$750",
      quarterly: "$250",
    },
    featured: false,
    features: [
      "Bi-weekly review sessions",
      "10 hrs/mo of GTM Services",
      "GTM Playbook",
    ],
    buttonText: "Contact Me",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Team,
    title: "Premium",
    href: calendlyURL,
    featured: true,
    mostPopular: false,
    description: "For startups & non-profits with +20 people",
    price: {
      yearly: "$1500",
      quarterly: "$500",
    },
    priceSuffix: "per user",
    features: [
      "Bi-weekly review sessions",
      "30 hrs/mo of GTM Services",
      "GTM Playbook",
    ],
    buttonText: "Contact Me",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];
