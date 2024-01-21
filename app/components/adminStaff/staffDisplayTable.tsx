import ButtonAccept from "@/app/components_global/buttons/ButtonAccept";
import ButtonNeutral from "@/app/components_global/buttons/ButtonNeutral";
import Link from "next/link";

export default function StaffDisplayTable() {
  return (
    <>
      <table className="text-white w-full text-right self-center  border-spacing-y-8">
        <tr className="border-b border-white">
          <th>Staff Position ()</th>
          <th>Employee Name</th>
          <th>Currently Working</th>
          <th>
            <Link href={"/adminPanel/staffAdmin/1"} passHref>
              <ButtonAccept className="border-none rounded-none shadow-none">
                Add Employee
              </ButtonAccept>
            </Link>
          </th>
        </tr>
        <tr className="border-b border-blackBody bg-white text-blackBody">
          <td>Manager</td>
          <td>Name Lastname</td>
          <td>Yes</td>
          <td className=" text-end">
            <ButtonNeutral className="border-none rounded-none">
              Edit
            </ButtonNeutral>
          </td>
        </tr>
      </table>
    </>
  );
}
