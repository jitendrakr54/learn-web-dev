'use strict';

// global things, which are required by all these below lectures
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1; // Handled in finally
};

const renderCountry = function (data, className = '') {
  const html = `
        <article class="country ${className}">
            <img class="country__img" src="${data.flags['svg']}" />
            <div class="country__data">
                <h3 class="country__name">${data.name['common']}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(
                  +data.population / 1000000
                ).toFixed(1)} M</p>
                <p class="country__row"><span>🗣️</span>${
                  data.languages[Object.keys(data.languages)[0]]
                }</p>
                <p class="country__row"><span>💰</span>${
                  Object.keys(data.currencies)[0]
                }</p>
            </div>
        </article>
      `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1; // Handled in finally
};

const getJSON = function (url, errMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errMsg} (${response.status})`);
    return response.json();
  });
};

// *********************************************** Our First AJAX Call: XMLHttpRequest *******************************
/* 
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    const html = `
      <article class="country">
          <img class="country__img" src="${data.flags['svg']}" />
          <div class="country__data">
              <h3 class="country__name">${data.name['common']}</h3>
              <h4 class="country__region">${data.region}</h4>
              <p class="country__row"><span>👫</span>${(
                +data.population / 1000000
              ).toFixed(1)} M</p>
              <p class="country__row"><span>🗣️</span>${
                data.languages[Object.keys(data.languages)[0]]
              }</p>
              <p class="country__row"><span>💰</span>${
                Object.keys(data.currencies)[0]
              }</p>
          </div>
      </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('india');
getCountryData('portugal');
getCountryData('usa');
*/

// **************************************************** Callback hell ************************************************
/* 
// callback hell
const getCountryAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render country 1
    renderCountry(data);

    // GET neighbour country if border exist using optional chaining
    const neighbour = data.borders?.[0]; // Using optional chaining to account for countries with no borders property
    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);

      // Render country 2
      renderCountry(data2, 'neighbour');
    });
  });
};

// getCountryAndNeighbour('portugal');
// getCountryAndNeighbour('usa');
*/

/*
// Also an example of callback hell
setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 seconds passed');
    setTimeout(() => {
      console.log('3 seconds passed');
      setTimeout(() => {
        console.log('4 seconds passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
*/

// *********************************************** Promises and fetch API ********************************************
/* 
// const requestXML = new XMLHttpRequest();
// requestXML.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// requestXML.send();

const requestFetch = fetch('https://restcountries.com/v3.1/name/portugal'); // returns promise
console.log(requestFetch);
*/

// *************************************************** Consuming Promises ********************************************
/* 
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(function (response) {
      console.log(response);
      return response.json();
      // json method itself, is actually also an asynchronous function. And so what that means, is that it will also
      // return a new promise. so now we need to handle that promise as well.
    })
    .then(function (data) {
      console.log(data);
      renderCountry(data[0]);
    });
};
// getCountryData('portugal');

// simplified version of above
const getCountryData1 = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => renderCountry(data[0]));
};
getCountryData1('portugal');

//  . Now it's very easy to understand that this fetches something and then we get a response which will be transformed to
//    json. And then we take that data and render the country to the DOM. Okay, so this almost reads like English sentences
//  . Promises do not get rid of callbacks, but they do in fact get rid of callback hell.
//    So even if this doesn't look like a big change for now, it will look like a change after we add the functionality
//    of loading the neighbor country.
*/

// *************************************************** Chaining Promises *********************************************
/*
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())

    
    .then(data => {
      renderCountry(data[0]);

      // Use optional chaining to account for countries with no borders property. So some country would not have border
      // in that case it will give error without optional chaining.
      const neighbour = data[0].borders?.[0];
      if (!neighbour) return;

      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data[0], 'neighbour'));
};
// getCountryData('portugal');
// getCountryData('germany');
*/

