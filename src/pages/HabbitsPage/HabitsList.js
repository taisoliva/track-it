import React from 'react';
import styled from 'styled-components';
import Habit from './Habit';


function HabitsList({ habits, handleDeleteHabit }) {
  if (habits.length === 0) {
    return (
      <Subtitle>
        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
      </Subtitle>
    )
  }

  return (
    habits.map((habit) => (
      <Habit
        key={habit.id}
        {...habit}
        handleDeleteHabit={handleDeleteHabit}
      />
    )) 
  )
}

const Subtitle = styled.p`
  margin-top: 28px;

  font-size: 18px;
  line-height: 22px;

  color: #BABABA;
`;

export default HabitsList;