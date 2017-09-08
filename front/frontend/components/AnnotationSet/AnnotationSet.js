const _ = require('lodash');
const StringUtils = require('../../utils/strings');

module.exports = {
    name: 'AnnotationSet',
    props: ['sentence', 'labels', 'lexUnit', 'pattern'],
    methods: {
        format_pattern(pattern) {
            return pattern.valenceUnits.reduce((array, val) => {
                array.push(`${val.FE}.${val.PT}.${val.GF}`);
                return array;
            }, []).join(' ');
        },
        format_fe_pt_gf(valence) {
            let name = '';
            if ('FE' in valence) {
                name += `${valence.FE.name}.`;
            } else {
                name += '*.';
            }

            if ('PT' in valence) {
                name += `${valence.PT.name}.`;
            } else {
                name += '*.';
            }

            if ('GF' in valence) {
                name += valence.GF.name;
            } else {
                name += '*';
            }

            return name;
        },
        format_sentence(sentence, labels, frame) {
            const valences = labels.reduce((obj, label) => {
                const name = label.name;
                const start = label.startPos;
                const end = label.endPos;
                if (start === end) {
                    return obj;
                }

                if (!(start in obj)) {
                    obj[start] = {};
                }
                obj[start][label.type] = { end, name };
                return obj;
            }, {});

            const new_labels = _.reduce(valences, (array, valence, start) => {
                if (!('Target' in valence) &&
                        !('FE' in valence) &&
                        !('PT' in valence) &&
                        !('GF' in valence)) {
                    return array;
                }
                if ('FE' in valence) {
                    array.push({
                        text: '[',
                        pos: parseInt(start, 10),
                    });
                    array.push({
                        text: `]<sub>${this.format_fe_pt_gf(valence)}</sub>`,
                        pos: valence.FE.end + 1,
                    });
                } else {
                    array.push({
                        text: '<strong>',
                        pos: parseInt(start, 10),
                    });
                    array.push({
                        text: `</strong><em><sub>${frame.name}</sub></em>`,
                        pos: valence.Target.end + 1,
                    });
                }
                return array;
            }, []);

            new_labels.sort((a, b) => (b.pos - a.pos));

            return new_labels.reduce((s, label) => {
                const pos = label.pos;
                const text = label.text;
                s = StringUtils.splice(s, pos, 0, text);
                return s;
            }, sentence.text);
        },
    },
};
