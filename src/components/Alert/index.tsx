import { useEffect, useState } from "react";
import { BarraTempo, Box, Content, Title, Container } from "./style";
import { MdDoneAll, MdInfoOutline } from "react-icons/md";

type AlertProps = {
  type: "success" | "error";
  show: boolean;
  title: string;
  setShow: () => void;
  autoHideDuration?: number;
  children?: React.ReactNode;
};

export const Alert = ({
  type,
  show,
  setShow,
  autoHideDuration = 5000,
  children,
  title,
}: AlertProps) => {
  const [whidt, setWhidt] = useState(100);

  useEffect(() => {
    if (show && autoHideDuration) {
      setWhidt(100);

      const timer = setTimeout(() => {
        setShow();
      }, autoHideDuration);

      const step = 100 / (autoHideDuration / 100); // diminui a cada 100ms
      const interval = setInterval(() => {
        setWhidt((prev) => {
          const newWidth = prev - step;
          return newWidth >= 0 ? newWidth : 0;
        });
      }, 100);

      return () => {
        clearInterval(interval);
        clearTimeout(timer);
      };
    }
  }, [show, autoHideDuration, setShow]);

  return (
    <Box show={show} type={type}>
      <Container>
        <div className="conteudo">
          {type === "error" ? (
          <MdInfoOutline className="icon" />
        ) : (
          <MdDoneAll className="icon" />
        )}
        <Content>
          <Title>{title}</Title>
          {children}
        </Content>
        </div>
        <BarraTempo w={whidt} />
      </Container>
    </Box>
  );
};
