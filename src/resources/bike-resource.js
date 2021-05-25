const options = {
    properties: {
        ownerId: {
            isVisible: {
                edit: false, show: true, list: true, filter: true,
            },
        },
    },
    actions: {
        edit: { isAccessible: canEditCars },
        delete: { isAccessible: canEditCars },
        new: {
            before: async (request, { currentAdmin }) => {
                request.payload = {
                    ...request.payload,
                    ownerId: currentAdmin._id,
                };
                return request;
            },
        },
    },
};
