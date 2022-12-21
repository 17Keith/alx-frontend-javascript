export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    const object = {
      status: 200,
      body: 'Success',
    };
    if (promise === true) {
      resolve(object);
    } else {
      reject(Error());
    }
  });
}
console.log('Got a response from the API');
