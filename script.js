/*questao1
function funcao(){
    var idade = Number(document.getElementById('idade').value)
    if(idade < 18){
        document.getElementById('resultado').innerText = 'MENOR DE IDADE'
    }
    else{
        document.getElementById('resultado').innerText = 'MAIOR DE IDADE'
    }
}
*/

/*questao3
function calcular(){
    var n1 =  Number(document.getElementById('n1').value)
    var n2 = Number(document.getElementById('n2').value)
    var n3 =  Number(document.getElementById('n3').value)
    var media = (n1 + n2 + n3)/3
    document.getElementById('resultado').innerHTML = ' A média desse aluno foi: '+media
    if(media >= 7 && media <= 10){
        document.getElementById('resultado').innerHTML = 'APROVADO'    
    }
    else if(media >= 3 && media < 7){
        document.getElementById('resultado2').innerHTML = 'EXAME'
        var notaExame = 12 - media
        document.getElementById('resultado').innerHTML = 'ESSE ALUNO DEVE TIRAR '+notaExame.toFixed(2)+' PARA PASSAR NO EXAME'
    }
    else if(media < 3){
        document.getElementById('resultado').innerHTML = 'REPROVADO'
        
    }
    else{
        alert
        ('ERRO')
    }
   }
 */

 /*questao4
 function calcular(){
    var n1 =  Number(document.getElementById('n1').value)
    var n2 = Number(document.getElementById('n2').value)
    
    var media = (n1 + n2 )/2
    document.getElementById('resultado1').innerHTML = ' A média desse aluno foi: '+media
    if(media >= 70 && media <= 100){
        document.getElementById('resultado').innerHTML = 'APROVADO'    
    }
    else if(media >= 40 && media < 70){
        document.getElementById('resultado2').innerHTML = 'EXAME'
        var notaExame = Number(prompt('qual a nota do exame?'))
        if((media + notaExame)>=100){
        document.getElementById('resultado').innerHTML = 'APROVADO'
        }
        else{
        document.getElementById('resultado').innerHTML = 'REPROVADO'
        }
    }
    else if(media < 40){
        document.getElementById('resultado').innerHTML = 'REPROVADO'
    }
    else{
        alert
        ('ERRO')
    }
   }
 */

/*questao5
   function multa(){
    var vMaxima =  Number(document.getElementById('veloMaxima').value)
    var vMotorista = Number(document.getElementById('veloMotorista').value)
    
    if(vMotorista > vMaxima){
    var multa = (vMotorista - vMaxima)*5
    document.getElementById('resultado').innerHTML = 'A MULTA DO MOTORISTA SERÁ DE: '+multa+' REAIS'   
    }
    else if(vMaxima > vMotorista){
        document.getElementById('resultado').innerHTML = 'SEM MULTA'
    }
    else{
        alert
        ('ERRO')
    }
   }
   */
    
