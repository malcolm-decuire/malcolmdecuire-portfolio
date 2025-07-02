// 20250701 UPDATE FOR PUBLIC REPO -SNIPPET WORKS
import React from "react";
import { Accordion, AccordionItem, Divider, Button } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import dynamic from "next/dynamic";

const RentCalculator = dynamic(() => import("./rent-calculator/page"), {
  ssr: false, // Disable Server Side Rendering for this component
  loading: () => <p>Loading Rent Calculator...</p>, // Optional loading indicator
});

const InvestmentCalculator = dynamic(() => import("./investment-calculator/page"), {
  ssr: false, // Disable Server Side Rendering for this component
  loading: () => <p>Loading Investment Calculator...</p>, // Optional loading indicator
});

  const roadmapContentC = [
    "⛔️ Upcoming features",
    "📍 Update rent & investment calculator styles",
    "📍 Update the Obsidian Graph with more info",
    "📍 Update journey with new experiences",
  ];


  const roadmapContentA = [
    "⛔️ Upcoming features",
    "📍 Update DSPN Demo with Ollama/Private GPT capabilities ",
    "📍 Update DSPN PyPort Platform securities & analysis coverage",
    "📍 Update DSPN PySpark Platform property analysis coverage",
    "📍 Update DSPN Activation for interoperable DCR use-cases",
  ];

  const roadmapContentD = [
    "⛔️ Upcoming features",
    "📍 Update PropNet Demo Supabase Demo w/ filters ",
    "📍 Update PropNet Demo Agentic Demo capabilities",
    "📍 Update PropNet Demo REIT Demo content with more securities to view",
  ];



  const roadmapContentB = [
    "⛔️ Upcoming features",
    "📍 Update Producer Graph to include more artists ",
    "📍 Update Graph functionality by linking all artists active channels/distribution",
  ];

