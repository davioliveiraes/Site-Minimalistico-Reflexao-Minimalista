let reflexao = [
  "O QUE VOCÊ VÊ É O QUE VOCÊ VÊ. - FRANK STELA",
  "SEMPRE TIVE INTERESSE EM USAR MATERIAIS BRUTOS, INTOCADOS, AO INVÉS DE TRANSFORMAR O FORMATO E A FORMA DE UM OBJETO. - JOSE DÁVILA",
  "O MINIMALISTA NÃO É LIBERDADE DOS BENS MATERIAIS, MAS SIM, O FIM DA NECESSIDADE DAS COISAS DESNECESSÁRIAS. - GIO PORTELLA",
  "É QUE É, E NADA MAIS. - DAN FLAVIN",
  "SIMPLICIDADE É A MÁXIMA SOFISTICAÇÃO. - LEONARDO DA VINCI",
  "CONFORME VOCÊ SELECIONA E REDUZ SUAS COISAS, VOCÊ SE ENTENDE MELHOR. - FUMIO SASAKI",
  "MINIMALISMO NÃO É FALTA DE ALGO. É SIMPLESMENTE A QUANTIDADE PERFEITA DE ALGUMA COISA. - NICHOLAS BURROUGHS",
  "DIZER TUDO COM QUASE NADA, É MAXIMIZAR O MINIMALISMO. - ALEXANDRE JOSÉ PERISCINOTO",
  "EXISTE UMA NATUREZA POÉTICA NO MINIMALISMO QUE É SOBRE O EQUILÍBRO ENTRE O CHEIO E O VÁZIO. - JENNIE C. JONES",
  "O QUE É CENTRAL E O QUE É FUNDAMENTAL PARA VOCÊ. ACHO QUE ESSA É A ESSÊNCIA DO MINIMALISMO. - FUMIO SASAKI",
  "APRENDI QUE A SIMPLICIDADE É A MELHOR DECORAÇÃO. - ISABELA CANTIERI",
  "EU NÃO PRECISO DE MUITO PARA VIVER, PRECISO SOMENTE DAS COISAS CERTAS. - ISABELA CANTIERI",
  "SER MINIMALISMO É FAZER O BEM PARA SI MESMO E PARA O MUNDO. - ISABELA CANTIERI",
  "SEM DÚVIDA, O TRABALHO ÁRDUO É IMPORTANTE. PORÉM, MAIS ESFORÇO NÃO NECESSARIAMENTE MAIS RESULTADOS. - LIVRO ESSENCIALISMO DE GREG MCKEOWN",
  "DIZER SIM A UMA OPORTUNIDADE DE NOS ENTEDIAR TAMBÉM ABRIMOS MÃO DO TEMPO PARA PENSAR E PROCESSAR. - LIVRO ESSENCIALISMO DE GREG MCKEOWN",
  "A SABEDORIA DA VIDA CONSISTE EM ELIMINAR O QUE NÃO É ESSENCIAL. - LIVRO ESSENCIALISMO DE GREG MCKEOWN",
  "O LÁPIS MAIS FORTE É MELHOR QUE A MEMÓRIA MAIS FORTE. - LIVRO ESSENCIALISMO DE GREG MCKEOWN",
  "OS ESSENCIALISTAS VEEM AS SOLUÇÕES DE CONCESSÃO COMO PARTE INERANTE DA VIDA, NÃO COMO ALGO NEGATIVO. EM VEZ DE INDAGAR: DO QUE EU TENHO QUE ABRIR MÃO?, PERGUNTAM: EM QUE EU QUERO INVESTIR TUDO?. O IMPACTO COMULATIVO DESSA PEQUENA MUDANÇA DE PONTO DE VISTA PODE SER PROFUNDO. - GREG MCKEOWN",
  "EMBORA NEM SEMPRE TENHAMOS CONTROLE SOBRE AS OPÇÕES, SEMPRE TEMOS CONTROLE SOBRE QUAL DELAS ESCOLHEMOS. - GREG MCKEOWN",
  "SE É DIFÍCIL CONSEGUIR A DETERMINAÇÃO NECESSÁRIA PARA SEGUIR O CAMINHO CERTO, VALE A PENA REFLETIR SOBRE A BREVIDADE DA VIDA E O QUE QUEREMOS REALIZAR NO POUCO TEMPO QUE NOS RESTA. - GREG MCKEOWN",
  "OS ESSENCIALISMO PASSAM O MAIOR TEMPO POSSÍVEL EXPLORANDO, EXCUTANDO, DEBATENDO, QUESTIONANDO E PENSANDO. MAS ESSA EXPLORAÇÃO NÃO É UM FIM EM SI. SEU PROPÓSITO É DISCERNIR AS POUCAS QUESTÕES VITAIS, DAS MUITAS TRIVIAIS. - GREG MCKEOWN",
  "QUANDO MUITAS TAREFAS SÃO PRIORITÁRIAS, PARECE QUE NENHUMA É. - LIVRO ESSENCIALISMO DE GREG MCKEOWN",
  "QUANDO ABONDONAMOS NOSSO DIREITO DE ESCOLHER, OS OUTROS ESCOLHEM POR NÓS. - LIVRO ESSENCIALISMO DE GREG MCKEOWN",
  "TUDO É POSSÍVEL, MAS NEM TUDO É NECESSÁRIO."
]

function geradorReflex() {
  let reflexoes = reflexao[Math.floor(Math.random() * reflexao.length)]

  let containeH = document.getElementById("gerador-reflexao")

  document.querySelector("#gerador-reflexao").textContent = reflexoes
  containeH.classList.remove("hide")
}