/*questao7
function salario(){
    let horas = Number(document.getElementById("horas").value)
    let valorHora = Number(document.getElementById("valorHora").value)
    if(horas <= 40){
        let salario = horas * valorHora
        document.getElementById('resultado').innerText = 'o salario semanal dele é: '+salario
    }
    else if(horas > 40 && horas <=60){
        let salario = (horas * valorHora)
        let adicional = salario *0.5
         document.getElementById('resultado').innerText = 'o salario semanal dele é: '+(salario+adicional)

    }
    else if(horas > 60){
        let salario = (horas * valorHora)
        document.getElementById('resultado').innerText = 'o salario semanal dele é: '+(salario+salario)

    }
   else{
    document.getElementById('resultado').innerText = 'erro'
   }

} */


   /*questao8
   function triangulo(){
    let lado1 = Number(document.getElementById("l1").value)
    let lado2 = Number(document.getElementById("l2").value)
    let lado3 = Number(document.getElementById("l3").value)
    if(lado1 == 0|| lado2 == 0 || lado3 == 0){
        document.getElementById('resultado').innerText = 'Nao é um triangulo'
    }
    else if(lado1 > (lado2+lado3)||lado2 > (lado3+lado1)|| lado3 > (lado1+lado2)){
        document.getElementById('resultado').innerText = 'Nao é um triangulo'   
    }
    else if(lado1 == lado2 && lado1 == lado3){
        document.getElementById('resultado').innerText = 'triangulo equilatero'
    }
    else if((lado1 == lado2 && lado1 != lado3)||(lado1 == lado3 && lado1 != lado2)||(lado2 == lado3 && lado2 != lado1)){
        document.getElementById('resultado').innerText = 'triangulo isoceles'
    }
    else if(lado1 != lado2 && lado1 != lado3 && lado2 != lado3){
        document.getElementById('resultado').innerText = 'triangulo escaleno'
    }
    else{
        alert('erro')
    }
   
} */
/*questao9
function funcao(){
        let n1 = document.getElementById("n1").value
        let n2 = document.getElementById("n2").value
        let n3 = document.getElementById("n3").value
        if(n1 > n2 && n2 > n3){
            document.getElementById('resultado').innerHTML = n3 +' '+ n2 +' '+ n1
        }
        else if(n1 > n2 && n3 > n2){
            document.getElementById('resultado').innerHTML = n2 +' '+ n3 +' '+ n1
        }
        else if(n2 > n1 && n1 > n3){
            document.getElementById('resultado').innerHTML = n3 +' '+ n1 +' '+ n2
        } 
        else if(n2 > n3 && n3 > n1){
            document.getElementById('resultado').innerHTML = n1 +' '+ n3 +' '+ n2
        }   
        else if(n3 > n1 && n1 > n2){
            document.getElementById('resultado').innerHTML = n2 +' '+ n1 +' '+ n3
        } 
        else if(n3 > n2 && n2 > n1){
            document.getElementById('resultado').innerHTML = n1 +' '+ n2 +' '+ n3
        }  
        else{
            alert('erro')
        }
    }
 */
   /*questao 10 
   function somar(){
   let n1 = Number(document.getElementById("n1").value)
   let n2 = Number(document.getElementById("n2").value)
   document.getElementById("resultado").innerText = n1 + n2 
   }

   function multiplicar(){
    let n1 = Number(document.getElementById("n1").value)
   let n2 = Number(document.getElementById("n2").value)
    document.getElementById("resultado").innerText = n1 * n2
    }

    function exponenciar(){
        let n1 = Number(document.getElementById("n1").value)
   let n2 = Number(document.getElementById("n2").value)
        document.getElementById("resultado").innerText = n1 ** n2
        }
*/

/*questao 11
function enviar(){
    var codigo = Number(document.getElementById("codigo").value)
    var salario = Number(document.getElementById("salario").value)
    switch(codigo){
        case 1:
            let aumento = salario + (salario*0.5)
            document.getElementById("resultado").innerText = 'O seu cargo é de escrituario, e seu novo salario é de '+aumento;
            break;

            case 2:
            let aumento2 = salario + (salario*0.35)
            document.getElementById("resultado").innerText = 'O seu cargo é de secretario, e seu novo salario é de '+aumento2;
            break;

            case 3:
            let aumento3 = salario + (salario*0.2)
            document.getElementById("resultado").innerText = 'O seu cargo é de caixa, e seu novo salario é de '+aumento3;
            break;

            case 4:
            let aumento4 = salario + (salario*0.1)
            document.getElementById("resultado").innerText = 'O seu cargo é de gerente, e seu novo salario é de '+aumento4;
            break;

            case 5:
            document.getElementById("resultado").innerText = 'O seu cargo é de diretor, e seu salario é de '+salario;
            break;
            default:
                alert('erro');
    }
}
 */
/*questao 12
function enviar(){
    var salario = Number(document.getElementById("salario").value)
    if (salario <= 500) {
        let aumento = salario + (salario*0.05)
        document.getElementById('resultado').innerText = 'seu novo salario é de: '+(aumento+150)
    }
    
    else if ((salario > 500 && salario <= 1200) && salario <= 600) {
        let aumento = salario + (salario*0.12)
        document.getElementById('resultado').innerText = 'seu novo salario é de: '+(aumento+150)
    }
    else if ((salario > 500 && salario <= 1200) && salario > 600) {
        let aumento = salario + (salario*0.12)
        document.getElementById('resultado').innerText = 'seu novo salario é de: '+(aumento+100)
    }

    else if (salario >1200) {  
        document.getElementById('resultado').innerText = 'seu novo salario é de: '+(salario+100)
    }
}

*/

