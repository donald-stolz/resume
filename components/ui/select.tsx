"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface SelectProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  children: React.ReactNode;
  className?: string;
}

const Select = React.forwardRef<HTMLDivElement, SelectProps>(
  ({ className, value, onChange, placeholder, children, ...props }, ref) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(value);
    const selectRef = React.useRef<HTMLDivElement>(null);

    React.useImperativeHandle(ref, () => selectRef.current as HTMLDivElement);

    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          selectRef.current &&
          !selectRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (value: string) => {
      setSelectedValue(value);
      onChange?.(value);
      setIsOpen(false);
    };

    return (
      <div
        ref={selectRef}
        className={cn("relative w-full", className)}
        {...props}
      >
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            !selectedValue && "text-muted-foreground"
          )}
        >
          <span>{selectedValue || placeholder}</span>
          <ChevronDown
            className={cn(
              "h-4 w-4 opacity-50 transition-transform",
              isOpen && "rotate-180"
            )}
          />
        </button>
        {isOpen && (
          <div className="absolute z-50 mt-1 max-h-[300px] w-full overflow-auto rounded-md border bg-popover text-popover-foreground shadow-md">
            {React.Children.map(children, (child) => {
              if (React.isValidElement(child)) {
                return React.cloneElement(
                  child as React.ReactElement<SelectItemProps>,
                  {
                    onSelect: handleSelect,
                    selected: child.props.value === selectedValue,
                  }
                );
              }
              return child;
            })}
          </div>
        )}
      </div>
    );
  }
);
Select.displayName = "Select";

interface SelectItemProps {
  value: string;
  selected?: boolean;
  onSelect?: (value: string) => void;
  children: React.ReactNode;
  className?: string;
}

const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ className, value, selected, onSelect, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="option"
        aria-selected={selected}
        className={cn(
          "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          selected && "bg-accent text-accent-foreground",
          className
        )}
        onClick={() => onSelect?.(value)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
SelectItem.displayName = "SelectItem";

export { Select, SelectItem };
