import ButtonAccept from "@/app/components_global/buttons/ButtonAccept";

export default function StaffCompleteForm() {
  return (
    <>
      <div className="border-2 border-white flex flex-col justify-between   bg-[#141414] p-2 min-h-[80vh] w-1/3">
        <div className="border-2 border-white flex flex-col justify-between text-white  bg-[#141414] p-2 min-h-[80vh] w-full ">
          {/* Tab+Products wrapper */}
          <div>
            {/* Tab Title */}
            <h1 className="text-center py-4">Tab</h1>

            <div className="overflow-y-scroll h-[60vh]">
              {/* Product */}
              <div className="grid grid-cols-3 place-items-center border-y-2 py-2">
                <p>Product Name</p>
                <p>2</p>
                <p>100</p>
              </div>
            </div>
          </div>

          {/* Total Price */}
          <div className="flex justify-between border-t-2 py-2 text-lg text-greenProd">
            <p>Total:</p>
            <p>100 $</p>
          </div>
        </div>
        <ButtonAccept>Save</ButtonAccept>
      </div>
    </>
  );
}
