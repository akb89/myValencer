const PREFIX = 'http://localhost:3030'; // TODO to be defined in a config file!
const VERSION = 'v4';
const LANG = 'en';
const FN = '170';
const API_PATH = `${PREFIX}/${VERSION}/${LANG}/${FN}`;

module.exports = {
    FRAME: `${API_PATH}/frame/{id}/,/lexUnits,frameElements,semTypes`,
    FRAMES: `${API_PATH}/frames/,/lexUnits,frameElements,semTypes?vp={id}`,
    ANNOSET: `${API_PATH}/annoSet/{id}/,/sentence,labels,lexUnit,pattern,lexUnit.frame,pattern.valenceUnits`,
    ANNOSETS: `${API_PATH}/annoSets/,/sentence,labels,lexUnit,pattern,lexUnit.frame,pattern.valenceUnits?vp={id}`,
    LEXUNIT: `${API_PATH}/lexUnit/{id}/,/frame,semTypes`,
    LEXUNITS: `${API_PATH}/lexUnits/,/frame,semTypes?vp={id}`,
};
