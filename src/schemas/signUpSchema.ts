import Joi from "joi"

const signUpSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    age: Joi.number().required(),
    country: Joi.string().required(),
    region: Joi.string().required(),
    password: Joi.string().required(),
    confirmPassword: Joi.ref('password')
})

export default signUpSchema;