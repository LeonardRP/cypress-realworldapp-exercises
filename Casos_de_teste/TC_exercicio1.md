# Casos de Teste — Exercício 1

**Aplicação:** Real World App  
----

**Nome do Caso:** Registro de usuário com sucesso  

**Objetivo:** Verificar se o sistema permite o cadastro de um novo usuário com informações válidas.  
**Pré-condições:** Aplicação acessível na tela de cadastro.  
**Passos:**  
1. Acessar a tela de cadastro.  
2. Inserir nome.  
3. Inserir sobrenome.  
4. Inserir username.  
5. Inserir senha.  
6. Confirmar senha.  
7. Clicar em "Sign Up".  
**Resultado esperado:** Usuário é criado com sucesso e redirecionado para a página inicial.  

----

**Nome do Caso:** Registro com campos obrigatórios vazios  

**Objetivo:** Validar exibição de mensagens de erro ao tentar cadastrar sem preencher os campos obrigatórios.  
**Pré-condições:** Aplicação acessível na tela de cadastro.  
**Passos:**  
1. Acessar a tela de cadastro.
2. Não preencher nenhum campo.
3. Clicar em "Sign Up".  
**Resultado esperado:** Sistema exibe mensagens informando que os campos são obrigatórios.  

----

**Nome do Caso:** Login com sucesso  

**Objetivo:** Verificar se o sistema permite autenticação com credenciais válidas.  
**Pré-condições:** Usuário já cadastrado.
**Passos:**  
1. Acessar a tela de login.
2. Inserir username válido.
3. Inserir senha válida.
4. Clicar em "Sign In". 
**Resultado esperado:** Usuário autenticado e redirecionado para a página inicial. 

----

**Nome do Caso:** Login com credenciais inválidas  

**Objetivo:** Validar tratamento de erro ao tentar login com credenciais inválida.  
**Pré-condições:** Aplicação acessível na tela de login.  
**Passos:**  
1. Acessar a tela de login.
2. Inserir username inválido.
3. Inserir senha inválida.
4. Clicar em "Sign In".
**Resultado esperado:** Sistema exibe mensagem de erro indicando credenciais inválidas.

----