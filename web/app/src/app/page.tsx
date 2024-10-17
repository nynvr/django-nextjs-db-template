import { GetHomeBlogData } from "@/app/lib/api/blogs"
import HomePage from "@/app/components/home/page";

export default async function Page() {
  const data = await GetHomeBlogData();

  return (
    <>
      <HomePage data={data} />
    </>
  )
}
