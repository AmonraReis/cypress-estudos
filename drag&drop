Fala galera!

Vocês sabem como implementar um drag and drop com cypress? temos duas formas, uma utilizando um plugin para facilitar o desenvolvimento e a outra alternativa que não requer a instalação de plugin porém consume mais linhas no código.

Neste post irei mostrar como realizar com o plugin, vem comigo que é bem simples, segue o fio 👇 🧵



A instalação é simples, coloque o comando "𝘯𝘱𝘮 𝘪𝘯𝘴𝘵𝘢𝘭𝘭 --𝘴𝘢𝘷𝘦-𝘥𝘦𝘷 @4𝘵𝘸/𝘤𝘺𝘱𝘳𝘦𝘴𝘴-𝘥𝘳𝘢𝘨-𝘥𝘳𝘰𝘱" no seu terminal.

No spec, coloque "𝘳𝘦𝘲𝘶𝘪𝘳𝘦 ( '@4𝘵𝘸/𝘤𝘺𝘱𝘳𝘦𝘴𝘴-𝘥𝘳𝘢𝘨-𝘥𝘳𝘰𝘱' )"


  it('Deve arrastar', () => {

    cy.get('#winston').drag('#dropzone').then((success) => {

    assert.isTrue(success)});
  })

  });

A interação de drag e stop será sempre entre dois elementos, um source outro target.

No exemplo acima temos o elemento "#winston" que é o source e o elemento "#dropzone" o target.

E por fim utilizamos o ".then((success) => {

assert.isTrue(success)" para realizar a validação.

Site usado para a automação: https://lnkd.in/dhS8bCcj
Documentação do plugin: https://lnkd.in/drn6w8sp


>https://www.linkedin.com/feed/update/urn:li:activity:6993644191301922816/
