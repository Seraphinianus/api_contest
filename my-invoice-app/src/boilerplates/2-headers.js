import { useState } from 'react';
import axios from 'axios';

//const url = 'https://icanhazdadjoke.com/';
const url = 'https://api.arolariu.ro/api/invoices';
// Accept : 'application/json'

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const Headers = () => {
  const [decidedItem, setInvoice] = useState('random item');
  const [decidedItemImage, setInvoiceImage] = useState('decided image')

  const fetchInvoice = async () => {
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
      console.log(randomInvoice.invoiceImageURI);
      setInvoice(item + ',as item number ' + (randomBoughtItemId + 1) + ' from the invoice below with an id of ' + randomInvoiceId);
      setInvoiceImage(randomInvoice.invoiceImageURI);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <section className='section text-center'>
      <button className='btn' onClick={fetchInvoice}>
        Random item
      </button>
      <p className='invoice'>{decidedItem}</p>
        <div>
        <img
            src={decidedItemImage}
            alt='invoice_image'
        />
        </div>
    </section>
  );
};
export default Headers;