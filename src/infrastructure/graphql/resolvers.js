import loginService from "../../application/auth/login.service.js";

const resolvers = {
    Mutation: {
        login: async (_, { email, password }) => {
            const token = await loginService.login(email, password);
            return { token };
        },
    },
};

export default resolvers;
