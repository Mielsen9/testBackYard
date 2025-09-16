import { useState } from "react";

// useNav
export const useItemToggle = () => {
  const [activeId, setActiveId] = useState<string>("1");

  // Функція для перемикання стану навігації
  const activeIdHandler = (id: string) => {
    setActiveId(id);
  };

  return { activeId, activeIdHandler };
};