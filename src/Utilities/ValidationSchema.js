import * as Yup from 'yup';

const catSchema = Yup.object().shape({

    CategoryName: Yup.string().max(25, "25 characters maximum").required(),
    CateforyDescription: Yup.string().max(250, "250 characters maximum").required()
    
})

const toDoSchema = Yup.object().shape({
Action: Yup.string().max(25, "maximum 25 characters").required(),
Done: Yup.boolean().oneOf([true], 'Field must be marked')
})
export {toDoSchema};
export default catSchema;