/*questao 13
function dia(){
    var numero = Number(document.getElementById("numero").value)
    switch(numero){
        case 1:
            document.getElementById("resultado").innerText = 'DOMINGO'
            break;
        case 2:
            document.getElementById("resultado").innerText = 'SEGUNDA'
            break;
        case 3:
            document.getElementById("resultado").innerText = 'TERÇA'
            break;
        case 4:
            document.getElementById("resultado").innerText = 'QUARTA'
            break;
        case 5:
            document.getElementById("resultado").innerText = 'QUINTA'
            break;
        case 6:
                document.getElementById("resultado").innerText = 'SEXTA'
                break;
        case 7:
                    document.getElementById("resultado").innerText = 'SABADO'
                    break;
        default:
            alert('erro');
    }
}
*/
/*QUESTAO 14
function trimestre(){
    var numero = Number(document.getElementById("numero").value)
    switch(numero){
        case 1:
            document.getElementById("resultado").innerText = 'PRIMEIRO TRISMESTRE'
            break;
        case 2:
            document.getElementById("resultado").innerText = 'PRIMEIRO TRISMESTRE'
            break;
        case 3:
            document.getElementById("resultado").innerText = 'PRIMEIRO TRISMESTRE'
            break;
        case 4:
            document.getElementById("resultado").innerText = 'SEGUNDO TRISMESTRE'
            break;
        case 5:
            document.getElementById("resultado").innerText = 'SEGUNDO TRISMESTRE'
            break;
        case 6:
                document.getElementById("resultado").innerText = 'SEGUNDO TRISMESTRE'
                break;
        case 7:
                    document.getElementById("resultado").innerText = 'TERCEIRO TRISMESTRE'
                    break;
         case 8:
                 document.getElementById("resultado").innerText = 'TERCEIRO TRISMESTRE'
                        break;
       case 9:
               document.getElementById("resultado").innerText = 'TERCEIRO TRISMESTRE'
                            break;
          case 10:
                document.getElementById("resultado").innerText = 'QUARTO TRISMESTRE'
                                break;
         case 11:
            document.getElementById("resultado").innerText = 'QUARTO TRISMESTRE'
                                    break;
        case 12:
        document.getElementById("resultado").innerText = 'QUARTO TRISMESTRE'
                                        break;           
        default:
            alert('erro');
    }
}
*/
/* questao 15
function funcao(){
    var civil = document.getElementById("civil").value
    var sexo = document.getElementById("sexo").value
    switch(civil){
    case "C":
    case "c":
        if (sexo == "M" || sexo == "m"){
            document.getElementById('resultado').innerText = 'Casado'
        }
        else if (sexo == "F" || sexo == "f"){
            document.getElementById('resultado').innerText = 'Casada'
        }
        else{
            alert('erro')
        }
        break;

        case "S":
        case "s":
        if (sexo == "M" || sexo == "m"){
            document.getElementById('resultado').innerText = 'Solteiro'
        }
        else if (sexo == "F" || sexo == "f"){
            document.getElementById('resultado').innerText = 'Solteira'
        }
        else{
            alert('erro')
        }
        break;
        case "V":
        case "v":
        if (sexo == "M" || sexo == "m"){
            document.getElementById('resultado').innerText = 'Viuvo'
        }
        else if (sexo == "F" || sexo == "f"){
            document.getElementById('resultado').innerText = 'Viuva'
        }
        else{
            alert('erro')
        }
        break;
        case "D":
        case "d":
        if (sexo == "M" || sexo == "m"){
            document.getElementById('resultado').innerText = 'Divorciado'
        }
        else if (sexo == "F" || sexo == "f"){
            document.getElementById('resultado').innerText = 'Divorciada'
        }
        else{
            alert('erro')
        }
        break;
        default:
            alert('Invalido');
}
}*/
/* questao 16
function funcao(){
    var cnh = document.getElementById("cnh").value
    
    switch(cnh){
        case "A":
        case "a":        
        document.getElementById('resultado').innerText = 'Motos e Triciclos'
        break;
        case "B":
        case "b":
        document.getElementById('resultado').innerText = 'Carros de passeio'
        break;
        case "C":
        case "c":
        document.getElementById('resultado').innerText = 'Veiculos de carga acima de 3,5 toneladas'
        break;
        case "D":
        case "d":
        document.getElementById('resultado').innerText = 'Veiculos com mais de 8 passageiros'
        break;
        case "E":
        case "e":
        document.getElementById('resultado').innerText = 'Veiculos com unidade acoplada acima de 6 toneladas'
        break;
        default:
            alert('Invalido');
}
}
*/
/* questao 17
function funcao(){
    var num = Number(document.getElementById("num").value)
    
    switch(num){
        case 1:        
        document.getElementById('resultado').innerText = 'UM'
        break;
        case 2:
        document.getElementById('resultado').innerText = 'DOIS'
        break;
        case 3:
        document.getElementById('resultado').innerText = 'TRES'
        break;
        case 4:
        document.getElementById('resultado').innerText = 'QUATRO'
        break;
        case 5:
        document.getElementById('resultado').innerText = 'CINCO'
        break;
        case 6:
        document.getElementById('resultado').innerText = 'SEIS'
        break;
        case 7:
        document.getElementById('resultado').innerText = 'SETE'
        break;
        case 8:
        document.getElementById('resultado').innerText = 'OITO'
        break;
        case 9:
        document.getElementById('resultado').innerText = 'NOVE'
        break;
        case 10:
        document.getElementById('resultado').innerText = 'DEZ'
        break;
        default:
            alert('Invalido');
}
}
*/

