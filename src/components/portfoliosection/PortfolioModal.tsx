
"use client";

import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Button,
} from "@heroui/react";
import { Icon } from "@iconify/react";

type PortfolioModalProps = {
  title: string;
  iframeSrc: string;
  icon: string;
};

export default function PortfolioModal({ title, iframeSrc, icon }: PortfolioModalProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} isIconOnly aria-label={title} variant="ghost">
        <Icon icon={icon} width={24} />
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="4xl"
        scrollBehavior="inside"
        classNames={{ backdrop: "backdrop-blur-md" }}
      >
        <ModalContent>
          <ModalHeader className="text-xl font-semibold">{title}</ModalHeader>
          <ModalBody>
            <iframe
              src={iframeSrc}
              style={{ width: "100%", height: "500px", border: "none" }}
              loading="lazy"
              allowFullScreen
            />
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onPress={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

