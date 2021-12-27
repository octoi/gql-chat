const messages: string[] = [];

export const getMessages = () => [...messages];
export const addMessage = (msg: string) => messages.push(msg);
