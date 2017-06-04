import { MonthPipe } from './month.pipe';

describe('MonthPipe', () => {

    it('create an instance', () => {
        const pipe = new MonthPipe();
        expect(pipe).toBeTruthy();
    });

    it('should return a month name', () => {
        const pipe = new MonthPipe();
        const testDate = new Date(2017, 0);
        expect(pipe.transform(testDate.toString())).toBe('January');
    });

    it('should return a blank string', () => {
        const pipe = new MonthPipe();
        const testDate = 'INVALID_DATE';
        expect(pipe.transform(testDate)).toBe('');
    });

});
