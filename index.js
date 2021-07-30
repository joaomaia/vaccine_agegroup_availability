const axios = require('axios');
const jsdom = require('jsdom');
const {JSDOM} = jsdom;

// Fill with your telegram bot details
const BOT_API_KEY = '1234567890:ABCDEFGHIJKlmnopqrstuvwxyz';
const CHAT_ID = '9876543210';

let site_msg = "";

async function sendmessage(chat_id, message) {
  let url = `https://api.telegram.org/bot${BOT_API_KEY}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(message)}`;
  await axios.get(url);
}

async function loadpage() {

  const html = await axios.get('https://covid19.min-saude.pt/pedido-de-agendamento/');
  const dom = new JSDOM(html.data);
  const title = dom.window.document.querySelector('h3');

  if (title) {
    if(title.textContent.trim() != site_msg) {
      site_msg = title.textContent.trim();
      await sendmessage(CHAT_ID, site_msg);
    }
  }
};

loadpage();
setInterval(loadpage, 20000);