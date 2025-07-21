 export function formatCurrency(priceCents) { //função que obriga o uso de duas casas decimais e converte de centimos para Euros
      return (priceCents / 100).toFixed(2);
    }