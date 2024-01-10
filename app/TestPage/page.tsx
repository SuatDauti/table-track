import ButtonScaffholding from "@/Scaffholding/buttonScaffholding";
import ButtonAction from "@/app/components_global/buttons/ButtonAction";

export default function TestPage() {
  return (
    <div className="flex flex-col gap-5">
      <ButtonAction>Click Me</ButtonAction>
      <ButtonScaffholding>Test</ButtonScaffholding>
    </div>
  );
}