/*questao 18
function soma(){
    var n1 = Number(prompt('Digite um numero'))
    var n2 = Number(prompt('Digite outro numero'))
    document.getElementById('resultado').innerText = 'A soma deles é: '+(n1+n2)
}
function sub(){
    var n1 = Number(prompt('Digite um numero'))
    var n2 = Number(prompt('Digite outro numero'))
    document.getElementById('resultado').innerText = 'A subtraçao deles é: '+(n1-n2)
}
function mult(){
    var n1 = Number(prompt('Digite um numero'))
    var n2 = Number(prompt('Digite outro numero'))
    document.getElementById('resultado').innerText = 'A multiplicaçao deles é: '+(n1*n2)
}
function div(){
    var n1 = Number(prompt('Digite um numero'))
    var n2 = Number(prompt('Digite outro numero'))
    document.getElementById('resultado').innerText = 'A divisao deles é: '+(n1/n2)
}
 */

/*
questao19
function funcao(){
    var emprest = Number(document.getElementById("valor").value)
    var parcela = Number(document.getElementById("parcelas").value)
    var salario = Number(document.getElementById("salario").value)
    var valorParcela = emprest / parcela
    if(valorParcela <= (salario*0.3)){
        document.getElementById('resultado').innerText = 'EMPRESTIMO APROVADO, COM PARCELAS DE '+valorParcela.toFixed(2)+' EM '+parcela+' VEZES'
    }
    else{
        document.getElementById('resultado').innerText = 'emprestimo recusado'  
    }
}
 */

/*questao 20 e 21
function funcao(){
    var id = Number(document.getElementById("id").value)
    
    switch(id){
        case 1:        
        document.getElementById('resultado').innerText = 'ALIMENTO NÃO-PERECÍVEL'
        break;
        case 2:
        case 3:
        case 4:
        document.getElementById('resultado').innerText = 'ALIMENTO PERECÍVEL'
        break;
        case 5:
        case 6:
        document.getElementById('resultado').innerText = 'vESTUARIO'
        break;
        case 7:
        document.getElementById('resultado').innerText = 'HIGIENE PESSOAL'
        break;
        case 8:
        case 9:
        case 10:
        document.getElementById('resultado').innerText = 'UTENSILIOS DOMÉSTICOS'
        break;
        default:
            alert('Código Invalido');
}
}
*/

