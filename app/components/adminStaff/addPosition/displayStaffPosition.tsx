import ButtonNeutral from "@/app/components_global/buttons/ButtonNeutral";

export default function DisplayStaffPosition() {
  return (
    <>
      <table className="w-[80%] text-white text-center">
        <tbody>
          <tr>
            <th>Position Name</th>
            <th>Employees in this position</th>
            <th></th>
          </tr>
          <tr className="border-b border-blackBody bg-white text-blackBody">
            <td>Manager</td>
            <td>32</td>
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
