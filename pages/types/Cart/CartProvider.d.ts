import type {CartType} from './CartItem';
//Aqui quiero definir State, el cual es el mismo que el response de la API de GraphQL (CartType)
export type State ={}| CartType;
//Aqui me falta definir el type de las acciones

export type Action = {
    type: string;
    payload: any;
}