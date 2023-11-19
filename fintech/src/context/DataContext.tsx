import React from "react";
import useFetch from "../hooks/useFetch";

type IDataContext = {
  data: IVenda[] | null;
  loading: boolean;
  error: string | null;
}

type IVenda = {
  id: string;
  nome: string;
  preco: number;
  status: "pago" | "processando" | "falha";
  pagamento: "boleto" | "pix" | "cartao";
  data: string;
  parcelas: number | null
}

const DataContext = React.createContext<IDataContext | null>(null);

export const useData = () => {
  const context = React.useContext(DataContext);
  if(!context) throw new Error('Falta de Provider!');
  return context;
}

export const DataContextProvider = (
    {children}: React.PropsWithChildren
  ) => {

    const {data, loading, error} = useFetch<IVenda[]>("https://data.origamid.dev/vendas/");

    return <DataContext.Provider value={{data, loading, error}}>
      {children}
    </DataContext.Provider>
  }