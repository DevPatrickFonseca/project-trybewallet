export async function getCurrencyQuotation() {
  const urlApiCurrencyQuotation = 'https://economia.awesomeapi.com.br/json/all';
  const data = await fetch(urlApiCurrencyQuotation);
  const dataJson = await data.json();
  return dataJson;
}
