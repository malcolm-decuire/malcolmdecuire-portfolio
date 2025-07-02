// 20250701 UPDATE FOR PUBLIC REPO -LEGACY CODE 
// "use client";

// import type {TeamMember} from "./portfolio-card";

// import {Button, Spacer} from "@heroui/react";

// import TeamMemberCard from "./portfolio-card";

// const teamMembers: TeamMember[] = [
//   {
//     name: "John Doe",
//     avatar: "https://i.pravatar.cc/150?u=a04258114e29026708c",
//     role: "CEO",
//     bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
//     social: {
//       twitter: "@john-doe",
//       linkedin: "john-doe",
//       github: "@john-doe",
//     },
//   },
//   {
//     name: "Jane Doe",
//     avatar: "https://i.pravatar.cc/150?u=a04258ab4e29066708c",
//     role: "CTO",
//     bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
//     social: {
//       twitter: "@jane-doe",
//       linkedin: "jane-doe",
//       github: "@jane-doe",
//     },
//   },
//   {
//     name: "Robert Doe",
//     avatar: "https://i.pravatar.cc/150?u=a04258114e29066708c",
//     role: "Principal Designer",
//     bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
//     social: {
//       twitter: "@robert-doe",
//       linkedin: "robert-doe",
//       github: "@robert-doe",
//     },
//   },
//   {
//     name: "Mark Doe",
//     avatar: "https://i.pravatar.cc/150?u=a04258a14e29066708c",
//     role: "Principal Engineer",
//     bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
//     social: {
//       twitter: "@mark-doe",
//       linkedin: "mark-doe",
//       github: "@mark-doe",
//     },
//   },
//   {
//     name: "Frank Doe",
//     avatar: "https://i.pravatar.cc/150?u=a04258114e29526708c",
//     role: "Frontend Engineer",
//     bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
//     social: {
//       twitter: "@frank-doe",
//       linkedin: "frank-doe",
//       github: "@frank-doe",
//     },
//   },
//   {
//     name: "Zoe Doe",
//     avatar: "https://i.pravatar.cc/150?u=a04258114e29926708c",
//     role: "Backend Engineer",
//     bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
//     social: {
//       twitter: "@zoe-doe",
//       linkedin: "zoe-doe",
//       github: "@zoe-doe",
//     },
//   },
//   {
//     name: "Bob Doe",
//     avatar: "https://i.pravatar.cc/150?u=a04258114e29b26708c",
//     role: "Product Manager",
//     bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
//     social: {
//       twitter: "@bob-doe",
//       linkedin: "bob-doe",
//       github: "@bob-doe",
//     },
//   },
//   {
//     name: "Francis Doe",
//     avatar: "https://i.pravatar.cc/150?u=a04258b14e29326708c",
//     role: "Product Designer",
//     bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
//     social: {
//       twitter: "@francis-doe",
//       linkedin: "francis-doe",
//       github: "@francis-doe",
//     },
//   },
//   {
//     name: "Milan Doe",
//     avatar: "https://i.pravatar.cc/150?u=a04258114e29326708c",
//     role: "Customer Support",
//     bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
//     social: {
//       twitter: "@milan-doe",
//       linkedin: "milan-doe",
//       github: "@milan-doe",
//     },
//   },
// ];

// export default function Component() {
//   return (
//     <section className="flex max-w-4xl flex-col items-center py-24">
//       <div className="flex max-w-xl flex-col text-center">
//         <h2 className="font-medium text-secondary">We&apos;re hiring!</h2>
//         <h1 className="text-4xl font-medium tracking-tight">Meet our team.</h1>
//         <Spacer y={4} />
//         <h2 className="text-large text-default-500">
//           Our philosophy is to build a great team and then empower them to do great things.
//         </h2>
//         <Spacer y={4} />
//         <div className="flex w-full justify-center gap-2">
//           <Button variant="ghost">About us</Button>
//           <Button color="secondary">Open positions</Button>
//         </div>
//       </div>
//       <div className="mt-12 grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//         {teamMembers.map((member, index) => (
//           <TeamMemberCard key={index} {...member} />
//         ))}
//       </div>
//     </section>
//   );
// }


////////////////
///////////
/////////////THIS WORKS 

// "use client";

// import TeamMemberCard from "./portfolio-card";
// import PortfolioModal from "./PortfolioModal";
// import { Button } from "@heroui/react";
// import { Icon } from "@iconify/react";

// const portfolioItems = [
//   {
//     name: "Investment App",
//     icon: "skill-icons:typescript",
//     role: "Experiment IV",
//     modal: false,
//     href: "https://frontend-app-1088267842930.us-central1.run.app/landlorddemo",
//   },
//   {
//     name: "Rent App",
//     icon: "skill-icons:typescript",
//     role: "Experiment III",
//     modal: false,
//     href: "https://frontend-app-1088267842930.us-central1.run.app/landlorddemo",
//   },
//   {
//     name: "PyPortfolioOpt Demo",
//     icon: "devicon:python",
//     role: "Experiment II",
//     modal: true,
//     iframeSrc: "https://decuresolutions-pyportfolio.streamlit.app/?embed=true",
//   },
//   {
//     name: "Piotroski F-Score",
//     icon: "devicon:python",
//     role: "Experiment I",
//     modal: true,
//     iframeSrc: "https://decuresolutions-app-combo.streamlit.app/?embed=true",
//   },
//   {
//     name: "Sales Engineer Resume",
//     icon: "fa6-solid:file-invoice-dollar",
//     role: "SE Experience",
//     modal: true,
//     iframeSrc: "https://www.canva.com/design/DAGJ3aI5SdE/9mxy3z-gtlTynp5FqrXEag/view?embed",
//   },
//   {
//     name: "Decure Labs Portfolio",
//     icon: "wpf:stack-of-photos",
//     role: "DecureLabs Info",
//     modal: true,
//     iframeSrc: "https://www.canva.com/design/DAGTesb83mQ/6pZk-uiuBaO-SR1s_WVLIQ/view?embed",
//   },
//   {
//     name: "DSPN FastAPI Demo",
//     icon: "devicon:fastapi",
//     role: "Experiment V",
//     modal: false,
//     href: "https://frontend-907227041190.us-central1.run.app/",
//   },
//   {
//     name: "DSPN Supabase RAG",
//     icon: "devicon:supabase",
//     role: "Experiment VI",
//     modal: false,
//     href: "https://frontend-app-1088267842930.us-central1.run.app/landlorddemo",
//   },
//   {
//     name: "Music Project",
//     icon: "logos:soundcloud",
//     role: "HolyTrap Graph",
//     modal: false,
//     href: "https://holytraparchives-936584648501.us-central1.run.app/",
//   },
//   {
//     name: "Knowledge Graph",
//     icon: "solar:info-circle-bold",
//     role: "Obsidian Graph",
//     modal: false,
//     href: "https://publish.obsidian.md/malcolm-decuire",
//   },
// ];

