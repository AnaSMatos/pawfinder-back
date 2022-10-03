import Joi from "joi";
var newPostSchema = Joi.object({
    animalName: Joi.string().required(),
    animalType: Joi.string().required(),
    animalAge: Joi.number().required(),
    description: Joi.string().required(),
    image: Joi.string().uri().required()
});
export default newPostSchema;
