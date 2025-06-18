import { useEffect } from "react";
import { Box, Content, Title } from "./style";
import { MdDoneAll, MdInfoOutline } from "react-icons/md";

type AlertProps = {
  type: "success" | "error" ;
  show: boolean;
  title: string;
  setShow: (show: boolean) => void;
  autoHideDuration?: number;
  children?: React.ReactNode;
};


export const Alert = ({type,show,setShow,autoHideDuration = 6000,children,title}: AlertProps) => {

  useEffect(() => {
    if (show && autoHideDuration) {
      const timer = setTimeout(() => {
        setShow(false);
      }, autoHideDuration);

      return () => clearTimeout(timer);
    }
  }, [show, autoHideDuration, setShow]);

  return (
    <Box show={show} type={type} >
      {type==='error'? <MdInfoOutline className="icon"/>: <MdDoneAll className="icon"/>}
      <Content>
        <Title>{title}</Title>
        {children}
      </Content>
    </Box>
  );
};    