export default function App() {

  // const renderTitleWithIcon = (icon: string, title: string, withButton = false) => (
  //   <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
  //     <div style={{ display: "flex", alignItems: "center" }}>
  //       <Icon icon={icon} style={{ marginRight: "8px" }} />
  //       {title}
  //     </div>
  //     {withButton && (
  //       <a
  //         href=" https://publish.obsidian.md/malcolm-decuire"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //         style={{ textDecoration: "none" }}
  //       >
  //         <Button style={{ display: "flex", alignItems: "center" }}>
  //           <Icon icon="solar:info-circle-bold" style={{ marginRight: "8px" }} />
  //           Knowledge Graph
  //         </Button>
  //       </a>
  //     )}
  //   </div>
  // );



  // const renderTitleWithIconA = (icon: string, title: string, withButton = false) => (
  //   <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
  //     <div style={{ display: "flex", alignItems: "center" }}>
  //       <Icon icon={icon} style={{ marginRight: "8px" }} />
  //       {title}
  //     </div>
  //     {withButton && (
  //       <a
  //         href=" https://holytraparchives-936584648501.us-central1.run.app/"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //         style={{ textDecoration: "none" }}
  //       >
  //         <Button style={{ display: "flex", alignItems: "center" }}>
  //           <Icon icon="logos:soundcloud" style={{ marginRight: "8px" }} />
  //           Producer Graph
  //         </Button>
  //       </a>
  //     )}
  //   </div>
  // );


  // const renderTitleWithIconB = (icon: string, title: string, withButton = false) => (
  //   <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
  //     <div style={{ display: "flex", alignItems: "center" }}>
  //       <Icon icon={icon} style={{ marginRight: "8px" }} />
  //       {title}
  //     </div>
  //     {withButton && (
  //       <a
  //         href="https://frontend-907227041190.us-central1.run.app/"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //         style={{ textDecoration: "none" }}
  //       >
  //         <Button style={{ display: "flex", alignItems: "center" }}>
  //           <Icon icon="devicon:fastapi" style={{ marginRight: "8px" }} />
  //           DSPN Demo
  //         </Button>
  //       </a>
  //     )}
  //   </div>
  // );


  // const renderTitleWithIconC = (icon: string, title: string, withButton = false) => (
  //   <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
  //     <div style={{ display: "flex", alignItems: "center" }}>
  //       <Icon icon={icon} style={{ marginRight: "8px" }} />
  //       {title}
  //     </div>
  //     {withButton && (
  //       <a
  //         href="https://frontend-app-1088267842930.us-central1.run.app/landlorddemo"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //         style={{ textDecoration: "none" }}
  //       >
  //         <Button style={{ display: "flex", alignItems: "center" }}>
  //           <Icon icon="devicon:supabase" style={{ marginRight: "8px" }} />
  //           RAG Demo
  //         </Button>
  //       </a>
  //     )}
  //   </div>
  // );
  

  const renderTitleWithIcon = (icon: string, title: string, withButton = false) => (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Icon icon={icon} />
        <span>{title}</span>
      </div>
      {withButton && (
        <Button
          as="a"
          href="https://publish.obsidian.md/malcolm-decuire"
          target="_blank"
          rel="noopener noreferrer"
          size="sm"
        >
          <Icon icon="solar:info-circle-bold" style={{ marginRight: "6px" }} />
          Knowledge Graph
        </Button>
      )}
    </div>
  );
  
  const renderTitleWithIconA = (icon: string, title: string, withButton = false) => (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Icon icon={icon} />
        <span>{title}</span>
      </div>
      {withButton && (
        <Button
          as="a"
          href="https://holytraparchives-936584648501.us-central1.run.app/"
          target="_blank"
          rel="noopener noreferrer"
          size="sm"
        >
          <Icon icon="logos:soundcloud" style={{ marginRight: "6px" }} />
          Producer Graph
        </Button>
      )}
    </div>
  );
  
  const renderTitleWithIconB = (icon: string, title: string, withButton = false) => (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Icon icon={icon} />
        <span>{title}</span>
      </div>
      {withButton && (
        <Button
          as="a"
          href="https://frontend-907227041190.us-central1.run.app/"
          target="_blank"
          rel="noopener noreferrer"
          size="sm"
        >
          <Icon icon="devicon:fastapi" style={{ marginRight: "6px" }} />
          DSPN Demo
        </Button>
      )}
    </div>
  );
  
  const renderTitleWithIconC = (icon: string, title: string, withButton = false) => (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Icon icon={icon} />
        <span>{title}</span>
      </div>
      {withButton && (
        <Button
          as="a"
          href="https://frontend-app-1088267842930.us-central1.run.app/landlorddemo"
          target="_blank"
          rel="noopener noreferrer"
          size="sm"
        >
          <Icon icon="devicon:supabase" style={{ marginRight: "6px" }} />
          RAG Demo
        </Button>
      )}
    </div>
  );
  

  const renderContentAsList = (content: string[]) => (
    <ul>
      {content.map((item, index) => (
        <li key={index} style={{ marginBottom: "8px" }}>
          {item}
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <Accordion>
      {/* <Accordion defaultExpandedKeys={["Sales Engineer Experience"]}> */}
      <AccordionItem
          key="Supabase"
          aria-label="Roadmap"
          title={renderTitleWithIconC("devicon:googlecloud", "Experiment VI: AI APP ", true)}
        >
          {renderContentAsList(roadmapContentD)}
        </AccordionItem>
      <AccordionItem
          key="FastAPI"
          aria-label="Roadmap"
          title={renderTitleWithIconB("devicon:googlecloud", "Experiment V: FastAPI App ", true)}
        >
          {renderContentAsList(roadmapContentA)}
        </AccordionItem>
        <AccordionItem
          key="Experiment IV: Investment App"
          aria-label="Experiment IV: Investment App"
          title={renderTitleWithIcon("skill-icons:typescript", "Experiment IV: Investment App")}
        >
          <InvestmentCalculator />
        </AccordionItem>
        <AccordionItem
          key="Experiment III: Rent App"
          aria-label="Experiment III: Rent App"
          title={renderTitleWithIcon("skill-icons:typescript", "Experiment III: Rent App")}
        >
          <RentCalculator />
        </AccordionItem>
        <AccordionItem
          key="Experiment II: PyPortfolioOpt Demo"
          aria-label="Experiment II: PyPortfolioOpt Demo"
          title={renderTitleWithIcon("devicon:python", "Experiment II: PyPortfolioOpt Demo")}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "450px",
              boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
              marginTop: "1.6em",
              marginBottom: "0.9em",
              overflow: "hidden",
              borderRadius: "8px",
              willChange: "transform",
            }}
          >
            <iframe
              loading="lazy"
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: "0",
                left: "0",
                border: "none",
              }}
              src="https://decuresolutions-pyportfolio.streamlit.app/?embed=true"
              allowFullScreen
              allow="fullscreen"
            />
          </div>
        </AccordionItem>
        <AccordionItem
          key="Experiment I: Piotroski F-Score Demoo"
          aria-label="Experiment I: Piotroski F-Score Demo"
          title={renderTitleWithIcon("devicon:python", "Experiment I: Piotroski F-Score Demo")}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "450px",
              boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
              marginTop: "1.6em",
              marginBottom: "0.9em",
              overflow: "hidden",
              borderRadius: "8px",
              willChange: "transform",
            }}
          >
            <iframe
              loading="lazy"
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: "0",
                left: "0",
                border: "none",
              }}
              src="https://decuresolutions-app-combo.streamlit.app/?embed=true"
              allowFullScreen
              allow="fullscreen"
            />
          </div>
        </AccordionItem>
        <AccordionItem
          key="Sales Engineer Experience"
          aria-label="Sales Engineer Experience"
          title={renderTitleWithIcon("fa6-solid:file-invoice-dollar", "SE Experience")}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "0",
              paddingTop: "56.25%",
              paddingBottom: "0",
              boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
              marginTop: "1.6em",
              marginBottom: "0.9em",
              overflow: "hidden",
              borderRadius: "8px",
              willChange: "transform",
            }}
          >
            <iframe
              loading="lazy"
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: "0",
                left: "0",
                border: "none",
              }}
              src="https://www.canva.com/design/DAGJ3aI5SdE/9mxy3z-gtlTynp5FqrXEag/view?embed"
              allowFullScreen
              allow="fullscreen"
            />
          </div>
          <a
            href="https://www.canva.com/design/DAGJ3aI5SdE/Lu-gZKqSqd5YLPtWxrx94Q/view?mode=prototype"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume Overview
          </a>
        </AccordionItem>
        <AccordionItem
          key="Decure Labs Portfolio Info"
          aria-label="Decure Labs Portfolio Info"
          title={renderTitleWithIcon("wpf:stack-of-photos", "DecureLabs Portfolio Info")}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "0",
              paddingTop: "56.25%",
              paddingBottom: "0",
              boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
              marginTop: "1.6em",
              marginBottom: "0.9em",
              overflow: "hidden",
              borderRadius: "8px",
              willChange: "transform",
            }}
          >
            <iframe
              loading="lazy"
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: "0",
                left: "0",
                border: "none",
              }}
              src="https://www.canva.com/design/DAGTesb83mQ/6pZk-uiuBaO-SR1s_WVLIQ/view?embed"
              allowFullScreen
              allow="fullscreen"
            />
          </div>
          <a
            href="https://www.canva.com/design/DAGTesb83mQ/Q4FG3hw-Dz3IyOnk90Zmjw/view?utm_content=DAGTesb83mQ&utm_campaign=designshare&utm_medium=link&utm_source=editor"
            target="_blank"
            rel="noopener noreferrer"
          >
            DecureLabs Portfolio Summary 
          </a>
        </AccordionItem>
        <AccordionItem
          key="Music"
          aria-label="Roadmap"
          title={renderTitleWithIconA("icomoon-free:soundcloud2", "Music Project", true)}
        >
          {renderContentAsList(roadmapContentB)}
        </AccordionItem>
        <AccordionItem
          key="Roadmap"
          aria-label="Roadmap"
          title={renderTitleWithIcon("solar:point-on-map-linear", "Portfolio Roadmap", true)}
        >
          {renderContentAsList(roadmapContentC)}
        </AccordionItem>
      
      </Accordion>

      <Divider style={{ padding: "0% 0", marginBottom: "10px" }} />
    </>
  );
}
