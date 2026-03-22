# Casos de Teste — Exercício 2

**Aplicação:** Real World App  
----

**Nome do Caso:** Enviar dinheiro com saldo suficiente  

**Objetivo:** Verificar se o sistema permite realizar uma transferência com saldo disponível.  
**Pré-condições:** Usuário autenticado e com saldo suficiente.  
**Passos:**  
1. Realizar login.
2. Clicar em "New".
3. Buscar usuário destinatário.
4. Selecionar o usuário.
5. Informar o valor da transferência.
6. Informar uma descrição.
7. Clicar em "Pay". 
**Resultado esperado:** Transferência realizada com sucesso e status "Paid" exibido.  

----

**Nome do Caso:** Enviar dinheiro com saldo insuficiente  

**Objetivo:** Verificar se o sistema impede transferências quando não há saldo suficient.  
**Pré-condições:** Usuário autenticado e com saldo insuficiente.  
**Passos:**  
1. Realizar login.
2. Clicar em "New".
3. Buscar usuário destinatário.
4. Selecionar o usuário.
5. Informar um valor superior ao saldo disponível.
6. Informar uma descrição.
7. Clicar em "Pay". 
**Resultado esperado:** Sistema exibe mensagem de erro indicando saldo insuficiente ("Insufficient funds").   

----