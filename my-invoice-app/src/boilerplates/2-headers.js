import { useState } from 'react';
import axios from 'axios';

//const url = 'https://icanhazdadjoke.com/';
const url = 'https://api.arolariu.ro/api/invoices';
// Accept : 'application/json'

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

const Headers = () => {
  const [decidedItem, setJoke] = useState('random item');

  const fetchDadJoke = async () => {
    try {
      const { data } = await axios(url, {
        headers: {
          Accept: 'application/json',
        },
      });
      const invoiceListLength = data.length;
      console.log(invoiceListLength);
      const randomInvoiceId = randomIntFromInterval(0, invoiceListLength)
      const randomInvoice = data[randomInvoiceId];
      console.log(randomInvoice);
      const boughtItemListLength = randomInvoice.items.boughtItems.length;
      console.log(boughtItemListLength);
      const randomBoughtItemId = randomIntFromInterval(0, boughtItemListLength)
      const randomBoughtItem = randomInvoice.items.boughtItems[randomBoughtItemId].key

      const item = randomBoughtItem;
      console.log(item);
      setJoke(item + ' from invoice nr.' + randomInvoiceId + ' with id ' + randomBoughtItemId);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <section className='section text-center'>
      <button className='btn' onClick={fetchDadJoke}>
        Random item
      </button>
      <p className='dad-joke'>{decidedItem}</p>
    </section>
  );
};
export default Headers;