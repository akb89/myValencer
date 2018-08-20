const config = require('../../../app/config');

const PREFIX = config.api_host;
const VERSION = 'v5';
const LANG = 'en';
const FN = '170';
const API_PATH = `${PREFIX}/${VERSION}/${LANG}/${FN}`;

module.exports = {
    FRAME: `${API_PATH}/frame/{id}/,/lexUnits,frameElements,semTypes`,
    FRAMES: `${API_PATH}/frames/,/lexUnits,frameElements,semTypes?vp={id}&skip={skip}&limit={limit}&strictVUMatching={strictVUMatching}&withExtraCoreFEs={withExtraCoreFEs}`,
    CYTOFRAMES: `${API_PATH}/cluster/frames?vp={id}&strictVUMatching={strictVUMatching}&withExtraCoreFEs={withExtraCoreFEs}`,
    FEHIERARCHY: `${API_PATH}/feHierarchy/name,children?vp={id}`,
    FRAMEHIERARCHY: `${API_PATH}/frameHierarchy/name,parents?frameName={id}`,
    FRAMERELATIONS: `${API_PATH}/frameRelations/{id}/,/type`,
    ANNOSET: `${API_PATH}/annoSet/{id}/,/sentence,labels,lexUnit,pattern,lexUnit.frame,pattern.valenceUnits,pattern.valenceUnits.FE`,
    ANNOSETS: `${API_PATH}/annoSets/,/sentence,labels,lexUnit,pattern,lexUnit.frame,pattern.valenceUnits,pattern.valenceUnits.FE?vp={id}&skip={skip}&limit={limit}&strictVUMatching={strictVUMatching}&withExtraCoreFEs={withExtraCoreFEs}`,
    LEXUNIT: `${API_PATH}/lexUnit/{id}/,/frame,semTypes`,
    LEXUNITS: `${API_PATH}/lexUnits/,/frame,semTypes?vp={id}&skip={skip}&limit={limit}&strictVUMatching={strictVUMatching}&withExtraCoreFEs={withExtraCoreFEs}`,
    CYTOLEXUNITS: `${API_PATH}/cluster/lexUnits?vp={id}&frameID={frameID}`,
};
