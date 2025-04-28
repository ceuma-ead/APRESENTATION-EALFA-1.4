class ControllerDatabase {
    static instances = new Map();

    constructor(databaseNameOrCollection) {
        // Se for uma coleção existente, usa ela
        if (databaseNameOrCollection instanceof LDB.Collection) {
            this.collection = databaseNameOrCollection;
            this.databaseName = this.collection.name;
        }
        // Se for string, cria nova coleção
        else if (typeof databaseNameOrCollection === 'string') {
            this.databaseName = databaseNameOrCollection;
            this.collection = new LDB.Collection(databaseNameOrCollection);
        } else {
            throw new Error('É necessário fornecer um nome ou uma coleção existente');
        }

        ControllerDatabase.instances.set(this.databaseName, this);
    }

    // Métodos de Criação
    async criar(dados) {
        return new Promise((resolve, reject) => {
            try {
                this.collection.save(dados, (resultado) => {
                    resolve(resultado);
                });
            } catch (erro) {
                reject(erro);
            }
        });
    }

    async criarVarios(arrayDados) {
        return new Promise((resolve, reject) => {
            try {
                this.collection.save(arrayDados, (resultados) => {
                    resolve(resultados);
                });
            } catch (erro) {
                reject(erro);
            }
        });
    }

    // Métodos de Busca
    async buscarTodos() {
        return new Promise((resolve, reject) => {
            try {
                this.collection.find({}, (resultados) => {
                    resolve(resultados);
                });
            } catch (erro) {
                reject(erro);
            }
        });
    }

    async buscarPorId(id) {
        return new Promise((resolve, reject) => {
            try {
                this.collection.find({ id: id }, (resultados) => {
                    resolve(resultados[0] || null);
                });
            } catch (erro) {
                reject(erro);
            }
        });
    }

    async buscarPorFiltro(filtro) {
        return new Promise((resolve, reject) => {
            try {
                this.collection.find(filtro, (resultados) => {
                    resolve(resultados);
                });
            } catch (erro) {
                reject(erro);
            }
        });
    }

    // Métodos de Atualização
    async atualizar(filtro, novosDados) {
        return new Promise((resolve, reject) => {
            try {
                this.collection.find(filtro, (resultados) => {
                    resultados.forEach(item => {
                        Object.assign(item, novosDados);
                        item.save();
                    });
                    resolve(resultados);
                });
            } catch (erro) {
                reject(erro);
            }
        });
    }

    async atualizarPorId(id, novosDados) {
        return this.atualizar({ id: id }, novosDados);
    }

    // Métodos de Deleção
    async deletar(filtro) {
        return new Promise((resolve, reject) => {
            try {
                this.collection.find(filtro, (resultados) => {
                    resultados.forEach(item => item.delete());
                    resolve(resultados.length);
                });
            } catch (erro) {
                reject(erro);
            }
        });
    }

    async deletarPorId(id) {
        return this.deletar({ id: id });
    }

    async limparColecao() {
        this.collection.drop();
        return true;
    }

    // Métodos de Verificação
    async existe(filtro) {
        return new Promise((resolve) => {
            this.collection.find(filtro, (resultados) => {
                resolve(resultados.length > 0);
            });
        });
    }

    async existeDatabase() {
        const dados = await this.buscarTodos();
        return dados && dados.length > 0;
    }

    // Métodos Estáticos
    static criar(databaseName, dados = null) {
        const db = new ControllerDatabase(databaseName);
        if (dados) {
            db.criar(dados);
        }
        return db;
    }

    static obterInstancia(databaseName) {
        return ControllerDatabase.instances.get(databaseName);
    }

    static listarDatabases() {
        return LDB.showCollections();
    }

    static limparTudo() {
        LDB.clear();
        ControllerDatabase.instances.clear();
    }
}


// Banco de Dados de configurações Cliente
const __configuracoesDb__ = new ControllerDatabase(configuracoesDB);

//Criar bancos pre-definidos
async function __criarBancoCasoNaoExista() {
    // Buscar dados existentes
    const registrado__woeiwdskj2938dsw2398qwei2ks = await __configuracoesDb__.buscarPorId(1);

    // Se não existe o registro, criar
    if (!registrado__woeiwdskj2938dsw2398qwei2ks) {
        await __configuracoesDb__.criar({
            id: 1,
            leitorTela: true,
            // dataCriacao: new Date()
        });

    }
}

__criarBancoCasoNaoExista();