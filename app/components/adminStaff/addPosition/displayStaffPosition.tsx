import ButtonNeutral from "@/app/components_global/buttons/ButtonNeutral";

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

export default async function DisplayStaffPosition() {
  const { positions } = await getPositions();
  return (
    <>
      <table className="w-[80%] text-white text-center">
        <tbody>
          <tr>
            <th>Position Name</th>
            <th>Employees in this position</th>
            <th></th>
          </tr>
          {positions.map((t: any) => (
            <tr
              key={t._id}
              className="border-b border-blackBody bg-white text-blackBody"
            >
              <td>{t.position}</td>
              <td>31</td>
              <td className="text-end">
                <ButtonNeutral className="rounded-none border-none ">
                  Edit
                </ButtonNeutral>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
