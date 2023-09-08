import styled from "styled-components";
import useProgress from "../../hooks/useProgress"

export default function Subtitle({doneHabitsQuantity}){

    const {progress} = useProgress();

    return (
        <Paragraph doneHabitsQuantity={doneHabitsQuantity}>
          {
            doneHabitsQuantity === 0
              ? "Nenhum hábito concluído ainda"
              : `${parseFloat(progress).toFixed(0)}% dos hábitos concluídos`
          }
        </Paragraph>
      );
    }

const Paragraph = styled.p`
       font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        line-height: 22px;
    
      color: ${(props) => props.doneHabitsQuantity !== 0 ? "#8FC549" : "#BABABA"};
    `;
    
