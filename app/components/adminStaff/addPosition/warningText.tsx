export default function WarningText() {
  return (
    <>
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-white text-2xl">
          Changes you make won’t take place until you press save
        </h1>
        <p className="text-white">Position</p>
      </div>
    </>
  );
}
