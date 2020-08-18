export const transformPeople = ({
    results = [], 
} = {}) => results.map(
    ({
        name: {
            title: name,
            last: lastName,
        }
    }) => ({
        name,
        lastName
    })
);
