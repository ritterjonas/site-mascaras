import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  public products = [];

  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {
    this.firestore.collection('Products').snapshotChanges().subscribe((query) => {
      this.products = query.map((item) => {
        return {
          id: item.payload.doc.id,
          data: item.payload.doc.data()
        };
      });
    });
  }

}
