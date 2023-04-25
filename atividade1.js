import { LightningElement } from "lwc";

export default class App extends LightningElement {
  
Empresa= "Sorvete";
CNPJ= "45454545445-45"
Endereco= "Praça do Limoeiro";
Produto= "Sorvete";
Descricao= "Gelado";
Preco= 20;
Promocao= "Não tem";
oferta1= 19;
oferta2= 18;

visible=true;
 
 ocultar(){
   this.visible=!this.visible;
 }
}
