import { Component, OnInit } from '@angular/core';
import { Servico } from '../../model/servico';
import { ModalServicoComponent } from "../modal-servico/modal-servico.component";
import { CommonModule } from '@angular/common';
import { ServicoService } from '../../services/servico.service';
import { ToastrService } from 'ngx-toastr';
import { CreateServico } from '../../model/createServico';

@Component({
  selector: 'app-card-servico',
  imports: [CommonModule, ModalServicoComponent],
  templateUrl: './card-servico.component.html',
  styleUrl: './card-servico.component.css'
})
export class CardServicoComponent implements OnInit {

  modalAberto = false;
  modalEditarAberto = false;

  servicos:Servico[] = [];
  constructor(private servico: ServicoService, private toast: ToastrService) { }


  abrirModal() {
    this.modalAberto = true;
  }

  fecharModal() {
    this.modalAberto = false;
  }

  fecharModalEditar() {
    this.modalEditarAberto = false;
  }
 
  abrirModalEditar() {
    this.modalEditarAberto = true;
  }

  ngOnInit(): void {
    this.servico.listarServicosPorProfissional().subscribe({
      next: (data) => {
        this.servicos = data;
      }
      , error: (error) => {
        console.error('Erro ao listar serviços:', error);
      }
    });
  }
  
  excluir(id: number): void {
    if (confirm('Tem certeza que deseja excluir este serviço?')) {
      this.servico.deletarServico(id).subscribe({
        next: () => {
          this.toast.success('Serviço excluído com sucesso!', 'Sucesso');
          this.servicos = this.servicos.filter(servico => servico.id !== id);
          
        },
        error: (error) => {
          console.error('Erro ao excluir serviço:', error);
          this.toast.error('Erro ao excluir serviço.', 'Erro');
        }
      });
    }
  }

  salvar(createServico:CreateServico): void {
    this.servico.criarServico(createServico).subscribe({
      next: (data) => {
        this.toast.success('Serviço criado com sucesso!', 'Sucesso');
        this.servicos.push(data);
        this.fecharModal();
      },
      error: (error) => {
        console.error('Erro ao criar serviço:', error);
        this.toast.error('Erro ao criar serviço.', 'Erro');
      }
    });
  }

  editarServico(servico: CreateServico, id:number): void {
    this.servico.editarServico(servico, id).subscribe({
      next: (data) => {
        this.toast.success('Serviço editado com sucesso!', 'Sucesso');
        const index = this.servicos.findIndex(s => s.id === id);
        if (index !== -1) {
          this.servicos[index] = data;
        }
        this.fecharModalEditar();
      }
      , error: (error) => {
        console.error('Erro ao editar serviço:', error);
        this.toast.error('Erro ao editar serviço.', 'Erro');
      }
    });    
  }

  
}
