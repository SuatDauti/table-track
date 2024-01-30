"use client";

import ButtonReject from "@/app/components_global/buttons/ButtonReject";

export default function RemoveTableButton() {
  const removeTable = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      try {
        const res = await fetch(`http://localhost:3000/api/addTable`, {
          method: "DELETE",
        });

        if (res.ok) {
          alert("Last Table has been deleted succesfully");
          window.location.reload();
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <>
      <ButtonReject
        onClick={removeTable}
        className="border-none w-full rounded-none"
      >
        Remove 1 Table
      </ButtonReject>
    </>
  );
}
