import React, { useState } from "react";
import { useFilter } from "react-aria";
import {
  ComboBox,
  type ComboBoxProps as AriaComboBoxProps,
  composeRenderProps,
  Group,
  type GroupProps,
  type Key,
  LabelContext,
  type ListBoxItemProps,
} from "react-aria-components";
import { type ListData, useListData } from "react-stately";
import { twMerge } from "tailwind-merge";

import { Button } from "./button";
import {
  DescriptionContext,
  DescriptionProvider,
  Input,
  LabeledGroup,
} from "./field";
import { ListBox, ListBoxItem } from "./list-box";
import { Popover } from "./popover";
import { TagGroup, TagList } from "./tag-group";
import { composeTailwindRenderProps, inputFieldStyle } from "./utils";

export type MultiSelectProps<T extends object> = {
  items: T[];
  selectedList: ListData<T>;
  className?: string;
  onItemAdd?: (key: Key) => void;
  onItemRemove?: (key: Key) => void;
  renderEmptyState: (inputValue: string) => React.ReactNode;
  tag: (item: T) => React.ReactNode;
  children: React.ReactNode | ((item: T) => React.ReactNode);
} & Omit<
  AriaComboBoxProps<T>,
  | "children"
  | "validate"
  | "allowsEmptyCollection"
  | "inputValue"
  | "selectedKey"
  | "className"
  | "value"
  | "onSelectionChange"
  | "onInputChange"
>;

export function MultiSelectField({
  children,
  className,
  ...props
}: GroupProps & { children: React.ReactNode }) {
  return (
    <LabeledGroup {...props}>
      <Group className={composeTailwindRenderProps(className, inputFieldStyle)}>
        <DescriptionProvider>{children}</DescriptionProvider>
      </Group>
    </LabeledGroup>
  );
}

export function MultiSelect<
  T extends {
    id: Key;
    textValue: string;
  },
