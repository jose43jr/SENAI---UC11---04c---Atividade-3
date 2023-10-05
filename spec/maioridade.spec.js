describe("Teste de validação - Maior Idade", function(){

    it("Validação Maior Idade", function(){
        expect(Maioridade(18)).toBe('Maior Idade');
    });
});

describe("Teste de validação - Menor de Idade", function(){
    it("Validação Menor Idade", function(){
        expect(Maioridade(20)).toBe('Menor Idade');
    });

});