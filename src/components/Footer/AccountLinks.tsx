import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import Link from 'next/link'


export default async function AccountLinks() {
  const session = await getServerSession(authOptions)
  const accountLinks = [
    {
      id: 1,
      label: session ? 'Mi cuenta' : 'Iniciar Sesión o Registrarse',
      href: session ? '/my-account' : '/login',
    },
    {
      id: 2,
      label: 'Carrito',
      href: '/cart',
    },
    {
      id: 3,
      label: 'Favoritos',
      href: '/wishlist',
    },
    {
      id: 4,
      label: 'Tienda',
      href: '/shop-with-sidebar',
    }
  ]
  return (
    <div className="w-full sm:w-auto">
      <h2 className="mb-7.5 text-custom-1 font-medium text-white">
        Cuenta de Usuario
      </h2>

      <ul className="flex flex-col gap-3.5">
        {
          accountLinks.map((link) => (
            <li key={link.id}>
              <Link
                className="ease-out duration-200 text-white hover:text-purple-light-2"
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  )
}

