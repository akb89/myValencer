const path = require('path');

const all = {
    root: path.resolve(path.join(__dirname, '..')),
    logger: {
        logFile: 'filevirtuelle2.log',
    },
    entities: [
        { name: 'organization', text: 'Organization' },
        { name: 'suborganization', text: 'Suborganization' },
        { name: 'device', text: 'Device' },
        { name: 'prequalification', text: 'Prequalification' },
        { name: 'apiuser', text: 'User of API' },
        { name: 'user', text: 'User' },
        { name: 'template', text: 'Template' },
        { name: 'page', text: 'Page' },
        { name: 'widget', text: 'Widget' },
        { name: 'task', text: 'Task' },
        { name: 'taskexec', text: 'Task execution' },
        { name: 'task_template', text: 'Task template' },
        { name: 'customer', text: 'Queue' },
    ],
};

module.exports = all;
