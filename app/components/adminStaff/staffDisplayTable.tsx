import ButtonAccept from "@/app/components_global/buttons/ButtonAccept";
import ButtonNeutral from "@/app/components_global/buttons/ButtonNeutral";
import Link from "next/link";

const getPositions = async function () {
  try {
    const res = await fetch("http://localhost:3000/api/position", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export default async function StaffDisplayTable() {
  const { positions } = await getPositions();

  return (
    <>
      {positions.map((t: any) => (
        <table
          key={t._id}
          className="text-white w-full text-right self-center  border-spacing-y-8"
        >
          <tbody>
            <tr className="border-b border-white">
              <th>Staff Position ({t.position})</th>
              <th>Employee Name</th>
              <th>Currently Working</th>
              <th>
                <Link href={`/adminPanel/staffAdmin/${t.position}`} passHref>
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
                <Link href={`/adminPanel/staffAdmin/${t._id}`}>
                  <ButtonNeutral className="border-none rounded-none">
                    Edit
                  </ButtonNeutral>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      ))}
    </>
  );
}
