import { pagix } from '../src/index.js'

	describe('pagix', () => {
	it('handles the first page', () => {
	expect(
	pagix({ records: 100, current: 1 })
	).toEqual({
	total: 10,
	current: 1,
	start: [1],
	middle: [2, 3, 4, 5],
	end: [10],
	next: 4,
	prev: false,
	from: 1,
	to: 10,
	})
	})
	
	it('handles the last page', () => {
	expect(
	pagix({ records: 100, current: 10 })
	).toEqual({
	total: 10,
	current: 10,
	start: [1],
	middle: [6, 7, 8, 9],
	end: [10],
	next: false,
	prev: 7,
	from: 91,
	to: 100,
	})
	})
	
	it('handles truncated middle pages', () => {
	expect(
	pagix({ records: 100, current: 5 })
	).toEqual({
	total: 10,
	current: 5,
	start: [1],
	middle: [4, 5, 6],
	end: [10],
	next: 8,
	prev: 2,
	from: 41,
	to: 50,
	})
	})
	})
	
