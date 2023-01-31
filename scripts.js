'use strict'

const advice__Number = document.querySelector('.advice__Number');
const quote__content = document.querySelector('.quote__content');
const roundSymbol = document.querySelector('.round__symbol')



roundSymbol.addEventListener('click', generateNewQuote)

async function generateNewQuote () {
  try{
   const res = await fetch(`https://api.adviceslip.com/advice`);
    const data = await res.json()
    // console.log('clicked');
    // console.log(res);
    console.log(data);

    displayData(data)
    cache: 'no-cache';
    if(!res.ok) throw new Error(`Can't fetch data 💥 ${res.status}`);
  } catch (err){
    console.error(` ${err.message}`)
    console.error(` ${err}`)
  }
}


function displayData(data){
  const apiData = data?.slip

  advice__Number.textContent = `${apiData?.id}`
  quote__content.innerHTML = `<p>"${apiData?.advice}"</p>`
}
