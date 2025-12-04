import type { Node, Edge } from '@xyflow/react';

export type CourseData = {
  label: string;
  code: string;
  status: 'aprovado' | 'cursando' | 'pendente' | 'trancado';
};

export type CourseNode = Node<CourseData, 'course'>;

const position = { x: 0, y: 0 };

export const initialNodes: CourseNode[] = [
  // --- 1º PERÍODO ---
  { id: 'GAN00167', type: 'course', position, data: { code: 'GAN00167', label: 'Matemática Discreta', status: 'aprovado' } },
  { id: 'GGM00137', type: 'course', position, data: { code: 'GGM00137', label: 'Fund. de Cálculo e Geometria', status: 'aprovado' } },
  { id: 'TCC00296', type: 'course', position, data: { code: 'TCC00296', label: 'Fund. Arquiteturas Comp.', status: 'aprovado' } },
  { id: 'TCC00308', type: 'course', position, data: { code: 'TCC00308', label: 'Programação de Comp. I', status: 'aprovado' } },
  { id: 'TCC00346', type: 'course', position, data: { code: 'TCC00346', label: 'Lab. Resolução Problemas', status: 'aprovado' } },

  // --- 2º PERÍODO ---
  { id: 'GAN00140', type: 'course', position, data: { code: 'GAN00140', label: 'Álgebra Linear', status: 'cursando' } },
  { id: 'GMA00154', type: 'course', position, data: { code: 'GMA00154', label: 'Cálculo I', status: 'aprovado' } },
  { id: 'TCC00301', type: 'course', position, data: { code: 'TCC00301', label: 'Lab. Prog. Jogos', status: 'aprovado' } },
  { id: 'TCC00347', type: 'course', position, data: { code: 'TCC00347', label: 'Programação Estruturada', status: 'aprovado' } },
  { id: 'TET00347', type: 'course', position, data: { code: 'TET00347', label: 'Circuitos Digitais', status: 'aprovado' } },

  // --- 3º PERÍODO ---
  { id: 'GAN00166', type: 'course', position, data: { code: 'GAN00166', label: 'Lógica p/ Comp.', status: 'cursando' } },
  { id: 'GF100158', type: 'course', position, data: { code: 'GF100158', label: 'Física I', status: 'pendente' } },
  { id: 'GMA00155', type: 'course', position, data: { code: 'GMA00155', label: 'Cálculo II', status: 'cursando' } },
  { id: 'TCC00286', type: 'course', position, data: { code: 'TCC00286', label: 'Arq. Computadores', status: 'pendente' } },
  { id: 'TCC00328', type: 'course', position, data: { code: 'TCC00328', label: 'Prog. Orientada a Objetos', status: 'aprovado' } },
  { id: 'TCC00348', type: 'course', position, data: { code: 'TCC00348', label: 'Estruturas de Dados', status: 'aprovado' } },

  // --- 4º PERÍODO ---
  { id: 'GET00177', type: 'course', position, data: { code: 'GET00177', label: 'Estatística Básica', status: 'pendente' } },
  { id: 'TCC00287', type: 'course', position, data: { code: 'TCC00287', label: 'Banco de Dados I', status: 'aprovado' } },
  { id: 'TCC00292', type: 'course', position, data: { code: 'TCC00292', label: 'Engenharia de Software I', status: 'aprovado' } },
  { id: 'TCC00304', type: 'course', position, data: { code: 'TCC00304', label: 'Linguagens de Prog.', status: 'pendente' } },
  { id: 'TCC00306', type: 'course', position, data: { code: 'TCC00306', label: 'Métodos Numéricos', status: 'pendente' } },
  { id: 'TCC00316', type: 'course', position, data: { code: 'TCC00316', label: 'Sistemas Operacionais', status: 'pendente' } },

  // --- 5º PERÍODO ---
  { id: 'TCC00226', type: 'course', position, data: { code: 'TCC00226', label: 'Desenvolvimento Web', status: 'pendente' } },
  { id: 'TCC00285', type: 'course', position, data: { code: 'TCC00285', label: 'Análise de Algoritmos', status: 'pendente' } },
  { id: 'TCC00288', type: 'course', position, data: { code: 'TCC00288', label: 'Banco de Dados II', status: 'pendente' } },
  { id: 'TCC00312', type: 'course', position, data: { code: 'TCC00312', label: 'Projeto de Software', status: 'pendente' } },
  { id: 'TCC00313', type: 'course', position, data: { code: 'TCC00313', label: 'Redes de Comp. I', status: 'pendente' } },
  { id: 'TCC00349', type: 'course', position, data: { code: 'TCC00349', label: 'Avaliação de Desempenho', status: 'pendente' } },

  // --- 6º PERÍODO ---
  { id: 'TCC00284', type: 'course', position, data: { code: 'TCC00284', label: 'Algoritmos em Grafos', status: 'pendente' } },
  { id: 'TCC00291', type: 'course', position, data: { code: 'TCC00291', label: 'Computação Gráfica', status: 'pendente' } },
  { id: 'TCC00293', type: 'course', position, data: { code: 'TCC00293', label: 'Engenharia de Software II', status: 'cursando' } },
  { id: 'TCC00305', type: 'course', position, data: { code: 'TCC00305', label: 'Linguagens Formais', status: 'pendente' } },
  { id: 'TCC00307', type: 'course', position, data: { code: 'TCC00307', label: 'Programação Científica', status: 'pendente' } },
  { id: 'TCC00314', type: 'course', position, data: { code: 'TCC00314', label: 'Redes de Comp. II', status: 'pendente' } },

  // --- 7º PERÍODO ---
  { id: 'TCC00289', type: 'course', position, data: { code: 'TCC00289', label: 'Compiladores', status: 'pendente' } },
  { id: 'TCC00297', type: 'course', position, data: { code: 'TCC00297', label: 'Inteligência Artificial', status: 'pendente' } },
  { id: 'TCC00298', type: 'course', position, data: { code: 'TCC00298', label: 'Interface Homem-Máquina', status: 'pendente' } },
  { id: 'TCC00315', type: 'course', position, data: { code: 'TCC00315', label: 'Sistemas Distribuídos', status: 'pendente' } },
  { id: 'TCC00318', type: 'course', position, data: { code: 'TCC00318', label: 'Pesquisa Operacional', status: 'pendente' } },
  { id: 'TCC00344', type: 'course', position, data: { code: 'TCC00344', label: 'Prog. Paralela I', status: 'pendente' } },
  { id: 'TCC00351', type: 'course', position, data: { code: 'TCC00351', label: 'Projeto Final I', status: 'pendente' } },

  // --- 8º PERÍODO ---
  { id: 'TCC00290', type: 'course', position, data: { code: 'TCC00290', label: 'Computação e Sociedade', status: 'pendente' } },
  { id: 'TCC00352', type: 'course', position, data: { code: 'TCC00352', label: 'Projeto Final II', status: 'pendente' } },
];

