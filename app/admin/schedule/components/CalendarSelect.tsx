'use client';

import {
  ChakraProvider, Input,
} from '@chakra-ui/react'
import { useState } from 'react';

interface CalendarSelect {
  onData: any,
}

const CalendarSelect: React.FC<CalendarSelect> = ({
  onData,
}) => {
  const [datetime, setDatetime] = useState('');
  onData(datetime)

  const handleInputChange = (event: any) => {
    const inputDatetime = event.target.value;
    const [date, time] = inputDatetime.split('T');
    const [year, month, day] = date.split('-');
    const [hours, minutes] = time.split(':');

    const formattedDatetime = `${day}-${month}-${year} ${hours}:${minutes}`;
    setDatetime(formattedDatetime);
    onData(datetime)
  };
  

  return (
    <ChakraProvider>
      <div>
        <Input
          placeholder="Selectează ziua și ora"
          size="lg"
          type="datetime-local"
          onChange={handleInputChange}
        />
      </div>
    </ChakraProvider>
  )
}

export default CalendarSelect;