>({
  children,
  items,
  selectedList,
  onItemRemove,
  onItemAdd,
  className,
  name,
  renderEmptyState,
  ...props
}: MultiSelectProps<T>) {
  const baseFilter = useFilter({ sensitivity: "base" });

  const selectedKeys = selectedList.items.map((i) => i.id);

  const filter = React.useCallback(
    (item: T, filterText: string) =>
      !selectedKeys.includes(item.id) &&
      baseFilter.contains(item.textValue, filterText),
    [baseFilter, selectedKeys],
  );

  const availableList = useListData({
    initialItems: items,
    filter,
  });

  const [fieldState, setFieldState] = useState<{
    selectedKey: Key | null;
    inputValue: string;
  }>({
    selectedKey: null,
    inputValue: "",
  });

  const onRemove = React.useCallback(
    (keys: Set<Key>) => {
      const key = keys.values().next().value;
      if (key) {
        selectedList.remove(key);
        setFieldState({
          inputValue: "",
          selectedKey: null,
        });
        onItemRemove?.(key);
      }
    },
    [selectedList, onItemRemove],
  );

  const onSelectionChange = (id: Key | null) => {
    if (!id) {
      return;
    }

    const item = availableList.getItem(id);

    if (!selectedKeys.includes(id)) {
      selectedList.append(item);
      setFieldState({
        inputValue: "",
        selectedKey: id,
      });
      onItemAdd?.(id);
    }

    availableList.setFilterText("");
  };

  const onInputChange = (value: string) => {
    setFieldState((prevState) => ({
      inputValue: value,
      selectedKey: value === "" ? null : prevState.selectedKey,
    }));

    availableList.setFilterText(value);
  };

  const deleteLast = React.useCallback(() => {
    if (selectedList.items.length === 0) {
      return;
    }

    const lastKey = selectedList.items.at(-1);

    if (lastKey) {
      selectedList.remove(lastKey.id);
      onItemRemove?.(lastKey.id);
    }

    setFieldState({
      inputValue: "",
      selectedKey: null,
    });
  }, [selectedList, onItemRemove]);

  const onKeyDownCapture = React.useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Backspace" && fieldState.inputValue === "") {
        deleteLast();
      }
    },
    [deleteLast, fieldState.inputValue],
  );

  const tagGroupId = React.useId();
  const triggerRef = React.useRef<HTMLDivElement | null>(null);

  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    const trigger = triggerRef.current;
    if (!trigger) {
      return;
    }

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setWidth(entry.target.clientWidth);
      }
    });

    observer.observe(trigger);
    return () => {
      observer.unobserve(trigger);
    };
  }, [triggerRef]);

  const triggerButtonRef = React.useRef<HTMLButtonElement | null>(null);

  const labelContext = (React.useContext(LabelContext) ?? {}) as {
    id?: string;
  };
  const descriptionContext = React.useContext(DescriptionContext);

  return (
    <>
      <div
        data-ui="control"
        ref={triggerRef}
        className={twMerge(
          "relative",
          "pe-2",
          "flex min-h-9 w-[350px] flex-row flex-wrap items-center rounded-lg shadow-sm",
          "border has-[input[data-focused=true]]:border-blue-500",
          "has-[input[data-invalid=true][data-focused=true]]:border-blue-500 has-[input[data-invalid=true]]:border-destructive",
          "has-[input[data-focused=true]]:ring-1 has-[input[data-focused=true]]:ring-blue-500",
          className,
        )}
      >
        <TagGroup
          id={tagGroupId}
          aria-labelledby={labelContext.id}
          className="contents"
          onRemove={onRemove}
        >
          <TagList
            items={selectedList.items}
            className={twMerge(
              selectedList.items.length > 0 && "p-1",
              "outline-none",
            )}
          >
            {props.tag}
          </TagList>
        </TagGroup>
        <ComboBox
          {...props}
          allowsEmptyCollection
          className={twMerge("group flex flex-1", className)}
          items={availableList.items}
          selectedKey={fieldState.selectedKey}
          inputValue={fieldState.inputValue}
          onSelectionChange={onSelectionChange}
          onInputChange={onInputChange}
          aria-labelledby={labelContext.id}
        >
          <div className="inline-flex flex-1 flex-wrap items-center gap-1 px-1.5">
            <Input
              className="flex-1 border-0 px-0.5 py-0 shadow-none outline-0 focus:ring-0"
              onBlur={() => {
                setFieldState({
                  inputValue: "",
                  selectedKey: null,
                });
                availableList.setFilterText("");
              }}
              aria-describedby={[
                tagGroupId,
                descriptionContext?.["aria-describedby"] ?? "",
              ].join(" ")}
              onKeyDownCapture={onKeyDownCapture}
            />

            <div className="sr-only" aria-hidden>
              <Button variant="plain" ref={triggerButtonRef}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-4"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </Button>
            </div>
          </div>
          <Popover
            style={{ width: `${width}px` }}
            triggerRef={triggerRef}
            className="max-w-none duration-0"
          >
            <ListBox<T>
              /* @ts-expect-error -- input value cannot be bigint */
              renderEmptyState={async () =>
                renderEmptyState(fieldState.inputValue)
              }
              selectionMode="multiple"
              className="flex max-h-[inherit] flex-col gap-1.5 overflow-auto p-1.5 outline-none has-[header]:pt-0 sm:gap-0"
            >
              {children}
            </ListBox>
          </Popover>
        </ComboBox>
        <Button variant="plain" asChild>
          <div
            className="top-50 absolute end-0 me-1 size-6 rounded p-0.5"
            aria-hidden
          >
            {/* React Aria Button does not allow tabIndex */}
            <button
              type="button"
              onClick={() => triggerButtonRef.current?.click()}
              tabIndex={-1}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4 opacity-75"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
          </div>
        </Button>
      </div>

      {name && (
        <input hidden name={name} value={selectedKeys.join(",")} readOnly />
      )}
    </>
  );
}

export function MultiSelectItem(props: ListBoxItemProps) {
  const { className, children } = props;

  return (
    <ListBoxItem
      {...props}
      className={composeRenderProps(
        className,
        (renderClassName, { isFocused }) =>
          twMerge([
            "rounded-lg p-1.5 text-base/6 outline-0 focus-visible:outline-0 sm:text-sm/6",
            isFocused && "bg-zinc-100",
            renderClassName,
          ]),
      )}
    >
      {children}
    </ListBoxItem>
  );
}