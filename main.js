let valorEmdolar,valorConvertido,tarifa;
/**/
function valores(){

 let valor = document.getElementById('valor')
 let select1 =  document.getElementById('select1');
 let select2 = document.getElementById('select2');
 let divValores = document.getElementById('valores');
 
 if(valor.value === "" || select1.value === select2.value){
    alert('Conversão invalida!');
    valor.value = "";
    valor.focus();
    return; 
 }

 /**/
 let dinheiro = Number(valor.value);

 const moedasEmdolar = [
    {BRL:5.76},
    {ARS:1001},
    {COP:4.421},
    {BOB:6.85},
    {CLP:971.65},
    {PYG:7.844},
    {VES: 45.67},
    {PEN:3.79} 
 ]

 const simbolos = {
    BRL: 'pt-BR',
    ARS: 'es-AR',
    COP: 'es-CO',
    BOB: 'es-BO',
    CLP: 'es-CL',
    PYG: 'es-PY',
    VES: 'es-VE',
    PEN: 'es-PE'
 }

 /**/
 const converter = select1.value;
 const para = select2.value;
 const chave1 = moedasEmdolar.find(item => item[converter] !== undefined);
 const chave2 = moedasEmdolar.find(item => item[para] !== undefined);

 if(converter !== 'USD' && chave2 !== undefined){
     tarifa = dinheiro * 1.5 / 100;

     valorEmdolar = (dinheiro - tarifa) / chave1[converter]

     valorConvertido = valorEmdolar * chave2[para];


     tarifa = dinheiro * 1.0 / 100;

     divValores.innerHTML = `<br style="display: table;">${valorConvertido.toLocaleString(`${simbolos[para]}`, {style: 'currency', currency: `${para}`})}</br>
                             <br>Tarifa: ${tarifa.toLocaleString(`${simbolos[converter]}`,{style: 'currency', currency: `${converter}`})}</br>`

 }else if(converter === 'USD'){
     tarifa = dinheiro * 1.0 / 100;

     valorConvertido =  (dinheiro - tarifa) * chave2[para];


     divValores.innerHTML = `<br style="display: table;">${valorConvertido.toLocaleString(`${simbolos[para]}`, {style: 'currency', currency: `${para}`})}</br>
                             <br>Tarifa: ${tarifa.toLocaleString(`us-EN`,{style: 'currency', currency: `USD`})}</br>`
 }else if(!chave2){
     tarifa = dinheiro * 1.0 / 100;

     valorConvertido = (dinheiro - tarifa) / chave1[converter];


     divValores.innerHTML = `<br style="display: table;">${valorConvertido.toLocaleString(`us-EN`, {style: 'currency', currency: `USD`})}</br>
                             <br>Tarifa: ${tarifa.toLocaleString(`${simbolos[converter]}`,{style: 'currency', currency: `${converter}`})}</br>`
 };

 valor.value = "";
 valor.focus();

};