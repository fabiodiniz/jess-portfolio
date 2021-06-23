import firebase from 'firebase/app'
import 'firebase/storage'

export default class UploadAdapter {
  loader: any

  constructor (loader: any) {
    this.loader = loader
  }

  upload () {
    return this.loader
      .file
      .then((file: File) => {
        return new Promise((resolve, reject) => {
          const storage = firebase.storage().ref()
          const uploadTask: firebase.storage.UploadTask = storage
            .child(file.name)
            .put(file)

          uploadTask.on(
            firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
            this.onProgress,
            () => reject(this.onError),
            () => resolve(this.onComplete(uploadTask)),
          )
        })
      })
  }

  onProgress (snapshot: firebase.storage.UploadTaskSnapshot) {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    console.log('Upload is ' + progress + '% done')

    switch (snapshot.state) {
      case firebase.storage.TaskState.PAUSED: // or 'paused'
        console.log('Upload is paused')
        break
      case firebase.storage.TaskState.RUNNING: // or 'running'
        console.log('Upload is running')
        break
    }
  }

  onError (error: firebase.storage.FirebaseStorageError) {
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    // eslint-disable-next-line default-case
    switch (error.code) {
      case 'storage/unauthorized':
        return new Error(' User doesn\'t have permission to access the object')

      case 'storage/canceled':
        return new Error('User canceled the upload')

      case 'storage/unknown':
        return new Error('Unknown error occurred, inspect error.serverResponse')
    }
  }

  async onComplete (uploadTask: firebase.storage.UploadTask) {
    return {
      default: await uploadTask
        .snapshot
        .ref
        .getDownloadURL(),
    }
  }
}
