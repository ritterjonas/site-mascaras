import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  types = [
    {
      fileName: 'ar1.png',
      title: 'SPLIT HI WALL',
      txt: 'Equipamento mais comum da categoria, encontra-se fácil, em residências, comércios de pequeno e médio porte'
    },
    {
      fileName: 'ar1.png',
      title: 'SPLIT CASSETE',
      txt: 'Pode ser instalado em forro embutido ou no teto, ficando posicionado na parte central do ambiente. Possui quatros saídas de ar que permitem ajustes individuais'
    },
    {
      fileName: 'ar1.png',
      title: 'SPLIT PISO-TETO',
      txt: 'É um aparelho potente instalado no teto do estabelecimento, é mais provável que você o encontre em grandes salões, grandes lojas ou locais com intenso número de pessoas'
    },
    {
      fileName: 'ar1.png',
      title: 'MULTISPLIT',
      txt: 'Tem somente uma unidade externa (condensadora) que atende mais de uma unidade split interna (evaporadoras)'
    },
    {
      fileName: 'ar1.png',
      title: 'ACJ (Ar condicionado de janela)',
      txt: 'Muito comum em prédios, sua instalação e retirada para manutenção é de esforço mínimo'
    },
    {
      fileName: 'ar1.png',
      title: 'FAN COIS',
      txt: 'Indicado para resfriamento de locais abertos/grandes. Caracterizado como ar central, que passa o ar sob dutos, podemos encontrar este modelo em agências bancárias, shoppings e empresas'
    }
  ];
  skip = 0;
  itensPerPage = 3;

  constructor() { }

  ngOnInit() {
    if (window.innerWidth < 780) {
      this.itensPerPage = 1;
      return;
    }
    if (window.innerWidth < 1200) {
      this.itensPerPage = 2;
      return;
    }
    this.itensPerPage = 3;
  }

  next() {
    if (this.hasNext()) {
      this.skip = this.skip + this.itensPerPage;
    }
  }

  prev() {
    if (this.hasPrev()) {
      this.skip = this.skip - this.itensPerPage;
    } else {
      this.skip = 0;
    }
  }

  getActives() {
    const clonedArray = Object.assign([], this.types);
    return clonedArray.splice(this.skip, this.itensPerPage);
  }

  hasPrev() {
    return this.skip > 0;
  }

  hasNext() {
    return this.skip < this.types.length - this.itensPerPage;
  }

  onResize(event) {
    this.skip = 0;
    if (event.target.innerWidth < 780) {
      this.itensPerPage = 1;
      return;
    }
    if (event.target.innerWidth < 1200) {
      this.itensPerPage = 2;
      return;
    }
    this.itensPerPage = 3;
  }

}
