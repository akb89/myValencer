const Config = require('../../../app/config');

const PREFIX = Config.api_host;
const VERSION = 'v4';
const LANG = 'en';
const FN = '170';
const API_PATH = `${PREFIX}/${VERSION}/${LANG}/${FN}`;

module.exports = {
    FRAME: `${API_PATH}/frame/{id}/,/lexUnits,frameElements,semTypes`,
    FRAMES: `${API_PATH}/frames/,/lexUnits,frameElements,semTypes?vp={id}&skip={skip}&limit={limit}`,
    CYTOFRAMES: `${API_PATH}/cluster/frames?vp={id}`,
    FRAMERELATIONS: `${API_PATH}/frameRelations/{id}/,/type`,
    ANNOSET: `${API_PATH}/annoSet/{id}/,/sentence,labels,lexUnit,pattern,lexUnit.frame,pattern.valenceUnits,pattern.valenceUnits.FE`,
    ANNOSETS: `${API_PATH}/annoSets/,/sentence,labels,lexUnit,pattern,lexUnit.frame,pattern.valenceUnits,pattern.valenceUnits.FE?vp={id}&skip={skip}&limit={limit}`,
    LEXUNIT: `${API_PATH}/lexUnit/{id}/,/frame,semTypes`,
    LEXUNITS: `${API_PATH}/lexUnits/,/frame,semTypes?vp={id}&skip={skip}&limit={limit}`,
    CYTOLEXUNITS: `${API_PATH}/lexUnits?vp={id}&format=cytoscape`,
};
