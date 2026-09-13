import { useState } from 'react';
import ProdutoCard from './ProdutoCard';

export default function App() {
    const [adicionado, setAdicionado] = useState(false);

    return (
        <main style={{ padding: '20px' }}>
            <h1>Catálogo de Produtos</h1>
            <ProdutoCard
                nome="Fone de Ouvido Bluetooth"
                preco="199,90"
                adicionado={adicionado}
                aoAdicionar={() => setAdicionado(!adicionado)}
            />
        </main>
    );
}
