class validator{

    constructor() {
        this.validations = [
            `data-min-length`,
            `data-max-length`,
            `data-only-letters`,
        ]
    }


    // Iniciar a validação de todos os campos
    Validate(form){

        // resgata todas as validações
        let currentValidations = document.querySelectorAll(`form .error-validation`);

        if(currentValidations.length){
            this.cleanValidations(currentValidations);
        }

        // Pegar os inputs
        let inputs = form.getElementsByTagName(`input`);
        // Transformo uma HTMLCollection -> array
        let inputsArray = [...inputs];

        // Loop nos inputs e validação meadiante ao que for encontrado
    inputsArray.forEach(function(input, obj) {

        // Loop em todas as validações existentes
        for(let i = 0; this.validations.length > i; i++){
            // Verifica se a validação atual e existe no input
            if(input.getAttribute(this.validations[i]) !=null){
            
                // data-min-length -> minlength
                // limpando a string para virar um método
                let method = this.validations[i].replace("data-","").replace("","");

                // valor do input
                let valeu = input.getAttribute(this.validations[i]);

                // invocar o método 
                this[method](input, value);

            }
        }
    }, this);

    }

    //verifica se um input tem um número mínimo de caracteres
    minlength(input, minValue){

        let inputLength = input.value.length;

        let errorMessage = `o campo precisa ter pelo menos ${minValue} caracteres`;

        if (inputLength < minValue) {
            this.printMessage(input, errorMessage);
        }

    }

    // verifica se um input passou do límite de caracteres
    maxlength(input, maxValue){

        let inputLength = input.value.length;

        let errorMessage = `o campo precisa ter menos que  ${maxValue} caracteres`;

        if (inputLength > maxValue) {
            this.printMessage(input, errorMessage);
        }

    }

    // método para imprimir mensagens de erro na tela 
    printMessage(input, msg){

        let template = document.querySelector(".error-validation").cloneNode(true);

        template.textContent = msg;

        let inputParent = input.parentNode;

        template.classList.remove("template");

        inputParent.appendchild(template);

    }

    // verifica se o input é requerido

    //limpa as validações da tela 
    cleanValidations(validations){
        validations.forEach(el => el.remove());
    }
}

let form = document.getElementById("register_form");
let submit = document.getElementById("btn_submit");

let validator = new validator();

// evento que dispara as validações
submit.addEventListener("click", function(e)){

}