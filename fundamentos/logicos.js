function compras(tb1,tb2){
    const comprarSorvete = tb1 || tb2;
    const comprarTv50 = tb1 && tb2;
    // const comprarTv32 = !!(tb1 ^ tb2);
    const comprarTv32 = tb1 != tb2;
    const manterSaudavel = !comprarSorvete;

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }

}

//console.log(compras(1,1));
//console.log(compras(1,0));
//console.log(compras(0,1));
console.log(compras(0,0));