// export default function PortfolioAppSection() {
//   return (
//     <section className="flex max-w-6xl flex-col items-center py-24">
//       <h1 className="text-4xl font-semibold mb-10 text-center">Portfolio Experiments</h1>
//       <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//         {portfolioItems.map((item, index) => (
//           <TeamMemberCard
//             key={index}
//             name={item.name}
//             avatar=""
//             role={item.role}
//             social={{ twitter: "", linkedin: "" }}
//           >
//             <div className="mt-4 flex justify-center">
//               {item.modal ? (
//                 <PortfolioModal
//                   title={item.name}
//                   iframeSrc={item.iframeSrc!}
//                   icon={item.icon}
//                 />
//               ) : (
//                 <Button
//                   as="a"
//                   href={item.href}
//                   target="_blank"
//                   isIconOnly
//                   variant="ghost"
//                   aria-label={item.name}
//                 >
//                   <Icon icon={item.icon} width={24} />
//                 </Button>
//               )}
//             </div>
//           </TeamMemberCard>
//         ))}
//       </div>
//     </section>
//   );
// }
///////////////////////////////
//////////////////////////////
///////////////////////////////
//// 20250701 UPDATE FOR PUBLIC REPO -FUNCTIONAL

"use client";

import TeamMemberCard from "./portfolio-card";
import PortfolioModal from "./PortfolioModal";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

const portfolioItems = [
  {
    name: "DSPN AI DEMO",
    icon: "devicon:supabase",
    role: "Experiment VI",
    modal: false,
    href: "https://frontend-app-1088267842930.us-central1.run.app/landlorddemo",
  },
  {
    name: "DSPN RE DEMO",
    icon: "devicon:fastapi",
    role: "Experiment V",
    modal: false,
    href: "https://frontend-907227041190.us-central1.run.app/",
  },
  {
    name: "Investment Demo",
    icon: "skill-icons:typescript",
    role: "Experiment IV",
    modal: true,
    iframeSrc: "/portfolio/investment-calculator",
  },
  {
    name: "Affordability Demo",
    icon: "skill-icons:typescript",
    role: "Experiment III",
    modal: true,
    iframeSrc: "/portfolio/rent-calculator",
  },
  {
    name: "PyPortfolioOpt Demo",
    icon: "devicon:python",
    role: "Experiment II",
    modal: true,
    iframeSrc: "https://decuresolutions-pyportfolio.streamlit.app/?embed=true",
  },
  {
    name: "Finance Demo",
    icon: "devicon:python",
    role: "Experiment I",
    modal: true,
    iframeSrc: "https://decuresolutions-app-combo.streamlit.app/?embed=true",
  },
  {
    name: "SE Overview",
    icon: "fa6-solid:file-invoice-dollar",
    role: "SE Info",
    modal: true,
    iframeSrc: "https://www.canva.com/design/DAGJ3aI5SdE/9mxy3z-gtlTynp5FqrXEag/view?embed",
  },
  {
    name: "Portfolio Overview",
    icon: "wpf:stack-of-photos",
    role: "DecureLabs Info",
    modal: true,
    iframeSrc: "https://www.canva.com/design/DAGTesb83mQ/6pZk-uiuBaO-SR1s_WVLIQ/view?embed",
  },
  {
    name: "Music Project",
    icon: "logos:soundcloud",
    role: "HolyTrap Graph",
    modal: false,
    href: "https://holytraparchives-936584648501.us-central1.run.app/",
  },
  {
    name: "Reading Project",
    icon: "gis:network",
    role: "Obsidian Graph",
    modal: false,
    href: "https://publish.obsidian.md/malcolm-decuire",
  },
];

export default function PortfolioAppSection() {
  return (
    <section className="flex max-w-6xl flex-col items-center py-24">
      <h1 className="text-4xl font-semibold mb-10 text-center">Demo Portfolio</h1>
      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {portfolioItems.map((item, index) => (
          <TeamMemberCard
            key={index}
            name={item.name}
            role={item.role}
            social={{ twitter: "", linkedin: "" }}
          >
            <div className="mt-4 flex justify-center">
              {item.modal ? (
                <PortfolioModal
                  title={item.name}
                  iframeSrc={item.iframeSrc!}
                  icon={item.icon}
                />
              ) : (
                <Button
                  as="a"
                  href={item.href}
                  target="_blank"
                  isIconOnly
                  variant="ghost"
                  aria-label={item.name}
                >
                  <Icon icon={item.icon} width={24} />
                </Button>
              )}
            </div>
          </TeamMemberCard>
        ))}

      </div>
    </section>
  );
}