/*questao22
function funcao(){
    var num = Number(document.getElementById("num").value)
    if((num % 2)==0){
        document.getElementById('resultado').innerText = 'o numero é par'
    }
    else if((num % 2)==1){
        document.getElementById('resultado').innerText = 'o numero é impar'
}

*/

/*questao23
function funcao(){
    var n1 = Number(document.getElementById("n1").value)
    var n2 = Number(document.getElementById("n2").value)
    var media = (n1+n2)/2
    if(media >= 7){
        document.getElementById('resultado').innerText = 'Aprovado, media '+media
    }
    else if(media == 10){
        document.getElementById('resultado').innerText = 'Aprovado com distinçao, media '+media
    }
    else if(media >= 3 && media < 7){
        document.getElementById('resultado').innerText = 'Exame, media '+media
    }
    else if(media < 3){
        document.getElementById('resultado').innerText = 'Reprovado, media '+media
    }
}
 */

/*questao 24
function funcao(){
    var n1 = Number(document.getElementById("n1").value)
    var n2 = Number(document.getElementById("n2").value)
    var n3 = Number(document.getElementById("n3").value)
    var media = (n1+n2+n3)/3
    if(media >= 7){
        document.getElementById('resultado').innerText = 'Aprovado, media '+media
    }
    else if(media == 10){
        document.getElementById('resultado').innerText = 'Aprovado com distinçao, media '+media
    }
    else if(media >= 3 && media < 7){
        var nExame = Number(prompt('Qual a nota do exame final?'))
        var mediaFinal = (nExame + media)/2
        if(mediaFinal >= 5){
        document.getElementById('resultado').innerText = 'Aprovado no exame, media '+mediaFinal    
        }
        else{
        document.getElementById('resultado').innerText = 'reprovado no exame'
        }
    }
    else if(media < 3){
        document.getElementById('resultado').innerText = 'Reprovado sem direito a exame, media '+media
    }
}
 */

/*questao 25
function funcao(){
    var preco = Number(document.getElementById("preco").value)
    var codigo = Number(document.getElementById("codigo").value)
    switch(codigo){
        case 1:
        var preco1 = preco - (preco*0.1)        
        document.getElementById('resultado').innerText = 'O VALOR DO PRODUTO FICA: '+preco1.toFixed(2)
        break;
        case 2:
        var preco2 = preco - (preco*0.05)
        document.getElementById('resultado').innerText = 'O VALOR DO PRODUTO FICA: '+preco2.toFixed(2)
        break;
        case 3:
        document.getElementById('resultado').innerText = 'O VALOR DO PRODUTO FICA: '+preco.toFixed(2)
        break;
        case 4:
        var preco4 = preco + (preco*0.1)
        document.getElementById('resultado').innerText = 'O VALOR DO PRODUTO FICA: '+preco4.toFixed(2)
        break;
        default:
            alert('Invalido');
}
}
 */

/*QUESTAO26
function funcao(){
    var g1 = Number(document.getElementById("g1").value)
    var g2 = Number(document.getElementById("g2").value)
    var time1 = Number(2)
    var time2 = Number(4)
    var placar = time1+'X'+time2

    if((g1 != time1 && g2 != time2)&& g1 > g2){
    document.getElementById('resultado').innerText = '0 PONTOS, PLACAR:'+placar
    }
    else if((g1 == time1 && g2 == time2)&& g2 == g1){
        document.getElementById('resultado').innerText = '5 PONTOS, EMPATE, PLACAR:'+placar    
        }
    else if((g1 != time1 && g2 != time2)&& g2 > g1){
    document.getElementById('resultado').innerText = '10 PONTOS, PLACAR:'+placar    
    }
    else if((g1 == time1 && g2 != time2)&& g2 > g1){
        document.getElementById('resultado').innerText = '5 PONTOS, PLACAR:'+placar    
        }
    else if((g1 == time1 && g2 != time2)&& g1 > g2){
        document.getElementById('resultado').innerText = '15 PONTOS, PLACAR:'+placar    
        }
    else if((g1 != time1 && g2 == time2)&& g2 > g1){
        document.getElementById('resultado').innerText = '15 PONTOS, PLACAR:'+placar    
        }
    else if((g1 != time1 && g2 == time2)&& g1 > g2){
        document.getElementById('resultado').innerText = '5 PONTOS, PLACAR:'+placar    
        }
    else if(g1 == time1 && g2 == time2){
        document.getElementById('resultado').innerText = '20 PONTOS, PLACAR:'+placar    
        }
}
 */

