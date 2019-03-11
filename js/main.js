var url ='https://script.google.com/macros/s/AKfycbzQ3o5RrXms3bRCo7llYEY83iS-VQXcivmiKBt97e0HULzUL4eO/exec' 
var dados

document.addEventListener("DOMContentLoaded", function(e) {
    e.preventDefault();
        getLista();
        console.log('main.js');

});

// Want to use async/await? Add the `async` keyword to your outer function/method.
async function getLista() {
    try {
      const response = await axios.get(url + '?urls');
      console.log(response);
      dados = response.data
      var listDiv = document.getElementById('lista');
      listDiv.classList.add('container')
      var ul=document.createElement('ul');
      ul.classList.add('list-group');
        for (var i = 0; i < dados.length; ++i) {
            var li=document.createElement('li');
                li.classList.add('list-group-item','d-flex','justify-content-between', 'align-items-center')
                li.innerHTML = dados[i].fantasia;   // Use innerHTML to set the text
              
                //cria a div para o grupo de botoes
                var div = document.createElement('div')
                div.classList.add('btn-group', 'btn-group-lg'); 
                div.setAttribute('role', 'group');

                var btn = document.createElement('btn')
                btn.classList.add('btn', 'btn-secondary'); 
                btn.setAttribute('type', 'button');
                btn.setAttribute('id', 'btn-w-' + i);
                btn.setAttribute('onClick', 'welcomeMail(' + i + ')');
                btn.appendChild(document.createTextNode('welcome'));
                //verifica se ja tem email enviado
                if (dados[i].welcome > 0) {
                  btn.classList.add('disabled')
                }
                div.appendChild(btn)

                var btn = document.createElement('btn')
                btn.classList.add('btn', 'btn-secondary'); 
                btn.setAttribute('type', 'button');
                btn.setAttribute('id', 'btn-r-' + i);
                btn.setAttribute('onClick', 'redefineMail(' + i + ')');
                btn.appendChild(document.createTextNode('redefinir senha'));
                 //verifica se ja tem email enviado
                 if (dados[i].redefinicao > 0) {
                  btn.classList.add('disabled')
                }
                div.appendChild(btn)

                var btn = document.createElement('btn')
                btn.classList.add('btn', 'btn-secondary'); 
                btn.setAttribute('type', 'button');
                btn.setAttribute('id', 'btn-o-' + i);
                btn.setAttribute('onClick', 'ofertaMail(' + i + ')');
                btn.appendChild(document.createTextNode('ofertas'));
                 //verifica se ja tem email enviado
                 if (dados[i].ofertas > 0) {
                  btn.classList.add('disabled')
                }
                div.appendChild(btn)

                //acrescenta a div
                li.appendChild(div)

                

            ul.appendChild(li);                                 
        }
      listDiv.appendChild(ul);    // Note here
    } catch (error) {
      console.error(error);
    }
  }

function welcomeMail(i){
  alert(dados[i].fantasia)
  var btn = document.getElementById('btn-w-' + i)
  btn.classList.add('disabled')
  btn.removeAttribute('onClick')
}

function redefineMail(i){
  
  alert(dados[i].fantasia)
  var btn = document.getElementById('btn-r-' + i)
  btn.classList.add('disabled')
  btn.removeAttribute('onClick')
}

function ofertaMail(i){

  //verifica se tem bitly registrado
  if(dados[i].surl == '*'){
    
  }

  var request  = url + 
    '?crud=update' +
    '&sheet=urls' +
    '&reg=' + i.toString() +
    '&fld=15' +
    '&val=' + Number(new Date())

    axios.get(request)
  .then(function(data){
        console.log(data)
        alert('Email enviado com sucesso para ' + dados[i].fantasia)
        })
  .catch(err =>console.log(err))


  var btn = document.getElementById('btn-o-' + i)
  btn.classList.add('disabled')
  btn.removeAttribute('onClick')
}

