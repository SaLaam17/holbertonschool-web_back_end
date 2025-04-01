export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position > length) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length); // ArrayBuffer creation with size set to "length".
  const view = new DataView(buffer); // Use of DataView.
  view.setInt8(position, value); // Store "value" at the "position" position.

  return view;
}
