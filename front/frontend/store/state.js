module.exports = {
    queries: {
        items: 20,
        default: [
            'Donor.NP.Ext Theme.NP.Obj Recipient.PP.Dep',
            'Speaker Message Addressee',
            'NP.Obj NP.Dep',
            'Sinterrog Topic',
        ],
        current: {
            input: '',
        },
    },
    display: {
        type: 'ANNOSET',
        subtype: 'ENT',
    },
    feColorMap: {},
    colorIndex: 1,
};
