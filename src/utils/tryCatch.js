export default function tryCatch(onSuccess, onError) {
  try {
    onSuccess();
  } catch (err) {
    onError(err);
  }
}
