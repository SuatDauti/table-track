import Link from "next/link";
import ButtonAction from "../components_global/buttons/ButtonAction";
import ButtonAccept from "../components_global/buttons/ButtonAccept";

export default function AdminLiginPage() {
  return (
    <div>
      {/* Back Button */}
      <div className="absolute left-10 top-10">
        <Link href={"/"} passHref>
          <ButtonAction>Back</ButtonAction>
        </Link>
      </div>
      <div className="flex h-screen justify-center items-center">
        <form className="flex h-fit flex-col gap-4">
          <input
            type="text"
            placeholder="username"
            className=" px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-highlight"
            required
          ></input>
          <input
            type="password"
            placeholder="password"
            className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-highlight"
            required
          ></input>
          <ButtonAccept className="w-full" type="submit">
            Submit
          </ButtonAccept>
        </form>
      </div>
    </div>
  );
}
