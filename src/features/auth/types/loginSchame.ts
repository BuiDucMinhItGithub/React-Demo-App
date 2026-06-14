import zod from "zod";

export const loginSchema = zod.object({
    username: zod.string().nonempty({message: "Username Fill đên đi"}),
    password: zod.string().nonempty({message: "Password Fill đên đi"})
});