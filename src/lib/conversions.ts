import type {SupporterCurrencies} from '../../types';

export function convertCurrencyToLocaleString(amount: number, currency: SupporterCurrencies = 'GBP'): string {
    // I am using en and not en-GB because the latter will add 'US' to the currency symbol when the currency is USD. That will not match the design.
    return amount.toLocaleString('en', { style: 'currency', currency });
}

export function convertDateToLocaleString(date:string): string {
    return new Date(date).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
}
