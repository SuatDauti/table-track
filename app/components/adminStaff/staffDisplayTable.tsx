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

const getStaff = async function () {
  try {
    const res = await fetch("http://localhost:3000/api/staff", {
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
  const { staff } = await getStaff();

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

            {staff
              .filter((s: any) => s.position === t.position)
              .map((s: any) => (
                <tr
                  key={s._id}
                  className="border-b border-blackBody bg-white text-blackBody"
                >
                  <td>{s.position}</td>
                  <td>
                    {s.name} {s.LastName}
                  </td>
                  <td>{s.IsEmployeed == true ? "yes" : "no"}</td>
                  <td className=" text-end">
                    <Link href={`/adminPanel/staffAdmin/${s._id}`}>
                      <ButtonNeutral className="border-none rounded-none">
                        Edit
                      </ButtonNeutral>
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      ))}
    </>
  );
}
