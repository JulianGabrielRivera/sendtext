//client side javascript

// get values of form

const numberInput = document.getElementById('number');

const textInput = document.getElementById('msg');

const button = document.getElementById('button');

const send = () => {
  // the end of this removes all non numeric values makes sures there is no non nunmeric characters
  const number = numberInput.value.replace(/\D/g, '');
  const text = textInput.value;

  const requestBody = { number, text };
  console.log(requestBody);

  fetch('/', {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => console.log(err));

  // axios
  //   .post('/', JSON.stringify(requestBody), {
  //     headers: { 'Content-type': 'application/json' },
  //   })
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
};
button.addEventListener('click', send, false);

// axios
// .post(`${APIURL}/api/places/create`, requestBody, {
//   headers: { Authorization: `Bearer ${storedToken}` },
// })
// .then((response) => {
//   console.log(response);
//   // forced the new state since we used a double useeffect in app
//   props.setState([...props.data]);
//   navigate('/');
// })
// .catch((err) => {
//   const errorDescription = err.response.data.message;
//   setErrorMessage(errorDescription);
//   console.log(err);
// });
