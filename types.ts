export type User = {
  uid?: number
  email?: string
  emailVerified?: string
  displayName?: string
  phoneNumber?: string
  photoURL?: string
  providerId?: string
}

export type FirebaseAuth = {
  authUser?: User | null
  claims?: any
}

export type Job = {
  uid?: number
  slug?: string
  title?: string
  cover?: string
  tags?: string[]
  content?: string
}
