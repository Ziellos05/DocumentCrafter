
import { authConfig, isNotLogged } from '@/app/api/auth/auth'
import { LogoutButton } from '@/app/components/loggoutButton'
import { getServerSession } from 'next-auth';
import Image from 'next/image'
import constructora from '@/public/logo-constructora-bolivar.svg';
import { HandbooksTable } from '@/app/components/handbooksTable';
import { NewHandbookButton } from '@/app/components/newHandbookButton';

export default async function Main() {

  await isNotLogged()

  const session = await getServerSession(authConfig);

  const user = {
    username: session?.user?.email,
    password: process.env.NEXTAUTH_SECRET as string
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h3 className='mt-10 mb-10 text-2xl'>Usuario actual: {session?.user?.email}   <LogoutButton /></h3>
      <Image src={constructora} alt='Constructora Bolivar logo' width={150} height={150} />
      <h2 className='mt-10 mb-5 font-semibold'>Nueva URL acortada</h2>

      <NewHandbookButton />

      <HandbooksTable />

    </main>
  )
}
