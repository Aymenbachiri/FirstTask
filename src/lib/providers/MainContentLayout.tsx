export async function MainContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{ width: "83%" }}
      className="pb-[1.5rem] flex h-full pr-[20rem]"
    >
      {children}
    </div>
  );
}
