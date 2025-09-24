import Link from 'next/link'



export default function QuickLinks() {
  const quickLinks = [
    {
      id: 1,
      label: 'Politica de Privacidad',
      href: '#',
    },
    {
      id: 2,
      label: 'Politica de Rembolsos',
      href: '#',
    },
    {
      id: 3,
      label: 'Terminos y Condiciones',
      href: '#',
    },
    {
      id: 4,
      label: "FAQ's",
      href: '#',
    },
    {
      id: 5,
      label: 'Contacto',
      href: '/contact',
    },
  ]
  return (
    <div className="w-full sm:w-auto">
      <h2 className="mb-7.5 text-custom-1 font-medium text-white">
        Enlaces Rápidos
      </h2>

      <ul className="flex flex-col gap-3">
        {
          quickLinks.map((link) => (
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
