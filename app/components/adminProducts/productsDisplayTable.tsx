import ButtonAccept from "@/app/components_global/buttons/ButtonAccept";
import ButtonNeutral from "@/app/components_global/buttons/ButtonNeutral";
import Link from "next/link";

export default function ProductsDisplayTable() {
  return (
    <table className="text-white w-full text-right self-center  border-spacing-y-8 ">
      <tr className="border-b border-white">
        <th>Category</th>
        <th>Product Name</th>
        <th>Product Price</th>
        <th>In Stock</th>
        <th>
          <Link href={"/adminPanel/productsAdmin/1"} passHref>
            <ButtonAccept className="border-none rounded-none shadow-none">
              Add Product
            </ButtonAccept>
          </Link>
        </th>
      </tr>
      <tr className="border-b border-blackBody bg-white text-blackBody">
        <td>Shank</td>
        <td>Product Name</td>
        <td>23.00$</td>
        <td>25</td>
        <td className=" text-end">
          <Link href={"#"}>
            <ButtonNeutral className="border-none rounded-none">
              Edit
            </ButtonNeutral>
          </Link>
        </td>
      </tr>
    </table>
  );
}
