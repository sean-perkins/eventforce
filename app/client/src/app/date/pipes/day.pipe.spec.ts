import { DayPipe } from './day.pipe';

describe('DayPipe', () => {

    it('create an instance', () => {
        const pipe = new DayPipe();
        expect(pipe).toBeTruthy();
    });

     it('should return a leading-zero day', () => {
        const pipe = new DayPipe();
        const testDate = new Date(2017, 0, 5);
        expect(pipe.transform(testDate.toString())).toBe('05');
    });

    it('should return a day', () => {
        const pipe = new DayPipe();
        const testDate = new Date(2017, 0, 12);
        expect(pipe.transform(testDate.toString())).toBe('12');
    });

    it('should return a blank string', () => {
        const pipe = new DayPipe();
        const testDate = 'INVALID_DATE';
        expect(pipe.transform(testDate)).toBe('');
    });

});
