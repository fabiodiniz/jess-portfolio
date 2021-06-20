export type FirebaseAuth = {
  authUser?: any
  claims?: any
}

export type User = {
  uid?: number
  email?: string
  emailVerified?: string
}

export type Job = {
  uid?: number
  slug?: string
  title?: string
  cover?: string
  tags?: string[]
  content?: string
}
