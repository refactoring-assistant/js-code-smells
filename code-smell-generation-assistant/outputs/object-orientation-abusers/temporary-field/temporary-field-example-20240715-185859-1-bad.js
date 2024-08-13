class ImageProcessor {
  constructor() {
    this.imageData = null;  // Temporary field used only in some methods 
  }

  load(image) {
    this.imageData = this._convertToData(image);
  }

  _convertToData(image) {
    // Pretend this does something complex
    return image;
  }

  process() {
    if (this.imageData !== null) {
      return this.imageData.split('').reverse().join('');
    }
  }
}

const ip = new ImageProcessor();
ip.load('Some dummy image data');
console.log(ip.process()); // Outputs: atad egami ymmud emoS