export default class UpdateManager {
  applyUpdate() {
    console.log('强制更新了呢')
  }
  onCheckForUpdate(callback) {
    console.log(callback)
  }
  onUpdateFailed(callback) {
    console.log(callback)
  }
  onUpdateReady(callback) {
    console.log(callback)
  }
}