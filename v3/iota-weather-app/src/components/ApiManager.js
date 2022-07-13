import { languageList, languageCodes } from "./CodeAssets";

const getAvailableLanguages = () => {
    return languageList;
}

const getLanguageCode = () => {
    // [DO STUFF]...
    return languageCodes;
}

const setLanguage = (lang) => {
    var apiSegment = "";
    try {
        apiSegment.concat("&lang=".concat(languageCodes[languageList.find(lang)]));
    } catch (error) {
        console.log("[ERROR] -> languageNotFound");
        // return "[ERROR] -> languageNotFound";
    }
    return apiSegment;
}

export { getAvailableLanguages, setLanguage, getLanguageCode };