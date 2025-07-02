// 20250701 UPDATE FOR PUBLIC REPO -LEGACY CODE | -FUNCTIONAL
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@heroui/react";

// Define props interface
interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Context About Me</ModalHeader>
            <ModalBody>
              <p>
              Solutions & Sales team trusts me because I'm a curious self-starter with a track record of high performance in a GTM environment with technical capabilities.🤝 
              <br></br>
              <br></br>I have led and supported teams that successfully sold Fortune 500 data privacy technology, LLM, and other AI/ML offerings with documented ROI. 
              <br></br>
              <br></br>
              <p>
              I have a proven track record of supporting financial analysis of +$50M in loans and 
              helping secure more than +$10M in partnership commitments 
              <br></br>across 10 years of customer-obsessed, revenue-focused go-to-market execution. 
              </p>
              <br></br>My consistent focus on team leadership and collaboration has driven me to deliver innovative, large-scale solutions across multiple industries.
              <br></br>
              </p>
              <p>
              </p>
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

export default AboutModal;
