import { useEffect } from "react";

type AlertProps = {
  type: "success" | "error" | "info";
  show: boolean;
  setShow: (show: boolean) => void;
  autoHideDuration?: number;
  title: string;
  children: React.ReactNode;
};


export const Alert = ({type,show,setShow,autoHideDuration = 6000,title,children}: AlertProps) => {

  useEffect(() => {
    if (show && autoHideDuration) {
      const timer = setTimeout(() => {
        setShow(false);
      }, autoHideDuration);

      return () => clearTimeout(timer);
    }
  }, [show, autoHideDuration, setShow]);

  return (
    <div>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
};    
