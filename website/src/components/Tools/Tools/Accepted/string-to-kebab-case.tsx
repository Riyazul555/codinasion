import { StringToKebabCase as StringToKebabCaseFn } from "codinasion";
import type { ToolPropsType } from "@/types";
import ToolComponent from "../../tool-component";

export function StringToKebabCaseComponent(props: ToolPropsType): JSX.Element {
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
            StringToKebabCaseFn(String(input1Value)),
          );
        },
      }}
      inputs={[
        {
          label: "String",
        },
      ]}
      output={{
        label: "KebabCase String",
      }}
    />
  );
}
