require('whatwg-fetch');

class RequestUtil {
  get(options){
    return doRequest(options,'get');
  }
  post(options){
    return doRequest(options,'post');
  }

  put(options){
    return doRequest(options,'put');
  }
  del(options){
    return doRequest(options,'delete');
  }
}

function doRequest(options, method){
  return new Promise(async (resolve, reject)=> {
    try {
      let headers = options.headers || {};
      if(options.authenticationRequired) {
        if(localStorage.token) {
          headers['Authorization'] = `Bearer ${localStorage.token}`;
        } else {
          throw new Error(`Error user is not logged in`);
        }
      }
      let response = await fetch(options.url, {
        method: method,
        headers: headers,
        body: options.body && !options.binary ? JSON.stringify(options.body):options.body
      });

      if(response.ok){
        let result = await response.json();
        resolve(result);
      } else{
        throw new Error(`Error ${response.status} received`);
      }


    } catch(ex) {
      console.log('Error getting request:', ex);
      reject(ex);
    }
  })
}



module.exports = new RequestUtil();
