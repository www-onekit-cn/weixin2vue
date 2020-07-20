class OnekitWX_Image {
  static saveImageToPhotosAlbum() {
  }

  static previewImage() {
  }

  static getImageInfo() {
  }

  static compressImage() {
  }

  static chooseMessageFile() {
  }

  static chooseImage(object) {
    let count = object.count;
    var sizeType = object.sizeType;
    var sourceType = object.scourceType;
    let result;
    if (object.count == 0) {
      object.count = 0;
    }
     success: (res)=>
    {
      result={};
      var tempFilePaths = [];
      var tempFiles = [];

    };
    fail: (res) => {
      if (object.fail) {
        object.fail(res);
      }
      if (object.complete) {
        object.complete(res);
      }
    }
  }
}

