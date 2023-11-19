import React from "react";
import useFetch from './useFetch'
import './App.css'

type Produto = {
  id: string;
  nome: string;
  preco: number;
  quantidade: number;
  descricao: string;
  internacional: boolean;
}

function App() {
  const [id, setId] = React.useState("p001");

  const produtos = useFetch<Produto[]>('https://data.origamid.dev/produtos/');
  console.log(produtos);
  
  const produto = useFetch<Produto>(
    `https://data.origamid.dev/produtos/${id}`,
    {
      cache: "force-cache",
    },
  );

  return (
    <>
    <section className="flex">
      <div className="buttons-div">
        {produtos.data &&
          produtos.data.map((produto) => (
            <button
              onClick={() => setId(produto.id)}
              style={{ fontSize: "1rem" }}
              key={produto.id}
            >
              {produto.id}
            </button>
          ))}
      </div>
      <div className="data-div">
        {produto.loading && <div>Carregando...</div>}
        {produto.data && (
          <ul>
            <li>ID: {produto.data.id}</li>
            <li>Nome: {produto.data.nome}</li>
            <li>Descrição: {produto.data.descricao}</li>
            <li>Quantidade: {produto.data.quantidade}</li>
          </ul>
        )}
      </div>
    </section>
   </>
  )
}

export default App
