import Livro from "../modelo/Livro";

const livros: Array<Livro> = [
    new Livro(1, 1, "Use a Cabeça: Java", "Use a Cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos (00) e Java.", ["Bert Bates", "Kathy Sierra"]),
    new Livro(2, 2, "Java, como Programar", "Milhões de alunos e profissionais aprenderam programação e desenvolvimento de software com os livros Deitel", ["Paul Deitel", "Harvey Deitel"]),
    new Livro(3, 3, " Core Java for the Impatient", `eaders familiar with Horstmann's original, two-volume "Core Java" books who are looking for a comprehensive, but condensed guide to all of the new features and functions of Java SE 9 will learn how these new features impact the language and core libraries.`, ["Cay Horstmann"]),
  ];
  
  class ControleLivros {
    obterLivros(): Array<Livro> {
      return livros;
    }
  
    incluir(livro: Livro): void {
      const novoCodigo = this.obterNovoCodigo();
      livro.codigo = novoCodigo;
      livros.push(livro);
    }
  
    excluir(codigo: number): void {
      const index = livros.findIndex((livro) => livro.codigo === codigo);
      if (index !== -1) {
        livros.splice(index, 1);
      }
    }
  
    private obterNovoCodigo(): number {
      let novoCodigo = 0;
      for (const livro of livros) {
        if (livro.codigo > novoCodigo) {
          novoCodigo = livro.codigo;
        }
      }
      return novoCodigo + 1;
    }
  }
  
  export default ControleLivros;
