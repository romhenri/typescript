import React from "react";
import useFetch from "../hooks/useFetch";

type IDataContext = {
  data: IVenda[] | null;
  loading: boolean;
  error: string | null;
  start: string;
  end: string;
  setStart: React.Dispatch<React.SetStateAction<string>>;
  setEnd: React.Dispatch<React.SetStateAction<string>>;
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

function getDate(n: number) {
  const date = new Date;

  date.setDate(date.getDate() - n);
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth()+ 1).padStart(2, "0");
  const yyyy = String(date.getFullYear());
  
  return `${yyyy}-${mm}-${dd}`;
}

export const DataContextProvider = (
    {children}: React.PropsWithChildren
  ) => {
    const [start, setStart] = React.useState(getDate(30));
    const [end, setEnd] = React.useState(getDate(0));

    const {data, loading, error} = useFetch<IVenda[]>(`https://data.origamid.dev/vendas/?inicio=${start}&final=${end}`);

    return <DataContext.Provider value={{data, loading, error, start, end, setStart, setEnd}}>
      {children}
    </DataContext.Provider>
  }