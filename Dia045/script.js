const computador = {
    processador: "Ryzen 7",
    memoria: "16GB",
    armazenamento: "1TB",
    sistema: "Windows 11"
};

for (const [chave, valor] of Object.entries(computador)) {
    console.log(chave + ": " + valor);
};