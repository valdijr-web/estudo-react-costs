import {useState} from 'react';

import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';

import styles from '../project/Project.module.css';
function ServiceForm({handleSubmit, btnText, projectData}){

    const [service, setService] = useState({});
    function submit(e){
        e.preventDefault();
        projectData.services.push(service);
        handleSubmit(projectData);
    }

    function handleOnchange(e){
        setService({...service, [e.target.name]: e.target.value})
    }
    return (
        <form onSubmit={submit} className='styles.form'>
            <Input
                type="text"
                text="Nome do Serviço"
                name="name"
                placeholder="Insira o nome do serviço"
                handleOnchange={handleOnchange}
            />

            <Input
                type="number"
                text="Custo do serviço"
                name="cost"
                placeholder="Insira o valor total"
                handleOnchange={handleOnchange}
            />

            <Input
                type="text"
                text="Descrição do Serviço"
                name="decription"
                placeholder="Descreva o serviço"
                handleOnchange={handleOnchange}
            />

            <SubmitButton text={btnText} />
        </form>
    );
}
export default ServiceForm;