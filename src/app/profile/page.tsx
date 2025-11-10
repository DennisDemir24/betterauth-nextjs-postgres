
import { SignOutButton } from "@/components/auth/SignOutButton"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"

async function ProfilePage() {

    const session = await auth.api.getSession({
        headers: await headers()
    })

    if (!session) {
        return (
            <div className='px-8 py-16 container mx-auto max-w-screen-lg space-y-8'>
                <div className='space-y-8'>
                    <h1 className='text-4xl font-bold'>Profile</h1>
                </div>


                <p>You must be signed in to view this page.</p>
            </div>
        )
    }
    
    return (
        <div className='px-8 py-16 container mx-auto max-w-screen-lg space-y-8'>
      <div className='space-y-8'>
        <h1 className='text-4xl font-bold'>Profile</h1>
      </div>

        <SignOutButton />
      
    </div>
  )
}

export default ProfilePage
