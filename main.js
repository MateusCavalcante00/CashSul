let valorEmdolar,valorConvertido,tarifa;
/**/
function valores(){

 let valor = document.getElementById('valor')
 let select1 =  document.getElementById('select1');
 let select2 = document.getElementById('select2');
 let divValores = document.getElementById('valores');
 
 if(valor.value === ""){
    alert('sem valor')
    return; 
 }

 /**/
 let dinheiro = Number(valor.value);

 const moedasEmdolar = [
    {BRL:5.79},
    {ARS:998.0},
    {COP:4.421},
    {BOB:6.85},
    {CLP:168.97},
    {PYG:1.342},
    {VES: 45.5},
    {PEN:3.80} 
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

     valorEmdolar = dinheiro / chave1[converter];

     valorConvertido = valorEmdolar * chave2[para];

     tarifa = dinheiro * 0.1 / 100;

     divValores.innerHTML = `<br style="display: table;">${valorConvertido.toLocaleString(`${simbolos[para]}`, {style: 'currency', currency: `${para}`})}</br>
                             <br>Tarifa: ${tarifa.toLocaleString(`${simbolos[converter]}`,{style: 'currency', currency: `${converter}`})}</br>`

 }else if(converter === 'USD'){
   
     valorConvertido =  dinheiro * chave2[para];

     tarifa = dinheiro * 0.1 / 100;

     divValores.innerHTML = `<br style="display: table;">${valorConvertido.toLocaleString(`${simbolos[para]}`, {style: 'currency', currency: `${para}`})}</br>
                             <br>Tarifa: ${tarifa.toLocaleString(`us-EN`,{style: 'currency', currency: `USD`})}</br>`
 }else if(!chave2){

     valorConvertido = dinheiro / chave1[converter];

     tarifa = dinheiro * 0.1 / 100;

     divValores.innerHTML = `<br style="display: table;">${valorConvertido.toLocaleString(`us-EN`, {style: 'currency', currency: `USD`})}</br>
                             <br>Tarifa: ${tarifa.toLocaleString(`${simbolos[converter]}`,{style: 'currency', currency: `${converter}`})}</br>`
 };

};