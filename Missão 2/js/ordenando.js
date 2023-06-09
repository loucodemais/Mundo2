const add = () => {
    const valor = document.getElementById('valor').value;
    const lista = document.getElementById('valores');
    const node = document.createElement('li');
    const textNode = document.createTextNode(valor);
    node.appendChild(textNode);
    lista.appendChild(node);
  }
  
const ordenar = () => {
    const lista = document.getElementById('valores');
    const select = document.getElementById('selecao');
    const valores = Array.from(lista.children).map(item => parseInt(item.innerHTML));
    const algoritmo = select.options[select.selectedIndex].value;
    switch (algoritmo) {
        case "0":
        bubble_sort(valores);
        break;
        case "1":
        selection_sort(valores);
        break;
        case "2":
        quick_sort(valores, 0, valores.length - 1);
        break;
        default:
        break;
    }
    const listaNova = valores.map(valor => `<li>${valor}</li>`).join('');
    lista.innerHTML = listaNova;
}
  
const misturar = () => {
    const lista = document.getElementById('valores');
    const valores = Array.from(lista.children).map(item => parseInt(item.innerHTML));
    shuffle(valores, valores.length);
    const listaNova = valores.map(valor => `<li>${valor}</li>`).join('');
    lista.innerHTML = listaNova;
}

const swap = (vetor, pos1, pos2) => {
    [vetor[pos1], vetor[pos2]] = [vetor[pos2], vetor[pos1]];
}

const shuffle = (vetor, trocas) => {
    for (let i = 0; i < trocas; i++) {
        const pos1 = Math.floor(Math.random() * vetor.length);
        const pos2 = Math.floor(Math.random() * vetor.length);
        swap(vetor, pos1, pos2);
    }
}

const bubble_sort = (vetor) => {
    const tamanho = vetor.length;
    for (let i = 0; i < tamanho - 1; i++) {
        for (let j = 0; j < tamanho - i - 1; j++) {
        if (vetor[j] > vetor[j + 1]) {
            swap(vetor, j, j + 1);
        }
        }
    }
}

const selection_sort = (vetor) => {
    const tamanho = vetor.length;
    for (let i = 0; i < tamanho - 1; i++) {
        let menor = i;
        for (let j = i + 1; j < tamanho; j++) {
        if (vetor[j] < vetor[menor]) {
            menor = j;
        }
        }
        swap(vetor, i, menor);
    }
}

const quick_sort = (vetor, inicio, fim) => {
    if (inicio < fim) {
        const pivotIndex = particionamento(vetor, inicio, fim);
        quick_sort(vetor, inicio, pivotIndex - 1);
        quick_sort(vetor, pivotIndex + 1, fim);
    }
}

const particionamento = (vetor, inicio, fim) => {
    const pivot = vetor[fim];
    let i = inicio - 1;
    for (let j = inicio; j < fim; j++) {
        if (vetor[j] < pivot) {
            i++;
            swap(vetor, i, j);
        }
    }
    swap(vetor, i + 1, fim);
    return i + 1;
}