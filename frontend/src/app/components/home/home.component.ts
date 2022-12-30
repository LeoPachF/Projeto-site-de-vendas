import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

nomeProduto: string ='PC Gamer';
anuncio: string =  `o ${this.nomeProduto} está em promoção`;
idProduto: number = 123;
precoProduto: number = 1999.59;
promocao:boolean = true;
foto: string = 'assets/images/CPU.jpg';


  constructor() {
    console.log('Nome do Produto: ', this.nomeProduto);
    console.log('Anuncio: ', this.anuncio);
  }
  ngOnInit(): void {
    
  }

}
