
    /*>>>>>>>>>>>>>>>>>>>>>>>>> exemplo de promise>>>>>>>>>>>>>>>>>>>>>>>>>>>>
       const cep = document.querySelector("#cep");

    cep.addEventListener("blur", (e) => {
    let search = cep.value.replace("-", "");

    if (search.length < 8|| Number(search.value) ===NaN) {
        alert("CEP inválido!");
        cep.focus();
        return;
    }

    const options = {
        method: "GET",   // api exige q seja GET
        mode: "cors",    // para cessar varios dominios ao msm tempo 
        cache: "default",
    }

    // recurso assincrono, retorna uma promise por que eu não sei se vai funcionar 
    //Promise é um recurso que não  temos certeza se deu certo ou não, é uma INTENÇÃO.
    //Se der certo  ele vai  retornar o resolve, se der errado ela vai retornar o reject.
    //resolver quer dizer, funcionou, ai usamos a função then, se der errado, usamos o catch.

    fetch(`https:viacep.com.br/ws/${search}/json/`, options)
    .then(response => {
        response.json()
        .then(result => {
            console.log(result);
        });

    })
    .catch(err => { console.log(e.message)});

});
>>>>>>>>>>>>>>>>>>>>>>>>> Async / Await>>>>>>>>>>>>>>>>>>>>>>>>>>>>
*/
//to lugar que tiver uma promise da pra criar um async/await
//aync/await
// é pra processamento assincrono e onde tiver await o async deve estar 
// toda função assincorna precisa começar coma palacra async

const cep = document.querySelector("#cep");

const showData = (result) => {
  for (const campo in result) {
    if (document.querySelector("#" + campo)) {
      document.querySelector("#" + campo).value = result[campo];
    }
  }
};

cep.addEventListener("blur", async (e) => {
  let search = cep.value.replace("-", "");
  if (search.length < 8 || Number(search.value) === NaN) {
    alert("CEP inválido!");
    cep.focus();
    return;
  }
  const options = {
    method: "GET",
    mode: "cors",
    cache: "default",
  };
  // axios - biblioteca javascript que usa fetch e XHR.
  try {
    const resultado = await fetch(
      `https://viacep.com.br/ws/${search}/json/`,
      options
    );
    const json = await resultado.json();
    showData(json);
  } catch (error) {
    console.log("Temos um problemas", error.message);
  }
});