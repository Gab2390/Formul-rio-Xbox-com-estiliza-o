import React, { useState } from 'react';
import { CardProduto } from './components/CardProduto';

export function App() {
  // Estado para controlar se o produto foi adicionado ou não
  const [adicionado, setAdicionado] = useState(false);

  const handleToggleCarrinho = () => {
    setAdicionado((prev) => !prev);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
      <CardProduto
        nome="Controle Xbox Wireless"
        preco="R$ 449,90"
        adicionado={adicionado}
        onToggleCarrinho={handleToggleCarrinho}
      />
    </div>
  );
}

export default App;