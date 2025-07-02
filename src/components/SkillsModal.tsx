import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Listbox,
  ListboxItem,
} from "@heroui/react";
import { Icon } from "@iconify/react";

// Define props interface
interface SkillsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const techStack = [
  { name: "Snowflake", icon: "logos:snowflake-icon" },
  { name: "BigQuery", icon: "simple-icons:googlebigquery" },
  { name: "AWS Athena", icon: "logos:aws-athena" },
  { name: "Python", icon: "devicon:python" },
  { name: "Scikit-Learn", icon: "devicon:scikitlearn" },
  { name: "NumPy", icon: "logos:numpy" },
  { name: "Pandas", icon: "devicon:pandas-wordmark" },
  { name: "PySpark", icon: "logos:apache-spark" },
  { name: "TypeScript", icon: "devicon:typescript" },
  { name: "Next.js", icon: "devicon:nextjs" },
  { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
  { name: "LiveRamp", icon: "cib:google-ads" },
  { name: "TTD & Xandr", icon: "logos:google-adsense" },
  { name: "AWS", icon: "lineicons:aws" },
  { name: "GCP", icon: "logos:google-cloud" },
  { name: "GitHub", icon: "uiw:github" },
  { name: "Ollama & Private GPT", icon: "simple-icons:ollama" },
  { name: "Jira", icon: "devicon:jira-wordmark" },
  { name: "Databricks", icon: "tabler:brand-databricks" },
  { name: "Docker", icon: "devicon:docker-wordmark" },
];

const midIndex = Math.ceil(techStack.length / 2);
const firstColumn = techStack.slice(0, midIndex);
const secondColumn = techStack.slice(midIndex);

const SkillsModal: React.FC<SkillsModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Technologies & Tools
            </ModalHeader>
            <ModalBody>
              <div className="grid grid-cols-2 gap-4">
                {/* First Column */}
                <Listbox aria-label="Technical Skills Column 1" variant="flat">
                  {firstColumn.map((tech) => (
                    <ListboxItem
                      key={tech.name}
                      startContent={
                        <Icon icon={tech.icon} className="text-2xl text-default-500 flex-shrink-0" />
                      }
                    >
                      {tech.name}
                    </ListboxItem>
                  ))}
                </Listbox>

                {/* Second Column */}
                <Listbox aria-label="Technical Skills Column 2" variant="flat">
                  {secondColumn.map((tech) => (
                    <ListboxItem
                      key={tech.name}
                      startContent={
                        <Icon icon={tech.icon} className="text-2xl text-default-500 flex-shrink-0" />
                      }
                    >
                      {tech.name}
                    </ListboxItem>
                  ))}
                </Listbox>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onPress={onClose}>
                Back
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default SkillsModal;
