import { between } from '../src/index.js'

	describe('between', () => {
	it('returns min when value is below min', () => {
	expect(between(-5, 1, 10)).toBe(1)
	})
	
	it('returns max when value is above max', () => {
	expect(between(15, 1, 10)).toBe(10)
	})
	
	it('returns value when within range', () => {
	expect(between(5, 1, 10)).toBe(5)
	})
	})
	
