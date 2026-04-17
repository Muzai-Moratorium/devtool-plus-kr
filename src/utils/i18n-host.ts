import * as vscode from 'vscode';
import { en, TranslationMap } from '../locales/en';
import { ko } from '../locales/ko';

const locales: Record<string, TranslationMap> = { en, ko };

export function getDictionary(): TranslationMap {
    const currentLang = vscode.env.language.startsWith('ko') ? 'ko' : 'en';
    return locales[currentLang] || locales['en'];
}

export function t(key: string, section: keyof TranslationMap): any {
    const dict = getDictionary();
    const sectionDict = dict[section] as any;
    if (sectionDict && sectionDict[key]) {
        return sectionDict[key];
    }
    // Fallback to English
    const enSectionDict = en[section] as any;
    return enSectionDict && enSectionDict[key] ? enSectionDict[key] : key;
}
