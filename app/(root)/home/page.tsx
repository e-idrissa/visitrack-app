import { NewVisit } from "@/components/custom/new-visit";
import { columns } from "@/components/custom/tables/columns";
import { DataTable } from "@/components/custom/tables/data-table";
import { GetDailyVisits } from "@/lib/actions/visit.actions";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const dailyVisits = await GetDailyVisits();
  const user = await currentUser()

  return (
    <main className="text-primary">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl font-semibold">Your daily Visits</h2>
        <div className="flex items-center gap-x-4">
          <NewVisit user={user?.id!}/>
        </div>
      </div>
      <DataTable columns={columns} data={dailyVisits!} />
    </main>
  );
}