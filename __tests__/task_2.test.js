const getMonth = require('../task_2.js');
describe ('name month by its number from 1 to 12', () => {
    it ("entering 1 shows January", () => {
        const result = getMonth(1);
        expect(result).toBe('January');
    });
    it ("entering 6 shows June", () => {
        const result = getMonth(6);
        expect(result).toBe('June');
    });
    it ("entering 12 shows December", () => {
        const result = getMonth(12);
        expect(result).toBe('December');
    });
    it ("entering any number more than 12 says that incorrect number is entered", () => {
        const result = getMonth(15);
        expect(result).toBe('Incorrect number');
    });
    it ("entering any number less than 1 says that incorrect number is entered", () => {
        const result = getMonth(0);
        expect(result).toBe('Incorrect number');
    });
});