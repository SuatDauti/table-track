import ButtonAccept from "../components_global/buttons/ButtonAccept";
import ButtonDisabeld from "../components_global/buttons/ButtonDisabeld";
import ButtonReject from "../components_global/buttons/ButtonDisabeld";

export default function Kitchen() {
  return (
    <div className="w-fit border-2 border-white">
      <div className="text-white flex w-[450px] justify-between p-5">
        {/* Order Div */}
        <div>
          {/* Product in queue */}
          <div>
            <p>Order in queue</p>
          </div>

          {/* Konobar Name */}
          <div>
            <p>Konobar Name</p>
          </div>

          {/* Konobar Name */}
          <div>
            <p>Time Of Creation</p>
          </div>
        </div>

        {/* Quick Listing */}
        <div>
          <p>Product Name</p>
          <p>3</p>
          <p>Specification</p>
        </div>
      </div>

      {/* Buttons */}
      <div>
        <ButtonDisabeld>View</ButtonDisabeld>
        <ButtonAccept>Finish</ButtonAccept>
        <ButtonReject>Del</ButtonReject>
      </div>
    </div>
  );
}
