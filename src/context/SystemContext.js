import React, { createContext, useState } from 'react';

export const SystemContext = createContext();

export function SystemProvider({ children }) {
  const [name, setName] = useState('');
  const [divisao, setDivisao] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState([]);
  const [environment, setEnvironment] = useState([]);

  const handleNameChange = (event) => {
    setName(event);
  };

  return (
    <SystemContext.Provider
      value={{
        name,
        setName: handleNameChange,
        divisao,
        setDivisao,
        url,
        setUrl,
        description,
        setDescription,
        environment,
        setEnvironment,
        tags,
        setTags,
      }}
    >
      {children}
    </SystemContext.Provider>
  );
}
