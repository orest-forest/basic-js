// const CustomError = require("../extensions/custom-error");


// module.exports =
    class DepthCalculator {

  constructor() {
    this.depthCount = 0;
  }

  calculateDepth(arr) {


      for (let i = 0; i < arr.length; i++) {
     if (Array.isArray(arr[i])) {
       this.depthCount++;
         this.calculateDepth(arr[i])
     }
   }

   return this.depthCount;
  }

};