import { useState, useEffect } from 'react';
import ProdutoCard from './ProdutoCard';
import './App.css';

const produtosIniciaisMock = [
  {
    id: 1,
    nome: 'Xbox One S 500GB',
    preco: 1399.0,
    descricao: 'Console versátil com suporte a mídia digital e conteúdos em 4K/HDR.',
    imagem:
      'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 2,
    nome: 'Xbox Series S 512GB',
    preco: 2899.0,
    descricao: 'Desempenho de nova geração totalmente digital em tamanho compacto.',
    imagem:
      'https://images.unsplash.com/photo-1605901309584-818e25960f8f?auto=format&fit=crop&w=500&q=80',
  },
];

export default function App() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setProdutos(produtosIniciaisMock);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nome || !preco || !descricao) {
      alert('Por favor, preencha todos os campos obrigatórios!');
      return;
    }

    const novoProduto = {
      id: Date.now(),
      nome,
      preco: Number(preco),
      descricao,
      imagem:
        imagem ||
        'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&w=500&q=80',
    };

    setProdutos([...produtos, novoProduto]);
    setNome('');
    setPreco('');
    setDescricao('');
    setImagem('');
  };

  if (loading) {
    return <div className="loading">Carregando catálogo do Xbox...</div>;
  }

  return (
    <div className="app">
      <h1>Catálogo de Produtos Xbox</h1>

      <form onSubmit={handleSubmit}>
        <h2>Cadastrar Novo Item</h2>
        <input
          type="text"
          placeholder="Nome do produto *"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          type="number"
          step="0.01"
          placeholder="Preço (R$) *"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
          required
        />
        <textarea
          placeholder="Descrição do produto *"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="URL da Imagem (Opcional)"
          value={imagem}
          onChange={(e) => setImagem(e.target.value)}
        />
        <button type="submit">Adicionar ao Catálogo</button>
      </form>

      <div className="produtos-grid">
        {produtos.map((produto) => (
          <ProdutoCard
            key={produto.id}
            nome={produto.nome}
            preco={produto.preco}
            descricao={produto.descricao}
            imagem={produto.imagem}
          />
        ))}
      </div>
    </div>
  );
}
