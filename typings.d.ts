declare module '@ckeditor/ckeditor5-vue2' {
  const CKEditorVue: any
  export = CKEditorVue
}

declare module '@ckeditor/ckeditor5-build-classic' {
  const ClassicEditorBuild: any
  export = ClassicEditorBuild
}

type User = {
  uid?: string
  email?: string
  emailVerified?: string
  displayName?: string
  phoneNumber?: string
  photoURL?: string
  providerId?: string
}

type FirebaseAuth = {
  authUser?: User | null
  claims?: any
}

type Job = {
  uid?: string
  cover?: string
  slug?: string
  title?: string
  tags?: string[]
  content?: string
} | undefined
