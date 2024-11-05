import { findNumbers, parsePhoneNumber } from 'libphonenumber-js';

export const getUsFormat = (phone) => {
    if (!phone) {
        return phone;
    }
    
    let phoneTo = findNumbers(
        phone,
        'US',
        { v2: true }
    );

    if (phoneTo.length > 0) {
        if (phoneTo[0].number.country == 'US') {
            return parsePhoneNumber(phoneTo[0].number.nationalNumber, "US").formatNational();
        } else {
            return phone;
        }
    } else {
        return phone;
    }
}

export const getFullUsFormat = (phone) => {
    if (!phone) {
        return phone;
    }

    let phoneTo = findNumbers(
        phone,
        'US',
        { v2: true }
    );

    if (phoneTo.length > 0) {
        if (phoneTo[0].number.country == 'US') {
            return parsePhoneNumber(phoneTo[0].number.nationalNumber, "US").formatInternational();
        } else {
            return phone;
        }
    } else {
        return phone;
    }
}

