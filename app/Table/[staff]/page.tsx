export default function Staff({ params }: { params: { staff: string } }) {
  return (
    <>
      <h1>Test {params.staff}</h1>
    </>
  );
}
