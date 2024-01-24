import ButtonNeutral from "@/app/components_global/buttons/ButtonNeutral";

export default function DisplayProductsCategory() {
  return (
    <>
      <table className="w-[80%] text-white text-center">
        <thead>
          <tr>
            <th>Category Name</th>
            <th>Items In Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-blackBody bg-white text-blackBody">
            <td>Cold Drinks</td>
            <td>12</td>
            <td className="text-end">
              <ButtonNeutral className="rounded-none border-none ">
                Edit
              </ButtonNeutral>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
