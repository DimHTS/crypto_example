export default function throwDataError(response) {
  const error = response.data.error;
  if (error) {
    throw error
  }
}


// API response error: status 200 and data.error

/*

https://poloniex.com/support/api/
=================================

+++ Trading API Methods +++

All responses from the trading API are in JSON format. 
In the event of an error, the response will always be of the following format:

{"error":"<error message>"}

*/