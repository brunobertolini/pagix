const fc = require('fast-check');
const { between } = require('../src/index');

describe('between', () => {
	it('should correctly constrain between min and max', () => fc.assert(
		fc.property(
			fc.integer(1, 100), fc.integer(-100, 200), fc.integer(0, 100),
			(min, value, delta) => {
				const max = min + delta;
				const constrained = between(value, min, max);
				expect(constrained).toBeLessThanOrEqual(max);
				expect(constrained).toBeGreaterThanOrEqual(min);
			}
		)
	));
});
