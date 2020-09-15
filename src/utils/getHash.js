const getHash = () => 
    location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/'; // || operador or

export default getHash;