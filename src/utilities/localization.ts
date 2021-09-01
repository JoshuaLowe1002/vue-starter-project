// TAG for logging output.
const TAG: string = "Localization";

export let currentLanguage: string = "";

// Lookup table that will be populated with the language resource strings.
let localizedTextLookupTable: Record<string, string> = {
};

export function getLocalizedText(namespace: string, key: string, placeholderValues?: Array<string | number>): string {
	// Combine the namespace and key to create a kebab-case lookup for the target value, eg home-activity.welcome-message or button.cancel etc
	const target: string = `${namespace}.${key}`;
	let result: string = localizedTextLookupTable[target];

	if (result === undefined || result === null)	{
		// Return a marker to indicate there is a missing resource string.
		return `!! ${target} !!`;
	}

	// Substitute any placeholder markers in the localized string with the values provided.
	// eg $1 gets replaced with placeholderValues[0], $2 gets replaced with placeholderValues[1] etc
	if (placeholderValues !== undefined && placeholderValues.length > 0) {
		// Arrays usually start at 0, but using an offset of 1 is more user-friendly for the non-devs who will be creating the language files.
		const START_INDEX: number = 1;
		for (let position: number = START_INDEX; position <= placeholderValues.length; position++) {
			const placeholder: string = "$" + position.toString();
			let index: number = 0;
			while (true) {
				index = result.indexOf(placeholder);
				if (index < 0) {
					// No more placeholders left to substitute.
					break;
				}
				else	{
					const replacement: string = placeholderValues[position - START_INDEX].toString();
					result = result.replace(placeholder, replacement);
					// Advance past the replacement to avoid recursion should the replacement also contain a placeholder (it never should).
					index = index + replacement.length;
				}
			}
		}
	}
	return result;
}

// Merge the alternative language data into the default lookup table.
function mergeAlternativeLanguage(alternativeLanguageData: Record<string, string>): void {
	for (const key of Object.keys(alternativeLanguageData)) {
		localizedTextLookupTable[key] = alternativeLanguageData[key];
	}
}

/**
 * Loads the specified json language file asynchronously.
 */
async function loadLanguage(languageCode: string): Promise<Record<string, string>> {
	let result: Record<string, string> = { };

	try {
		const response: Response = await fetch(`/languages/${languageCode}.json`); 
		if (response.ok) {
			result = await response.json() as Record<string, string>;	
			currentLanguage = languageCode;
		}
	}
	catch (e) {
		console.warn(TAG, `Failed to load language code ${languageCode}: Error ${e}`);
	}
	return result;
}

// This is the list of languages that we currently support.
export const supportedLanguages: Array<string> = ["en", "de", "nl"];

// Uses the browser settings to load the user's preferred language file asynchronously.
// Will likely modify this to use a cookie or user setting at asome point.
export async function loadPreferredLanguageAsync(): Promise<boolean> {
	const defaultLanguage: string = "en";
	// Load the default language file first.
	localizedTextLookupTable = await loadLanguage(defaultLanguage);

	let preferredLanguage: string = defaultLanguage;

	try {
		if (preferredLanguage && supportedLanguages.includes(preferredLanguage)) {
			preferredLanguage = preferredLanguage;
		}
	}
	catch (error) {
		console.error(TAG, error);
	}
	// If we support the user's preferred language and its different to the default, load it and merge it in.
	if (preferredLanguage !== defaultLanguage) {
		console.log(TAG, `Loading preferred language '${preferredLanguage}'`);
		const alternativeLanguageData: Record<string, string> = await loadLanguage(preferredLanguage);
		mergeAlternativeLanguage(alternativeLanguageData);
	}
	return true;
}
