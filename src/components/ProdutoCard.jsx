export default function ProdutoCard({ nome, preco, adicionado, aoAdicionar }) {
  return (
    <article className="produto-card">
      <h2>{nome}</h2>
      <p>R$ {preco}</p>
      <button onClick={aoAdicionar} type="button">
        {adicionado ? "Adicionado" : "Adicionar"}
      </button>
    </article>
  );
}