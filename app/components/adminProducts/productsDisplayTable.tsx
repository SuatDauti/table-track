import ButtonAccept from "@/app/components_global/buttons/ButtonAccept";
import ButtonNeutral from "@/app/components_global/buttons/ButtonNeutral";
import Link from "next/link";

const getCategory = async function () {
  try {
    const res = await fetch("http://localhost:3000/api/category", {
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

const getProduct = async function () {
  try {
    const res = await fetch("http://localhost:3000/api/product", {
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

export default async function ProductsDisplayTable() {
  const { category } = await getCategory();
  const { product } = await getProduct();
  return (
    <>
      {category.map((t: any) => (
        <table className="text-white w-full text-center self-center  border-spacing-y-8 table-fixed">
          <thead>
            <tr className="border-b border-white">
              <th>{t.category}</th>
              <th>Product Name</th>
              <th>Product Price</th>
              <th>In Stock</th>
              <th className="text-end">
                <Link href={`/adminPanel/productsAdmin/${t.category}`} passHref>
                  <ButtonAccept className="border-none rounded-none shadow-none">
                    Add Product
                  </ButtonAccept>
                </Link>
              </th>
            </tr>
          </thead>
          {product
            .filter((p: any) => p.category === t.category)
            .map((p: any) => (
              <tbody>
                <tr className="border-b border-blackBody bg-white text-blackBody">
                  <td>{p.sentTo}</td>
                  <td>{p.name}</td>
                  <td>{p.price} $</td>
                  <td>{p.inStorage}</td>
                  <td className=" text-end">
                    <Link href={`/adminPanel/productsAdmin/${p._id}`}>
                      <ButtonNeutral className="border-none rounded-none">
                        Edit
                      </ButtonNeutral>
                    </Link>
                  </td>
                </tr>
              </tbody>
            ))}
        </table>
      ))}
    </>
  );
}
