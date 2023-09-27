export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    if (Error) {
      reject(Error);
    }
    resolve('');
  });
}
