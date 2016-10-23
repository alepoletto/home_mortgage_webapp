import axios from 'axios';

const ROOT_URL = 'https://home-mortage-server.herokuapp.com/deal';

export const FETCH_DEALS = 'FETCH_DEALS';



export function fetchDeals(props) {
  console.log(props);
  const url = `${ROOT_URL}?city=${props.city}&propertyValue=${props.propertyValue}&downPayment=${props.downPayment}&score=${props.score}`;
  const request = axios.get(url);
  return {
    type: FETCH_DEALS,
    payload: request
  };
}
