
import { isNotLogged } from '@/app/api/auth/auth'
import HandbookForm from '@/app/components/handbookForm'

export default async function NewHandbookButton() {

  await isNotLogged()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Create new handbook</h1>
        <HandbookForm />
    </main>
  )
}
