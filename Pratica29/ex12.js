function lerNumero(mensagem, inteiro = false){

    const texto = prompt(mensagem, "");

    if (texto === null){

        throw new Error("Entrada cancelada. Execute novamente.");
    
    }
    const normalizado = texto.trim().replace(",",".");
    const numero = Number(normalizado);
    
    if (normalizado === "" || !Number.isFinite(numero)){

        throw new Error("Digite um número válido");
    }

    if (inteiro && !Number.isInteger(numero)){

        throw new Error("Digite um número inteiro.");
    }

    return numero;

}

try {
        const n1 = lerNumero("Digite o primeiro número aqui: ");
        const n2 = lerNumero("Digite o segundo número aqui: ");
        const n3 = lerNumero("Digite o terceiro número aqui: ");
        const n4 = lerNumero("Digite o quarto número aqui: "); 
    
        const media = (n1 + n2 + n3 + n4) / 4;

        console.log("Media dos números: ", media);

    } catch (error){
        console.error("Ocorreu um erro:", error.mensage);
        alert(error.mensage);

    }