//var longURL = "https://construe-stg.devyandeh.com.br/bulkcart/multiadd/external?customer=eyJlbWFpbCI6Imx1bWFyLmVsZXRyaWNvc0Bob3RtYWlsLmNvbSJ9&data=W3sic2t1IjoiNzg5MTI2MTA0Mzg4MSIsInF0eSI6MSwic2lkIjpudWxsfSx7InNrdSI6Ijc4OTEyNjEwNDM4OTgiLCJxdHkiOjEsInNpZCI6bnVsbH0seyJza3UiOiI3ODkxMjYxMDQzOTA0IiwicXR5IjoxLCJzaWQiOm51bGx9LHsic2t1IjoiNzg5MTI2MTA0MzkxMSIsInF0eSI6MSwic2lkIjpudWxsfSx7InNrdSI6Ijc4OTEyNjEwNDM5MjgiLCJxdHkiOjEsInNpZCI6bnVsbH0seyJza3UiOiI3ODkwMjAzNDM5Njc2IiwicXR5IjoxLCJzaWQiOm51bGx9LHsic2t1IjoiMTc4NDYxIiwicXR5IjoxLCJzaWQiOm51bGx9LHsic2t1IjoiMTc4NDYyIiwicXR5IjoxLCJzaWQiOm51bGx9LHsic2t1IjoiMTc4NDYzIiwicXR5IjoxLCJzaWQiOm51bGx9LHsic2t1IjoiMTc4NDY0IiwicXR5IjoxLCJzaWQiOm51bGx9LHsic2t1IjoiMTc4NDY1IiwicXR5IjoxLCJzaWQiOm51bGx9LHsic2t1IjoiMTc4NDY2IiwicXR5IjoxLCJzaWQiOm51bGx9LHsic2t1IjoiMTc4NDY3IiwicXR5IjoxLCJzaWQiOm51bGx9LHsic2t1IjoiMTc4NDY4IiwicXR5IjoxLCJzaWQiOm51bGx9LHsic2t1IjoiMTc4NDY5IiwicXR5IjoxLCJzaWQiOm51bGx9LHsic2t1IjoiMTc4NDcwIiwicXR5IjoxLCJzaWQiOm51bGx9LHsic2t1IjoiMTc4NDcxIiwicXR5IjoxLCJzaWQiOm51bGx9LHsic2t1IjoiMTc4NDcyIiwicXR5IjoxLCJzaWQiOm51bGx9LHsic2t1IjoiNzg5NjM4MDE5MjU1NyIsInF0eSI6MSwic2lkIjpudWxsfSx7InNrdSI6Ijc4OTYzODAxNTAxODIiLCJxdHkiOjEsInNpZCI6bnVsbH0seyJza3UiOiI3ODk2MzgwMTA1MzQyIiwicXR5IjoxLCJzaWQiOm51bGx9LHsic2t1IjoiNzg5NjAzODEwMDA0MCIsInF0eSI6MSwic2lkIjpudWxsfSx7InNrdSI6Ijc4OTE3OTIxMzM2NDgiLCJxdHkiOjEsInNpZCI6bnVsbH0seyJza3UiOiI3ODk3Njg3NDExNjAwIiwicXR5IjoxLCJzaWQiOm51bGx9LHsic2t1IjoiNzg5NDIwMDAyOTQyNyIsInF0eSI6MSwic2lkIjpudWxsfSx7InNrdSI6Ijc4OTQyMDAwMjc2MzgiLCJxdHkiOjEsInNpZCI6bnVsbH0seyJza3UiOiI3ODk5MDc3MzAxNDYxIiwicXR5IjoxLCJzaWQiOm51bGx9LHsic2t1IjoiNzg5NzcyNzIwMDIzMiIsInF0eSI6MSwic2lkIjpudWxsfSx7InNrdSI6Ijc4OTc3MjcyMDE2MjgiLCJxdHkiOjEsInNpZCI6bnVsbH0seyJza3UiOiI3ODk3NzI3MjAwMjQ5IiwicXR5IjoxLCJzaWQiOm51bGx9LHsic2t1IjoiNzg5NzcyNzIwMDI1NiIsInF0eSI6MSwic2lkIjpudWxsfSx7InNrdSI6Ijc4OTEyNjU2MTU4ODYiLCJxdHkiOjEsInNpZCI6bnVsbH0seyJza3UiOiI3ODkxMjY1NjE5ODE1IiwicXR5IjoxLCJzaWQiOm51bGx9LHsic2t1IjoiNzg5ODAxMTk3MDAzOSIsInF0eSI6MSwic2lkIjpudWxsfSx7InNrdSI6Ijc4OTgwMTE5NzAxNDUiLCJxdHkiOjEsInNpZCI6bnVsbH1d"
//var Lurl = "http://api.bit.ly/v3/shorten?login=o_m1keg6av1&apiKey=R_669a8529ffcd4fcd8be41d501a043221&longUrl=" + longURL + "&format=json"
  