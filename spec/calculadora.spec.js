describe("Teste Calculadora", function(){
    
    it("Somas Válidas",function(){
        expect(soma(1,2)).toBe(3);
        expect(soma(9,9)).toBe(18);
    });

    it("Somas Inválidas",function(){
        expect(soma(1,2)).not.toBe(5);
        expect(soma(9,9)).not.toBe(15);
    });

    it("Subtrações válidas",function(){
        expect(subtracao(5,2)).toBe(3);
        expect(subtracao(5,3)).toBe(2);
    });

    it("multiplicações válidas",function(){
        expect(multiplicacao(2,2)).toBe(4);
        expect(multiplicacao(9,9)).toBe(81);
    });

    it("Divisôes válidas",function(){
        expect(divisao(4,2)).toBe(2);
        expect(divisao(9,9)).toBe(1);
    });
});

