const fc = require('fast-check');
const { pagix } = require('../src/index');


describe('pagix', () => {
	it('should correctly calculate next and prev', () => fc.assert(
		fc.property(
			fc.integer(1, 10), fc.integer(1, 10), fc.integer(1, 10),
			(current, pages, pageSize) => {
				const result = pagix({ records: pages * pageSize, current, limit: pageSize });
				expect(result.next).toBe(result.current < pages ? result.current + 1 : false)
				expect(result.prev).toBe(result.current > 1 ? result.current - 1 : false)
			}
		)
	))
})
