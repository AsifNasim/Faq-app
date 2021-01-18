import React , {useState, useEffect, useRef} from 'react'
import {ChakraProvider, theme} from '@chakra-ui/react'
import { Navbar } from './Navbar'
import {Faq} from './Faq'
import alanBtn from "@alan-ai/alan-sdk-web";
import { scroller } from 'react-scroll'
export const App = () => {
  const alanBtnInstance = useRef(null);
const [index, setIndex] = useState(null);

useEffect(() => {
    if (!alanBtnInstance.current) {
        alanBtnInstance.current = alanBtn({
            key: '58933cc3518a7049385a1f3a0f8a7e872e956eca572e1d8b807a3e2338fdd0dc/stage',
            // command data is the object that we are sending back from our voice script
            onCommand: (commandData) => {
                if (commandData.command === 'gotoFaq') {
                        scroller.scrollTo(`accordion-item-${commandData.faqId}`)
                        // Call the client code that will react to the received command
                        setIndex(commandData.faqId -1);
                    }
                }
        });
    }
}, []);
  return (
    // passing theme as a prop
    <ChakraProvider theme={theme}>
      <Navbar/>
      {/* passing both the state values as props */}
      <Faq index= {index} setIndex = {setIndex} />
    </ChakraProvider>
  )
}
