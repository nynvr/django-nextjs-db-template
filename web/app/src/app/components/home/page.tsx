// Components
import { ModeToggle } from "@/app/components/modeToggle";

import { HomeBlogDataInterface } from "@/app/lib/api/blogs"

interface HomePageProps {
    data?: HomeBlogDataInterface,
}

export default function HomePage({ data }: HomePageProps) {
    return (
        <>
            <ModeToggle />  
            <div>{ data?.contents }</div>
        </>
    )
}