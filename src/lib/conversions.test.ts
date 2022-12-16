import { convertCurrencyToLocaleString, convertDateToLocaleString } from "./conversions";
import type { SupporterCurrencies } from "../../types";
describe('conversions', () => {
  describe('convertCurrencyToLocaleString', () => {
    test.each([
      {amount: 1, currency: 'GBP', expected: '£1.00'},
      {amount: 1, currency: 'USD', expected: '$1.00'},
      {amount: 1, currency: 'EUR', expected: '€1.00'},
    ])('should convert %amount into a %expected when currency is %currency', ({amount, currency, expected}) => {
      expect(convertCurrencyToLocaleString(amount, currency as SupporterCurrencies)).toBe(expected);
    })

  });
  describe('convertDateToLocaleString', () => {
    it('should convert a YYYY-MM-DD format to en-GB localString', () => {
      expect(convertDateToLocaleString('2022-06-22')).toBe('22 June 2022');
    });
  });
})