export const initialEdges: Edge[] = [
  // --- PRÉ-REQUISITOS ---
  
  // 2º Período
  { id: 'e-GGM00137-GAN00140', source: 'GGM00137', target: 'GAN00140' }, // Fund. Calc -> Algebra
  { id: 'e-TCC00308-TCC00301', source: 'TCC00308', target: 'TCC00301' }, // Prog I -> Jogos
  { id: 'e-TCC00308-TCC00347', source: 'TCC00308', target: 'TCC00347' }, // Prog I -> Prog Est
  { id: 'e-TCC00296-TET00347', source: 'TCC00296', target: 'TET00347' }, // Fund Arq -> Circuitos

  // 3º Período
  { id: 'e-GAN00167-GAN00166', source: 'GAN00167', target: 'GAN00166' }, // Discreta -> Lógica
  { id: 'e-GMA00154-GF100158', source: 'GMA00154', target: 'GF100158' }, // Calc 1 -> Fisica 1
  { id: 'e-GAN00140-GMA00155', source: 'GAN00140', target: 'GMA00155' }, // Algebra -> Calc 2
  { id: 'e-GMA00154-GMA00155', source: 'GMA00154', target: 'GMA00155' }, // Calc 1 -> Calc 2
  { id: 'e-TET00347-TCC00286', source: 'TET00347', target: 'TCC00286' }, // Circuitos -> Arq Comp
  { id: 'e-TCC00347-TCC00328', source: 'TCC00347', target: 'TCC00328' }, // Prog Est -> POO
  { id: 'e-TCC00347-TCC00348', source: 'TCC00347', target: 'TCC00348' }, // Prog Est -> Estruturas

  // 4º Período
  { id: 'e-GMA00155-GET00177', source: 'GMA00155', target: 'GET00177' }, // Calc 2 -> Estatistica
  { id: 'e-TCC00348-TCC00287', source: 'TCC00348', target: 'TCC00287' }, // Estruturas -> BD 1
  { id: 'e-TCC00328-TCC00292', source: 'TCC00328', target: 'TCC00292' }, // POO -> Eng Soft 1
  { id: 'e-TCC00347-TCC00304', source: 'TCC00347', target: 'TCC00304' }, // Prog Est -> Linguagens
  { id: 'e-GAN00166-TCC00304', source: 'GAN00166', target: 'TCC00304' }, // Logica -> Linguagens
  { id: 'e-TCC00308-TCC00306', source: 'TCC00308', target: 'TCC00306' }, // Prog I -> Metodos Num
  { id: 'e-GAN00140-TCC00306', source: 'GAN00140', target: 'TCC00306' }, // Algebra -> Metodos Num
  { id: 'e-GMA00154-TCC00306', source: 'GMA00154', target: 'TCC00306' }, // Calc 1 -> Metodos Num
  { id: 'e-TCC00286-TCC00316', source: 'TCC00286', target: 'TCC00316' }, // Arq Comp -> SO

  // 5º Período
  { id: 'e-TCC00328-TCC00226', source: 'TCC00328', target: 'TCC00226' }, // POO -> Web
  { id: 'e-TCC00287-TCC00226', source: 'TCC00287', target: 'TCC00226' }, // BD 1 -> Web
  { id: 'e-GAN00167-TCC00285', source: 'GAN00167', target: 'TCC00285' }, // Discreta -> PAA
  { id: 'e-TCC00348-TCC00285', source: 'TCC00348', target: 'TCC00285' }, // Estruturas -> PAA
  { id: 'e-TCC00287-TCC00288', source: 'TCC00287', target: 'TCC00288' }, // BD 1 -> BD 2
  { id: 'e-TCC00292-TCC00312', source: 'TCC00292', target: 'TCC00312' }, // Eng Soft 1 -> Proj Soft
  { id: 'e-TCC00316-TCC00313', source: 'TCC00316', target: 'TCC00313' }, // SO -> Redes 1
  { id: 'e-GET00177-TCC00349', source: 'GET00177', target: 'TCC00349' }, // Estatistica -> Aval Desempenho

  // 6º Período
  { id: 'e-TCC00285-TCC00284', source: 'TCC00285', target: 'TCC00284' }, // PAA -> Grafos
  { id: 'e-GAN00140-TCC00284', source: 'GAN00140', target: 'TCC00284' }, // Algebra -> Grafos
  { id: 'e-TCC00348-TCC00291', source: 'TCC00348', target: 'TCC00291' }, // Estruturas -> CG
  { id: 'e-TCC00292-TCC00293', source: 'TCC00292', target: 'TCC00293' }, // Eng Soft 1 -> Eng Soft 2
  { id: 'e-GAN00166-TCC00305', source: 'GAN00166', target: 'TCC00305' }, // Logica -> Linguagens Formais
  { id: 'e-TCC00306-TCC00307', source: 'TCC00306', target: 'TCC00307' }, // Metodos Num -> Prog Cientifica
  { id: 'e-TCC00313-TCC00314', source: 'TCC00313', target: 'TCC00314' }, // Redes 1 -> Redes 2

  // 7º Período
  { id: 'e-TCC00348-TCC00289', source: 'TCC00348', target: 'TCC00289' }, // Estruturas -> Compiladores
  { id: 'e-TCC00304-TCC00289', source: 'TCC00304', target: 'TCC00289' }, // Linguagens -> Compiladores
  { id: 'e-TCC00305-TCC00289', source: 'TCC00305', target: 'TCC00289' }, // Formais -> Compiladores
  { id: 'e-GAN00166-TCC00297', source: 'GAN00166', target: 'TCC00297' }, // Logica -> IA
  { id: 'e-TCC00348-TCC00297', source: 'TCC00348', target: 'TCC00297' }, // Estruturas -> IA
  { id: 'e-TCC00292-TCC00298', source: 'TCC00292', target: 'TCC00298' }, // Eng Soft 1 -> IHM
  { id: 'e-TCC00316-TCC00315', source: 'TCC00316', target: 'TCC00315' }, // SO -> Sist Dist
  { id: 'e-GAN00140-TCC00318', source: 'GAN00140', target: 'TCC00318' }, // Algebra -> Pesq Op
  { id: 'e-TCC00347-TCC00318', source: 'TCC00347', target: 'TCC00318' }, // Prog Est -> Pesq Op
  { id: 'e-TCC00348-TCC00344', source: 'TCC00348', target: 'TCC00344' }, // Estruturas -> Paralela
  { id: 'e-TCC00316-TCC00344', source: 'TCC00316', target: 'TCC00344' }, // SO -> Paralela
  
  // Projeto Final 1 (Requer estatística e BD1 explicitamente + periodos)
  { id: 'e-GET00177-TCC00351', source: 'GET00177', target: 'TCC00351' }, 
  { id: 'e-TCC00287-TCC00351', source: 'TCC00287', target: 'TCC00351' },

  // 8º Período
  { id: 'e-TCC00351-TCC00352', source: 'TCC00351', target: 'TCC00352' }, // PF1 -> PF2
];