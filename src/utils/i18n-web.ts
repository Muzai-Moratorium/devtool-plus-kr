import { TranslationMap, en } from '../locales/en';

export function t(key: string, section: keyof TranslationMap): any {
    const dict = (window as any).i18nDictionary as TranslationMap;
    const fallbackSection = en[section] as any;
    
    if (dict) {
        const sectionDict = dict[section] as any;
        if (sectionDict && sectionDict[key]) {
            return sectionDict[key];
        }
    }
    
    // Fallback to English
    return fallbackSection && fallbackSection[key] ? fallbackSection[key] : key;
}
