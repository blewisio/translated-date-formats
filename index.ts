const getFormat = (format: string, locale: string) => {
    // temporary, just proof-of-concept for now
    if (format !== 'MM/DD/YYYY') return format;

    switch (locale) {
        case 'de-DE': {
            return 'MM/TT/JJJJ';
        }
        case 'el-GR': {
            return 'MM/DD/EEEE';
        }
        case 'pl-PL': {
            return 'MM/DD/RRRR';
        }
        case 'pt-PT': {
            return 'MM/DD/AAAA';
        }
        default: {
            return 'MM/DD/YYYY';
        }
    }
};

export default getFormat;