// *************************************************** Handling Rejected Promises ************************************
/* 
const getCountryData1 = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(
      response => response.json(),
      err => alert(err) // Handling rejection (error) 2nd Callback
    )
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      //   console.log(neighbour);
      if (!neighbour) return;
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(
      response => response.json(),
      err => alert(err)
    )
    .then(data => renderCountry(data[0], 'neighbour'));
};

const getCountryData2 = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      //   console.log(neighbour);
      if (!neighbour) return;
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      // Handling rejection (error)) at he end
      console.error(`${err} 💣💣💣`);
      renderError(`Something went wrong 💣💣 ${err.message}, Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  // getCountryData1('portugal');
  // getCountryData2('germany');
  getCountryData2('adASFSG'); //Trying for a country that doesn't exist
});
*/

// *************************************************** Throwing errors manually ***************************************
/*
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => {
      console.log(response);
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);
      return response.json();
    })
    .then(data => {
      renderCountry(data[0]);
      //   const neighbour = data[0].borders?.[0];
      const neighbour = 'efhuifhw';
      //   console.log(neighbour);
      if (!neighbour) return;
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);
      return response.json();
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      // Handling rejection (error)) at he end
      console.error(`${err} 💣💣💣`);
      renderError(`Something went wrong 💣💣 ${err.message}, Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};
*/

/*
// simplified version of above
const getJSON = function (url, errMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errMsg} (${response.status})`);
    return response.json();
  });
};

const getCountryData = function (country) {
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];

      if (!neighbour) throw new Error('No neighbour found!');

      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.error(`${err} 💣💣💣`);
      renderError(`Something went wrong 💣💣 ${err.message}, Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  // getCountryData('portugal');
  // getCountryData('germany');
  getCountryData('australia');
});
*/

/////////////////////////////////////////////
///// CODING CHALLENGE #1
/*
const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(response => {
      if (!response.ok)
        throw new Error(`Problem with geocoding (${response.status})`);
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);
      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Coutry not found (${response.status})`);
      return response.json();
    })
    .then(data => {
      console.log(data);
      renderCountry(data[0]);
    })
    .catch(err => {
      console.error(`Something went wrong: ${err.message}`);
      renderError(`Something went wrong: ${err.message}`);
    });
};

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
*/

// *************************************************** The event loop in practice *************************************
/* 
// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));
// console.log('Test end');

// Here Promise is resolved immediately and callback move to "microtask queue", which has higher priority over setTimeout().

// let's simulate a situation where timer is taking 0 seconds and Promises is takng time.
console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));
Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 1000000000; i++) {} // 5 sec
  console.log(res);
});
console.log('Test end');
*/

// *************************************************** Building a simple Promise **************************************
/* 
const lotteryPromise = new Promise(function (resolve, reject) {
  if (Math.random() >= 0.5) {
    resolve('You WIN 🏆');
  } else {
    reject('You lost your money 💩');
  }
});
lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Above code is not really asynchronous yet. So let's actually simulate this lottery draw by adding a simple timer.
// encapsulate asynschronous behavior using setTimeout()
const lotteryPromise1 = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening 🔮');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You WIN 🏆');
    } else {
      reject(new Error('You lost your money 💩'));
    }
  }, 2000);
});
lotteryPromise1.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeout
// . Let's see that in action a little bit. And so what we're gonna do is to actually promisify the setTimeout() function
//   and create a wait function. So let's create a function called wait() and this function is going to take in a number
//   of seconds. And so now inside of this function we will actually create and return the promise. So usually that's
//   always what we do. So creating a function and then from there returning a promise.
//   And so this will then encapsulate the asynchronous operation even further. So essentially that's also what the fetch
//   function does. It's a function that returns a promise, and so that is exactly what we will do here with this wait
//   function. So in a sense this here is a more real world example. So promisifying setTimeout.
//   As I was saying, we are going to return a new promise and then or executor function as always, and then resolve.
//   And in this case, we actually don't even need the reject function. And that's because it's actually impossible
//   for the timer to fail. And so therefore we will never mark this promise as rejected.

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
  })
  .then(() => console.log('I waited for 1 second'));

// converting below callback hell using wait
setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 seconds passed');
    setTimeout(() => {
      console.log('3 seconds passed');
      setTimeout(() => {
        console.log('4 seconds passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

wait(1)
  .then(() => {
    console.log('I waited for 1 seconds');
    return wait(2);
  })
  .then(() => {
    console.log('I waited for 2 second');
    return wait(3);
  })
  .then(() => {
    console.log('I waited for 3 second');
    return wait(4);
  })
  .then(() => console.log('I waited for 4 second'));

// Way to create a fulfilled or a rejected promise immediately
Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('abc')).catch(x => console.error(x));
*/

