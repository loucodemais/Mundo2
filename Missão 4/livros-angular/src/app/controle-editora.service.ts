import { Injectable } from '@angular/core';
import Editora from './editora';

const editoras: Array<Editora> = [
  new Editora(1, 'Alta Books'),
  new Editora(2, 'Pearson'),
  new Editora(3, 'Addison Wesley')
];

@Injectable({
  providedIn: 'root'
})

class ControleEditoraService {
  getEditoras(): Array<Editora> {
    return editoras;
  }

  getNomeEditora(codEditora: number): string {
    const editora = editoras.find(editora => editora.codEditora === codEditora);
    return editora ? editora.nome : '';
  }
}

export default ControleEditoraService;