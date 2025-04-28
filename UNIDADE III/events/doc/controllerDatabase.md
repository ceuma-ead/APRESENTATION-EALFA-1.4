# ControllerDatabase - Documentação

## 📋 Índice

- [Instalação](#instalação)
- [Configuração Básica](#configuração-básica)
- [Métodos](#métodos)
  - [Criação](#métodos-de-criação)
  - [Busca](#métodos-de-busca)
  - [Atualização](#métodos-de-atualização)
  - [Deleção](#métodos-de-deleção)
  - [Verificação](#métodos-de-verificação)
  - [Estáticos](#métodos-estáticos)
- [Exemplos de Uso](#exemplos-de-uso)
- [Casos Práticos](#casos-práticos)

## 💾 Instalação

```html
<!-- LocalDB.js é necessário -->
<script type="text/javascript" src="LocalDB.js"></script>
<script type="text/javascript" src="ControllerDatabase.js"></script>
```

## ⚙️ Configuração Básica

### Criar uma nova instância
```javascript
const dbUsuarios = new ControllerDatabase('usuarios');
```

### Criar com dados iniciais
```javascript
const dbConfig = ControllerDatabase.criar('config', {
    tema: 'dark',
    idioma: 'pt-BR'
});
```

## 🛠️ Métodos

### Métodos de Criação

#### criar(dados)
Cria um novo registro no banco.
```javascript
await dbUsuarios.criar({
    id: 1,
    nome: 'João',
    email: 'joao@email.com'
});
```

#### criarVarios(arrayDados)
Cria múltiplos registros de uma vez.
```javascript
await dbUsuarios.criarVarios([
    { id: 1, nome: 'João' },
    { id: 2, nome: 'Maria' }
]);
```

### Métodos de Busca

#### buscarTodos()
Retorna todos os registros.
```javascript
const usuarios = await dbUsuarios.buscarTodos();
```

#### buscarPorId(id)
Busca um registro específico pelo ID.
```javascript
const usuario = await dbUsuarios.buscarPorId(1);
```

#### buscarPorFiltro(filtro)
Busca registros que correspondem ao filtro.
```javascript
const usuariosAtivos = await dbUsuarios.buscarPorFiltro({
    ativo: true,
    tipo: 'admin'
});
```

### Métodos de Atualização

#### atualizar(filtro, novosDados)
Atualiza registros que correspondem ao filtro.
```javascript
await dbUsuarios.atualizar(
    { tipo: 'admin' },
    { nivel: 'super' }
);
```

#### atualizarPorId(id, novosDados)
Atualiza um registro específico pelo ID.
```javascript
await dbUsuarios.atualizarPorId(1, {
    nome: 'João Silva',
    email: 'joao.silva@email.com'
});
```

### Métodos de Deleção

#### deletar(filtro)
Deleta registros que correspondem ao filtro.
```javascript
await dbUsuarios.deletar({ tipo: 'inativo' });
```

#### deletarPorId(id)
Deleta um registro específico pelo ID.
```javascript
await dbUsuarios.deletarPorId(1);
```

#### limparColecao()
Remove todos os registros da coleção.
```javascript
await dbUsuarios.limparColecao();
```

### Métodos de Verificação

#### existe(filtro)
Verifica se existem registros que correspondem ao filtro.
```javascript
const temAdmin = await dbUsuarios.existe({ tipo: 'admin' });
```

#### existeDatabase()
Verifica se o banco de dados existe.
```javascript
if (dbUsuarios.existeDatabase()) {
    console.log('Banco de usuários existe!');
}
```

### Métodos Estáticos

#### criar(databaseName, dados)
Cria uma nova instância do banco com dados opcionais.
```javascript
const dbConfig = ControllerDatabase.criar('config', {
    versao: '1.0.0'
});
```

#### obterInstancia(databaseName)
Retorna uma instância existente do banco.
```javascript
const dbUsuarios = ControllerDatabase.obterInstancia('usuarios');
```

#### listarDatabases()
Lista todos os bancos de dados existentes.
```javascript
const databases = ControllerDatabase.listarDatabases();
```

#### limparTudo()
Remove todos os bancos de dados.
```javascript
ControllerDatabase.limparTudo();
```

## 📝 Exemplos de Uso

### Sistema de Usuários
```javascript
// Criar banco de usuários
const dbUsuarios = new ControllerDatabase('usuarios');

// Adicionar usuário
await dbUsuarios.criar({
    id: 1,
    nome: 'João',
    email: 'joao@email.com',
    tipo: 'admin'
});

// Buscar usuários administradores
const admins = await dbUsuarios.buscarPorFiltro({ tipo: 'admin' });

// Atualizar usuário
await dbUsuarios.atualizarPorId(1, { status: 'ativo' });

// Deletar usuário
await dbUsuarios.deletarPorId(1);
```

### Sistema de Configurações
```javascript
const dbConfig = new ControllerDatabase('config');

// Salvar configurações
await dbConfig.criar({
    tema: 'dark',
    notificacoes: true,
    idioma: 'pt-BR'
});

// Verificar configuração
const temConfig = await dbConfig.existe({ tema: 'dark' });

// Atualizar configuração
await dbConfig.atualizar({}, { tema: 'light' });
```

### Sistema de Produtos
```javascript
const dbProdutos = new ControllerDatabase('produtos');

// Adicionar produtos
await dbProdutos.criarVarios([
    { id: 1, nome: 'Produto 1', preco: 100 },
    { id: 2, nome: 'Produto 2', preco: 200 }
]);

// Buscar produtos por preço
const produtosCaros = await dbProdutos.buscarPorFiltro({
    preco: { $gt: 150 }
});

// Atualizar preços
await dbProdutos.atualizar(
    { categoria: 'eletrônicos' },
    { desconto: 0.1 }
);
```

## 🎯 Casos Práticos

### 1. Gerenciamento de Sessão
```javascript
class GerenciadorSessao {
    constructor() {
        this.dbSessao = new ControllerDatabase('sessao');
    }

    async iniciarSessao(usuario) {
        await this.dbSessao.criar({
            userId: usuario.id,
            token: this.gerarToken(),
            dataInicio: new Date()
        });
    }

    async verificarSessao(token) {
        return await this.dbSessao.existe({ token });
    }
}
```

### 2. Cache de Dados
```javascript
class CacheManager {
    constructor() {
        this.dbCache = new ControllerDatabase('cache');
    }

    async set(chave, valor, ttl = 3600) {
        await this.dbCache.criar({
            chave,
            valor,
            expira: Date.now() + (ttl * 1000)
        });
    }

    async get(chave) {
        const cache = await this.dbCache.buscarPorFiltro({ chave });
        if (cache[0] && cache[0].expira > Date.now()) {
            return cache[0].valor;
        }
        return null;
    }
}
```

### 3. Sistema de Carrinhos
```javascript
class CarrinhoCompras {
    constructor(userId) {
        this.dbCarrinho = new ControllerDatabase(`carrinho_${userId}`);
    }

    async adicionarItem(produto, quantidade = 1) {
        const item = await this.dbCarrinho.buscarPorFiltro({
            produtoId: produto.id
        });

        if (item[0]) {
            await this.dbCarrinho.atualizar(
                { produtoId: produto.id },
                { quantidade: item[0].quantidade + quantidade }
            );
        } else {
            await this.dbCarrinho.criar({
                produtoId: produto.id,
                nome: produto.nome,
                preco: produto.preco,
                quantidade
            });
        }
    }

    async getTotal() {
        const itens = await this.dbCarrinho.buscarTodos();
        return itens.reduce((total, item) => 
            total + (item.preco * item.quantidade), 0);
    }
}
```

## ⚠️ Boas Práticas

1. Sempre use `async/await` com os métodos do controller
2. Trate erros adequadamente usando try/catch
3. Verifique a existência do banco antes de operações críticas
4. Use IDs únicos para identificar registros
5. Faça backup periódico dos dados importantes
6. Limpe dados obsoletos regularmente