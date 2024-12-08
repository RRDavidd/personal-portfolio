import Sidecats from "./_components/cats/Sidecats";
import Leftsticky from "./_components/layout/Leftsticky";
import Rightcontent from "./_components/layout/Rightcontent";
import RandomCats from "./_components/cats/RandomCats";

export default function Home() {
  return (
    <>
      <main className="max-w-screen-xl p-5 mx-auto xl:p-0 lg:p-5">
        <Sidecats />
        {/* <RandomCats /> */}
        <div className="flex flex-col justify-between gap-5 md:flex-row ">
          <Leftsticky />
          <Rightcontent />
        </div>
      </main>
    </>
  );
}
