export class Agendamento {
  id!: number;
  clienteNome!: string;
  profissionalNome!: string;
  servicoNome!: string;
  status!: string;
  horaInicio!: string; // ISO string for LocalDateTime (e.g., "2025-06-02T19:00:00")
  horaFim!: string;    // ISO string for LocalDateTime
}