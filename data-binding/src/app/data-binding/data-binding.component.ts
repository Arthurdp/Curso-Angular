import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  // styleUrls: ['./data-binding.component.css']
  styles: [
    `
    .highlight {
    background-color: green;
    font-weight: bold;
    }
    `
  ]
})
export class DataBindingComponent implements OnInit {

  url: string = "http://loiane.com"
  cursoAngular: boolean = true
  urlImg = 'https://picsum.photos/200/300'
  valorAtual: string = '';
  valorSalvo: string = ''

  isMouseOver: boolean = false

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('Botão clicado!')
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = ((<HTMLInputElement>evento.target).value);
  }

  salvarValor(valor: string) {
    this.valorSalvo = valor
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver
  }

  constructor() { }

  ngOnInit(): void {
  }

}
