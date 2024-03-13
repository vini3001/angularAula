import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeiro-componente',
  templateUrl: './primeiro-componente.component.html',
  styleUrl: './primeiro-componente.component.css'
})
export class PrimeiroComponenteComponent {

  public inputValue = ""  
  public inputValue2 = ""
  public minhaCor = ""

  eventChangeColor() {
    this.minhaCor = "Red"
  }

  eventChangeText() {
    this.inputValue2 = this.inputValue
  }
}
