declare module "@inertiajs/inertia" {
  interface PageProps {
    flash: FlashMessage,
    auth?: AuthProps,
  }
}

export type FlashMessage = {
  message: null | string,
}

export type AuthProps = {
  user: {
    id: number,
    name: string,
    email: string,
  },
}
