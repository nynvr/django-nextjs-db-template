import { blog_default_contents, InitialDataInterface } from '@/app/lib/api/utils'
import { unstable_noStore as noStore } from 'next/cache'

export type HomeBlogDataInterface = InitialDataInterface

export async function GetHomeBlogData() {
    try {
        noStore()
        const BACKEND_API_URL = process.env.BACKEND_API_URL + "/api/blog-data"
        const BACKEND_TOKEN = process.env.BACKEND_TOKEN

        const result = await fetch(BACKEND_API_URL || '', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + BACKEND_TOKEN,
            }
        })

        if (!result.ok) {
            console.log("Using default contents.")
            return blog_default_contents
        }

        console.log("Using contents from API.")
        return result.json()
    } catch (error) {
        
        console.error("Error fetching blog data:", error)
        console.log("Using default contents.")
        return blog_default_contents
    }
}