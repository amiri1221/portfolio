import * as Yup from 'yup'
export const contactValidationSchema = Yup.object().shape({
    fullname: Yup.string().required("نام و نام خانوادگی الزامی است"),
    email: Yup.string().email("آدرس ایمیل معتبر نیست").required("نوشتن ایمیل الزامی است"),
    subject: Yup.string().required("نوشتن عنوان الزامی است"),
    message: Yup.string().required("نوشتن پیام الزامی است"),
    recaptcha: Yup.string().required("کپجا الزامی است"),
})