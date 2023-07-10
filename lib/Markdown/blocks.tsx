import { ComponentType, createContext } from "react";

export const ContentBlocksContext = createContext<
  Record<string, ComponentType<any>>
>({});
