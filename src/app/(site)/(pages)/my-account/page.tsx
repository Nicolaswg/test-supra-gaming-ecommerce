'use client';

import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Page() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.replace('/signin');
    }
  }, [session, router])

  return (
    <main className="xl:max-w-[770px] w-full bg-white rounded-xl shadow-1 py-9.5 px-4 sm:px-7.5 xl:px-10">
      <p className="text-dark">
        Hola {session?.user?.name} (no {session?.user?.name} ?
        <button
          onClick={() => signOut({ callbackUrl: '/signin' })}
          className="text-red ease-out duration-200 hover:underline pl-1"
        >
          Salir
        </button>
        )
      </p>

      <p className="text-custom-sm mt-4">
        Desde esta página puedes ver tus pedidos recientes, gestionar tus direcciones de envío y facturación y editar tu contraseña y detalles de la cuenta.
      </p>
    </main>
  );
}