// *************************************************** Promisifying geolocation API ***********************************
/* 
navigator.geolocation.getCurrentPosition(
  position => console.log(position),
  err => console.log(err)
);
console.log('Getting position');

// above callback based asynchronous code (geolocation API)  is now converted to Promise based geolocation API
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition().then(pos => console.log(pos));
console.log('Getting position');

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Problem with geocoding (${response.status})`);
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);
      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Coutry not found (${response.status})`);
      return response.json();
    })
    .then(data => {
      console.log(data);
      renderCountry(data[0]);
    })
    .catch(err => {
      console.error(`Something went wrong: ${err.message}`);
      renderError(`Something went wrong: ${err.message}`);
    });
};

btn.addEventListener('click', whereAmI);
*/

////////////////////////////////////
/////// CODING CHALLENGE #2
/* 
const imgContainer = document.querySelector('.images');
const createImage = function (imagePath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imagePath;
    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found!'));
    });
  });
};

let currentImg;
createImage('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('Image 1 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    return wait(2);
  })
  .then(() => (currentImg.style.display = 'none'))
  .catch(err => console.error(err));
*/

// ************************************************** Consuming Promises with async/await *****************************
/* 
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  // Geolocation
  const pos = await getPosition();
  const { latitude: lat, longitude: lng } = pos.coords;

  // Reverse geocoding
  const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
  const dataGeo = await resGeo.json();
  console.log(dataGeo);

  // coutry data
  // fetch(`https://restcountries.com/v3.1/name/${country}`).then(res =>
  //   console.log(res)
  // );
  // below is same as above, just converted with await
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${dataGeo.country}`
  );
  const dataCountry = await res.json();
  console.log(dataCountry);
  renderCountry(dataCountry[0]);
};
whereAmI();
console.log('FIRST');
*/

// ************************************************** Error Handling with try..catch **********************************
/* 
try {
  let y = 1;
  const x = 2;
  x = 3; //re-assigning to constant will result into error
} catch (err) {
  alert(err);
}

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error('Problem getting location data');
    const dataGeo = await resGeo.json();
    // console.log(dataGeo);

    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );
    if (!res.ok) throw new Error('Problem getting country');
    const dataCountry = await res.json();
    renderCountry(dataCountry[0]);
  } catch (err) {
    console.error(`${err} 💥`);
    renderError(`💣 ${err.message}`);
  }
};
whereAmI();
*/

// ************************************************** Returning values from async functions ***************************
/* 
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  console.log('2: getting location');
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error('Problem getting location data');
    const dataGeo = await resGeo.json();

    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );
    if (!res.ok) throw new Error('Problem getting country');
    const dataCountry = await res.json();
    renderCountry(dataCountry[0]);
    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.log(err);
    renderError(`💣 ${err.message}`);

    // Reject promise returened from async function
    throw err;
  }
};

// console.log('1: Will get location');
// const city = whereAmI();
// console.log(city);
// console.log('3: Finished getting location');

// console.log('1: Will get location');
// whereAmI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.error(`2: ${err.message} 💥`))
//   .finally(() => console.log('3: Finished getting location'));

// Problem with above code is the fact that doing this here kind of makes this the philosophy of async/await with handling
// promises using then and catch. So we are mixing the old and the new way of working with promises here, all in the same
// code.

// However, we don't really want a new complete function here, and so instead we can use an IIFE.
console.log('1: Will get location');
(async function () {
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`);
  } catch (err) {
    console.error(`2: ${err.message}`);
  }
  console.log('3: Finished getting location');
})();
*/

