import { useEffect, useState } from "react";
import ProdutoCard from "./ProdutoCard";
import xbox from "../assets/xbox.png";

export default function Home() {
    const [produtos, setProdutos] = useState([
        {
            nome: "Xbox Series X",
            preco: 3500,
            imagem: xbox,
            descricao: "Console Xbox Series X",
        },
    ]);

    const [loading, setLoading] = useState(true);

    // formulário
    const [nomeInput, setNomeInput] = useState("");
    const [precoInput, setPrecoInput] = useState("");
    const [descricaoInput, setDescricaoInput] = useState("");

    function handleCadastrar(e) {
        e.preventDefault();
        const novo = {
            nome: nomeInput || "Sem nome",
            preco: Number(precoInput) || 0,
            imagem: xbox,
            descricao: descricaoInput || "",
        };
        setProdutos((prev) => [novo, ...prev]);
        setNomeInput("");
        setPrecoInput("");
        setDescricaoInput("");
    }

    useEffect(() => {
        const t = setTimeout(() => setLoading(false), 1000);
        document.title = "Home - Produtos";
        return () => clearTimeout(t);
    }, []);

    return (
        <div className="home">
            <h1>Produtos</h1>
            {loading ? (
                <p>Carregando...</p>
            ) : (
                <>
                    <form className="form-cadastro" onSubmit={handleCadastrar}>
                        <div>
                            <label>Nome</label>
                            <input
                                type="text"
                                value={nomeInput}
                                onChange={(e) => setNomeInput(e.target.value)}
                                placeholder="Nome do produto"
                            />
                        </div>
                        <div>
                            <label>Preço</label>
                            <input
                                type="number"
                                value={precoInput}
                                onChange={(e) => setPrecoInput(e.target.value)}
                                placeholder="Preço"
                            />
                        </div>
                        <div>
                            <label>Descrição</label>
                            <textarea
                                value={descricaoInput}
                                onChange={(e) => setDescricaoInput(e.target.value)}
                                placeholder="Descrição do produto"
                            />
                        </div>
                        <button type="submit">Cadastrar</button>
                    </form>

                    <div className="produtos">
                        {produtos.map((produto, index) => (
                            <ProdutoCard
                                key={index}
                                nome={produto.nome}
                                preco={produto.preco}
                                imagem={produto.imagem}
                                descricao={produto.descricao}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}