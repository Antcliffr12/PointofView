export type FormData = {
    name: string;
    email: string;
    message: string;    
    subject: string;
    from_name: string;
}

export type FormProps = {
    data: FormData;
    onSubmitSuccess: () => void;
}