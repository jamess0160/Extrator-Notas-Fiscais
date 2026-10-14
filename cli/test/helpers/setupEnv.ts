/**
 * Desliga o cache em disco de CNPJ para toda a suíte.
 *
 * Sem isso os testes escreveriam em `~/.extrator-nfe/cnpj.json` na máquina de quem roda, e — pior
 * — uma execução contaminaria a seguinte: as asserções que contam requisições ao servidor falso
 * passariam a ver zero, porque o cache já traria a resposta. O cache tem teste próprio, que
 * aponta para um diretório temporário.
 */
process.env.CNPJ_CACHE = "off"
