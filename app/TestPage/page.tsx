import ButtonAction from "@/app/components_global/buttons/ButtonAction";
import ButtonAccept from "../components_global/buttons/ButtonAccept";
import ButtonReject from "../components_global/buttons/ButtonReject";
import ButtonNeutral from "../components_global/buttons/ButtonNeutral";
import ButtonDisabeld from "../components_global/buttons/ButtonDisabeld";

export default async function TestPage() {
  return (
    <div className="flex flex-col gap-5 items-center justify-center h-[100vh]">
      <ButtonAction>Click Me</ButtonAction>
      <ButtonAccept>Accept</ButtonAccept>
      <ButtonReject>Reject</ButtonReject>
      <ButtonNeutral>Neutral</ButtonNeutral>
      <ButtonDisabeld>Disabeld</ButtonDisabeld>
    </div>
  );
}