/*questao27
function funcao(){
    var salario = Number(document.getElementById("salario").value)

    if(salario <= 1637.11){
    document.getElementById('resultado').innerText = '0 imposto'
    }
    else if(salario > 1637.11 && salario <= 2453.50){
        var imposto = (salario*0.075)-122.78
        document.getElementById('resultado').innerText = 'O SEU IMPOSTO SERÁ DE '+imposto.toFixed(2)    
        }
    else if(salario > 2453.50 && salario <= 3271.38){
        var imposto = (salario*0.15)-306.80
        document.getElementById('resultado').innerText = 'O SEU IMPOSTO SERÁ DE '+imposto.toFixed(2)   
    }
    else if(salario > 3271.38 && salario <= 4087.65){
        var imposto = (salario*0.225)-552.15
        document.getElementById('resultado').innerText = 'O SEU IMPOSTO SERÁ DE '+imposto.toFixed(2)   
        }
    else if(salario > 4087.65){
        var imposto = (salario*0.275)-756.53
        document.getElementById('resultado').innerText = 'O SEU IMPOSTO SERÁ DE '+imposto.toFixed(2)   
        }
    else{
        alert('erro')
        }
}
*/

/*questao28
function funcao(){
    var lados = Number(document.getElementById("lados").value)
    var tamanho = Number(document.getElementById("tamanho").value)
    switch(lados){
        case 3:
        var area = (tamanho * tamanho)*(1.73/4)        
        document.getElementById('resultado').innerText = 'A AREA DO POLIGONO É '+area.toFixed(2)
        break;
        case 4:
        var area = tamanho * tamanho
        document.getElementById('resultado').innerText = 'A AREA DO POLIGONO É '+area.toFixed(2)
        break;
        case 6:
        var area = (6)*(tamanho * tamanho)*(1.73/4)
        document.getElementById('resultado').innerText = 'A AREA DO POLIGONO É '+area.toFixed(2)
        break;
        default:
            alert('nao sei calcular a area');
}

}
 */

/*questao29
function funcao(){
    var id = Number(document.getElementById("id").value)
    switch(id){
        case 1:
        var salario = Number(prompt('Digite o salario fixo mensal desse do funcionario(gerente)'))  
        var salarioSemanal = salario / 4
        document.getElementById('resultado').innerText = 'O salario semanal dele é de '+salarioSemanal.toFixed(2)
        break;

        case 2:
        var horas = Number(prompt('Digite quantas horas esse funcionario trabalhou na semana(trabalhador comum)'))
        var valorHora = Number(prompt('Qual o valor de cada hora trabalhada?'))  
        if(horas == 40){
        var salarioFinal = horas * valorHora
        document.getElementById('resultado').innerText = 'O salario semanal dele é de '+salarioFinal.toFixed(2)
        }
        else if(horas > 40){
        var salarioFinal = (horas*valorHora)+(((horas - 40)*valorHora)*1.5)
        document.getElementById('resultado').innerText = 'O salario semanal dele é de '+salarioFinal.toFixed(2)
        }
        else{
            alert('erro')
        } 
        break;

        case 3:
        var vendas = Number(prompt('Digite o valor total das vendas na semana desse funcionario(funcionario porcomissao)'))  
        var salarioSemanal = (250)+(vendas*0.057)
        document.getElementById('resultado').innerText = 'O salario semanal dele é de '+salarioSemanal.toFixed(2)
        break;

        case 4:
        var numItens = Number(prompt('Digite o numero de itens produzidos por esse funcionario(trabalhador por empreitada)'))
        var valorItem = Number(prompt('Digite o valor desse item'))  
        var salarioSemanal = numItens * valorItem
        document.getElementById('resultado').innerText = 'O salario semanal dele é de '+salarioSemanal.toFixed(2)
        break;
        default:
            alert('INVALIDO');
}
}
 */

