export default async function Page<NextPage>() {
  return (
    <div className="full overflow-y-scroll">
      {Array(100)
        .fill("")
        .map((_, i) => (
          <p key={i} className="">
            hello
          </p>
        ))}
    </div>
  );
}
