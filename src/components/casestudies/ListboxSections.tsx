import { Listbox, ListboxItem, ListboxSection, cn } from "@heroui/react";
import { Icon } from "@iconify/react";

const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";

interface ListboxSectionItem {
    key: string;
    label: string;
    description: string;
    icon: string;
    color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  }
  

interface ListboxSectionsProps {
  sections: {
    title: string;
    showDivider?: boolean;
    items: ListboxSectionItem[];
  }[];
}

const ListboxSections = ({ sections }: ListboxSectionsProps) => (
  <Listbox aria-label="Listbox menu with sections" variant="flat">
    {sections.map(({ title, showDivider, items }, idx) => (
      <ListboxSection key={idx} title={title} showDivider={showDivider}>
        {items.map(({ key, label, description, icon, color }) => (
          <ListboxItem
            key={key}
            description={description}
            className={color === "danger" ? "text-danger" : ""}
            color={color}
            startContent={
              <Icon
                icon={icon}
                className={cn(iconClasses, color === "danger" && "text-danger")}
              />
            }
          >
            {label}
          </ListboxItem>
        ))}
      </ListboxSection>
    ))}
  </Listbox>
);

export default ListboxSections;