// ************************************************** Running promises in parallel ************************************
/* 
const get3Countries = async function (c1, c2, c3) {
  try {
    const [data1] = await getJSON(
      `https://restcountries.com/v3.1/name/${c1}`,
      'Country not found'
    );
    const [data2] = await getJSON(
      `https://restcountries.com/v3.1/name/${c2}`,
      'Country not found'
    );
    const [data3] = await getJSON(
      `https://restcountries.com/v3.1/name/${c3}`,
      'Country not found'
    );
    console.log([data1.capital, data2.capital, data3.capital]);
  } catch (err) {
    console.log(err);
  }
};
get3Countries('portugal', 'canada', 'india');

// Using Promise.all()
const get3CountriesNew = async function (c1, c2, c3) {
  try {
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);
    console.log(data);
    console.log(
      data.map(d => {
        const [capital] = d[0].capital; // destructuring array
        return capital;
      })
    );
  } catch (err) {
    console.log(err);
  }
};
get3CountriesNew('portugal', 'canada', 'india');
*/

// ********************************************** Other Promise combinators: Race, AllSettled and Any *****************
/////////////// Promise.race() combinator
/* 
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/italy`),
    getJSON(`https://restcountries.com/v3.1/name/egypt`),
    getJSON(`https://restcountries.com/v3.1/name/mexico`),
  ]);
  console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.com/v3.1/name/italy`),
  timeout(0.2),
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));
*/

/////////////// Promise.allSettled() combinator : ES2020
/* 
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another.success'),
]).then(res => console.log(res)); // here we get three results, even though one of them rejected.

Promise.all([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another.success'),
])
  .then(res => console.log(res))
  .catch(err => console.log(err));

// here we will simply get error Because the Promise.all() combinator will short circuit if there is one error, if there
// is one rejected promise. So that's the difference between these two.
 */

/////////////// Promise.any() combinator : ES2021
/* 
Promise.any([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another.success'),
])
  .then(res => console.log(res))
  .catch(err => console.log(err));
*/

/*
///////////////////////////////////////////////
/////////////// CODING CHALLENGE #3
/*
const imgContainer = document.querySelector('.images');
const createImage = function (imagePath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imagePath;
    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found!'));
    });
  });
};

let currentImg;
createImage('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('Image 1 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    return wait(2);
  })
  .then(() => (currentImg.style.display = 'none'))
  .catch(err => console.error(err));
*/

// above is converted using async/await
// Part 1
/* 
const loadNPause = async function () {
  try {
    // load image 1
    let img = await createImage('img/img-1.jpg');
    console.log('Image 1 loaded');
    await wait(2);
    img.style.display = 'none';

    // load image 2
    img = await createImage('img/img-2.jpg');
    console.log('Image 2 loaded');
    await wait(2);
    img.style.display = 'none';
  } catch (err) {
    console.error(err);
  }
};
loadNPause(); 
*/

// Part 2
/*
const loadAll = async function (images) {
  try {
    const imgs = images.map(async image => await createImage(image));
    // console.log(imgs);

    const imgEl = await Promise.all(imgs);
    console.log(imgEl);
    imgEl.forEach(img => img.classList.add('parallel'));
  } catch {}
};
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
*/

// . So we have an array of promises and not the images themselves. And this is actually a big source of confusion
//   for most async/await beginners.
// . So, here we have an async function, right? And this is an arrow function. So we have an implicit return.
//   So this is like returning something from this callback function in each iteration, right? However, as we already
//   know, an async function will always return a promise and not really the value that we're interested in, right?
//   Instead, the value that we want to return is going to be the fulfilled value of the promise that the async function
//   returns. And so that is exactly what is happening here, but it is happening simply three times. So we are returning
//   something three times from an async function here, and so therefore the result will be three promises, okay?
