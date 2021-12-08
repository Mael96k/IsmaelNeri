class validator{

    constructor() {
        this.validations = [
            "data-min-length",
        ]
    }


    // Iniciar a validação de todos os campos
    Validate(form){

        // Pegar os inputs
        let inputs = form.getElementsByTagName("input");
        
        // Transformo uma HTMLCollection -> array
        let inputsArray = [...inputs];
        // Loop nos inputs e validação meadiante ao que for encontrado
    inputsArray.forEach(function(input) {

        // Loop em todas as validações existentes
        for(let i = 0; this.validations.length > i; i++){
            // Verifica se a validação atual e existe no input
            if(input.getAttribute(this.validations[i]) !=null){
            
                // data-min-length -> minlength
                // limpando a string para virar um método
                let method = this.validations[i].replace("data-","").replace("","");

                // valor 

            }
        }
    }, this);

    }

    //verifica se um input tem um número mínimo de caracteres
    minlength(){

    }
}

let form = document.getElementById("register_form");
let submit = document.getElementById("btn_submit");
