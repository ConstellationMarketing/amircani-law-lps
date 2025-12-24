import * as React from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
  value: string;
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem = ({ title, children, isOpen, onToggle }: AccordionItemProps) => {
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden bg-white">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-heading text-amircani-primary text-lg font-medium">
          {title}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-amircani-secondary transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
          <div className="font-body text-gray-700 text-base leading-relaxed">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

interface AccordionProps {
  children: React.ReactNode;
  type?: "single" | "multiple";
  defaultValue?: string;
}

const Accordion = ({ children, type = "single" }: AccordionProps) => {
  const [openItems, setOpenItems] = React.useState<string[]>([]);

  const handleToggle = (value: string) => {
    if (type === "single") {
      setOpenItems(openItems.includes(value) ? [] : [value]);
    } else {
      setOpenItems(
        openItems.includes(value)
          ? openItems.filter((item) => item !== value)
          : [...openItems, value]
      );
    }
  };

  return (
    <div className="space-y-3">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            ...child.props,
            isOpen: openItems.includes(child.props.value),
            onToggle: () => handleToggle(child.props.value),
          } as any);
        }
        return child;
      })}
    </div>
  );
};

export { Accordion, AccordionItem };
