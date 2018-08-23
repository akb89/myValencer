const Utils = require('../utils/utils');
const StringUtils = require('../utils/strings');
const APIRoutes = require('../api/routes');

module.exports = {
    call_api: async (ctx, {
        module_name, skip, limit,
    }) => {
        const { state, dispatch } = ctx;
        const id = state.queries.current.input;
        const { strictVUMatching, withExtraCoreFEs } = state.queries.current;

        if (Utils.is_id_type_query(id)) {
            dispatch(`${module_name}/call_api`, {
                method: 'GET',
                path: StringUtils.format_with_obj(
                    APIRoutes[module_name.toUpperCase()],
                    { id },
                ),
            });
        } else {
            dispatch(`${module_name}/call_api`, {
                method: 'GET',
                path: StringUtils.format_with_obj(
                    APIRoutes[`${module_name.toUpperCase()}S`],
                    {
                        id,
                        skip,
                        limit,
                        strictVUMatching,
                        withExtraCoreFEs,
                    },
                ),
            });

            if (module_name === 'annoset') {
                dispatch('fehierarchy/call_api', {
                    method: 'GET',
                    path: StringUtils.format_with_obj(
                        APIRoutes.FEHIERARCHY,
                        { id },
                    ),
                });
            }
        }
    },
};
