const data = [
    {
      id: 1,
      name: "Pepe",
      last_name: "Perez",
    },
  ];
  
  // Lista todo
  export const findAll = () => {
    return data;
  };
  
  // Buscar por id
  export const findOne = (id) => {
    return data.find((u) => u.id === Number(id));
  };
  
  // crear
  export const store = (user) => {
    user.id = data[data.length-1].id+1;
    data.push(user);
  };
  
  // update
  export const update = (id, user) => {
    const index = data.findIndex((u) => u.id === Number(id));
  
    data[index] = {
      ...data[index],
      ...user,
    };
  };
  
  export const remove = (id) => {
    const users = data.filter((u) => u.id !== Number(id));
    data.length = 0;
    data.push(...users);
  };