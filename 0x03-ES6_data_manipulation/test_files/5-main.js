import createInt8TypedArray from "./5-typed_arrays.js";

console.log(createInt8TypedArray(10, 2, 89));

DataView {
  byteLength: 10,
    byteOffset: 0,
    buffer: ArrayBuffer {
    [Uint8Contents]: <00 00 59 00 00 00 00 00 00 00>,
      byteLength: 10
  }
}
