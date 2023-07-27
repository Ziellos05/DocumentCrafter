import { GoogleSingInButton } from '../components/authButton'
import { isLogged } from '../api/auth/auth'
import constructora from '../../public/logo-constructora-bolivar.svg'
import Image from 'next/image';

// Página principal cuando el usuario no está logueado
export default async function SingInPage() {

  await isLogged()

  // Verifica si el usuario está logueado, en caso de estarlo, lo redirige a la página que amerita

  return (
    <div className='w-full flex flex-col items-center justify-center min-h-screen py-2'>
      <h1 className='mt-10 mb-4 text-4xl'>Herramienta Manuales - Constructora Bolivar</h1>
      <Image src={constructora} alt='Constructora Bolivar logo' width={300} height={300} />
      <div className='flex flex-col items-center w-1/3 mt-10 p-5 shadow-md'>
        <h1 className='mt-10 mb-4 text-4xl font-bold'>Inicia sesión</h1>
        <GoogleSingInButton />
      </div>
    </div>
  )
}
