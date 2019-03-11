function bitly(lurl){
//nao tem url encurtada, vamos fazer uma
const params= {
    login:'o_m1keg6av1',
    apiKey:'R_669a8529ffcd4fcd8be41d501a043221',
    longUrl: lurl,
    format:'json'
  }
  axios.get('http://api.bit.ly/v3/shorten', params)
  .then(function (response) {
    console.log(response);
      return response.data.url
       
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  });  


}