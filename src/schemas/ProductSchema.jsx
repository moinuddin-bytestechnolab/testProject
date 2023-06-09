import * as Yup from 'yup';


export const ProductSchema  = Yup.object({
    name : Yup.string().required('Please enter product name'),
    price : Yup.number().positive("Please enter product price").required('Please enter product price'),
    stock : Yup.string().required('Please enter product stock'),
    sku : Yup.string().required('Please enter product sku'),
    description : Yup.string().required('Please enter product description'),
})
