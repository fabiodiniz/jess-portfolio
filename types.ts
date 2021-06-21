export type User = {
  uid?: string
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
  uid?: string
  cover?: string
  slug?: string
  title?: string
  tags?: string[]
  content?: string
} | null
