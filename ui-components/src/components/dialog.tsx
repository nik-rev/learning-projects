import React from "react";
import {
  Dialog as AriaDialog,
  type DialogProps as AriaDialogProps,
  OverlayTriggerStateContext,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

import { Button, type ButtonWithoutAsChildProps } from "./button";
import { Heading, type HeadingProps } from "./heading";
import { XIcon } from "./icons";
import { Text } from "./text";
import { composeTailwindRenderProps } from "./utils";

export { DialogTrigger } from "react-aria-components";

export type DialogProps = {
  alert?: boolean;
} & AriaDialogProps;

export function Dialog({ role, alert = false, ...props }: DialogProps) {
  return (
    <AriaDialog
      {...props}
      role={(role ?? alert) ? "alertdialog" : "dialog"}
      className={twMerge(
        "relative flex max-h-[inherit] flex-col overflow-hidden outline-none",
        props.className,
      )}
    />
  );
}

export const DialogTitle = React.forwardRef<
  HTMLHeadingElement,
  DialogHeaderProps
>(({ level = 2, ...props }, ref) => (
  <Heading {...props} ref={ref} slot="title" level={level} />
));

DialogTitle.displayName = "DialogTitle";

type DialogHeaderProps = HeadingProps;

export function DialogHeader({ className, ...props }: DialogHeaderProps) {
  const headerRef = React.useRef<HTMLHeadingElement>(null);

  React.useEffect(() => {
    const header = headerRef.current;
    if (!header) {
      return;
    }

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        header.parentElement?.style.setProperty(
          "--dialog-header-height",
          `${entry.target.clientHeight}px`,
        );
      }
    });

    observer.observe(header);
    return () => {
      observer.unobserve(header);
    };
  }, []);

  return typeof props.children === "string" ? (
    <DialogTitle
      {...props}
      ref={headerRef}
      className={twMerge("px-6 pb-2 pt-6", className)}
    />
  ) : (
    <div
      ref={headerRef}
      className={twMerge(
        "relative flex w-full items-center px-6 pb-2 pt-6",
        className,
      )}
      {...props}
    >
      {props.children}
    </div>
  );
}

export function DialogBody({
  className,
  children,
  ...props
}: React.JSX.IntrinsicElements["div"]) {
  return (
    <div
      {...props}
      className={twMerge(
        "flex max-h-[calc(var(--visual-viewport-height)-var(--visual-viewport-vertical-padding)-var(--dialog-header-height,0px)-var(--dialog-footer-height,0px))] flex-1 flex-col gap-2 overflow-auto px-6",
        className,
      )}
    >
      {typeof children === "string" ? <Text>{children}</Text> : children}
    </div>
  );
}

export function DialogFooter({
  className,
  ...props
}: React.JSX.IntrinsicElements["div"]) {
  const footerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const footer = footerRef.current;

    if (!footer) {
      return;
    }

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        footer.parentElement?.style.setProperty(
          "--dialog-footer-height",
          `${entry.target.clientHeight}px`,
        );
      }
    });

    observer.observe(footer);
    return () => {
      observer.unobserve(footer);
    };
  }, []);

  return (
    <div
      {...props}
      ref={footerRef}
      className={twMerge(
        "mt-auto flex flex-col-reverse justify-end gap-3 p-6 sm:flex-row",
        className,
      )}
    />
  );
}

export function DialogCloseButton({
  onPress,
  variant = "plain",
  ...props
}: ButtonWithoutAsChildProps) {
  const state = React.useContext(OverlayTriggerStateContext);

  if (props.children) {
    return (
      <Button
        {...props}
        variant={variant}
        onPress={(e) => {
          state.close();
          onPress?.(e);
        }}
      />
    );
  }

  const {
    className,
    size = "lg",
    "aria-label": ariaLabel,
    isIconOnly = true,
    ...restProps
  } = props;

  return (
    <Button
      {...restProps}
      isIconOnly={isIconOnly}
      variant={variant}
      size={size}
      className={composeTailwindRenderProps(className, [
        "absolute end-3 top-3 p-1.5 text-muted/75 hover:text-foreground",
      ])}
      onPress={(e) => {
        state.close();
        onPress?.(e);
      }}
    >
      <XIcon aria-label={ariaLabel ?? "Close"} />
    </Button>
  );
}
