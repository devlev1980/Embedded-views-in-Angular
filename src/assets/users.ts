export interface IUser {
    id: number;
    name: string;
    age: number;
}

export const users: IUser[] = [
    {
     id: 0,
     name: 'Igor',
     age: 20
    },
    {
        id: 1,
        name: 'Alex',
        age: 22
    },
    {
        id: 0,
        name: 'Nir',
        age: 25
    },
];
