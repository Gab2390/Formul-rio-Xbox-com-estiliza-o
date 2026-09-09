import ProdutoCard from "./components/ProdutoCard";

function App() {
    const handleAdicionar = () => {
        alert("Adicionado!");
    };

    return (
        <main>
            <h1>Resumo da Obra</h1>

            <ProdutoCard
                nome="Camiseta"
                preco="59,90"
                adicionado={false}
                aoAdicionar={handleAdicionar}
            />
        </main>
    );
}

export default App;
