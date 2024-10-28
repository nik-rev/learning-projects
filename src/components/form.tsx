import { Form as RACForm, type FormProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

export function Form(props: FormProps) {
  const { className } = props;

  return (
    <RACForm {...props} className={twMerge("max-w-4xl space-y-6", className)} />
  );
}
