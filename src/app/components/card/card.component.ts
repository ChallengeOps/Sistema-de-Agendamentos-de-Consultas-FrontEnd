import { Component, Input, OnInit } from '@angular/core';
import { Servico } from '../../model/servico';
import { ModalInfoComponent } from "../modal-info/modal-info.component";
import { CommonModule } from '@angular/common';
import { ServicoService } from '../../services/servico.service';

@Component({
  selector: 'app-card',
  imports: [ModalInfoComponent, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

  @Input()
  servicos: Servico[] = [];

  constructor(private servico: ServicoService) { }

  ngOnInit(): void {
    this.servico.listarServicos().subscribe({
      next: (data) => {
        this.servicos = data;
      },
      error: (err) => {
        console.error('Erro ao listar serviços:', err);
      }
    });
  }

  modalAberto = false;
  itemSelecionado: any = null;

  abrirModal(item: any) {
    this.itemSelecionado = item;
    this.modalAberto = true;
  }

  fecharModal() {
    this.modalAberto = false;
    this.itemSelecionado = null;
  }


}
