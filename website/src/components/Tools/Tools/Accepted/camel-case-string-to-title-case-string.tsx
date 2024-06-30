import { CamelCaseStringToTitleCaseString as CamelCaseStringToTitleCaseStringFn } from "codinasion";
import type { ToolPropsType } from "@/types";
import ToolComponent from "../../tool-component";

export function CamelCaseStringToTitleCaseStringComponent(
  props: ToolPropsType,
): JSX.Element {
  const { input1Value, setOutputValue } = props;
  return (
    <ToolComponent
      {...props}
      action={{
        label: "Convert",
        onClick: (e: React.MouseEvent<HTMLButtonElement>): void => {
          e.preventDefault();
          // eslint-disable-next-line no-unused-vars
          (setOutputValue as (value: unknown) => void)(
            CamelCaseStringToTitleCaseStringFn(String(input1Value)),
          );
        },
      }}
      inputs={[
        {
          label: "Camel Case String",
        },
      ]}
      output={{
        label: "Title Case String",
      }}
    />
  );
}
