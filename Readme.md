# API NODEJS COM TYPESCRIPT

## Requisitos
- [x] API em NodeJs e Typescript
- [x] Deve rodar em docker
- [x] Migrations para gerar as tabelas no banco de dados
- [] Testes unitários
- [x] Caso a API seja feita em NodeJS utilizar Express como framework

## Especificação
estrutura de usuários
```
id: string
name: string
sex: 'M' | 'F'
age: integer
hobby: string
birthdate: date
```

## Docker
usando o docker para testar o projeto na porta 9999
```
$ cd ligue
$ docker-composer up
```

## Migrar o banco de dados
```
$ yarn typeorm migration:run
```

## Rodar os testes
```
$ yarn test
```

## Parâmetros para o POST
```
{
    name: string,
    age: int,
    hobby: string,
    sex: 'M' | 'F'
    birthdate: '1988-17-12'
}
```

## Documentação da API com Swagger
```
http://localhost:9999/api-docs
```


## API endpoints
```
GET /developers
```
Retorna todos os desenvolvedores
```
GET /developers/filter?
```
Retorna os desenvolvedores de acordo com o termo passado via querystring e paginação
```
GET /developers/{id}
```
Retorna os dados de um desenvolvedor
```
POST /developers
```
Adiciona um novo desenvolvedor
```
PUT /developers/{id}
```
Atualiza os dados de um desenvolvedor
```
DELETE /developers/{id}
```
Apaga o registro de um desenvolvedor

